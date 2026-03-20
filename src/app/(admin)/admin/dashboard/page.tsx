import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button-variants';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

async function getStats() {
  // Fetch all plants
  const { data: plants, error } = await supabase
    .from('plants')
    .select('id, status, common_names, scientific_name')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Failed to fetch plants:", error);
    return [];
  }
  return plants;
}

export default async function AdminDashboard() {
  const plants = await getStats();

  return (
    <div className="container py-8 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage your botanical database content.</p>
        </div>
        <Link href="/admin/plants/new" className={buttonVariants({ className: "bg-green-600 hover:bg-green-700" })}>
          <Plus className="mr-2 h-4 w-4" /> Add New Plant
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Plants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{plants.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{plants.filter((p: Record<string, unknown>) => p.status === 'published').length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{plants.filter((p: Record<string, unknown>) => p.status === 'draft').length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Plants</CardTitle>
          <CardDescription>A list of recently added or modified plants in the database.</CardDescription>
        </CardHeader>
        <CardContent>
          {plants.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No plants found.</div>
          ) : (
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Scientific Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {plants.map((plant: Record<string, unknown>) => (
                    <tr key={String(plant.id)} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle font-medium">{String((plant.common_names as Record<string, unknown>)?.english || plant.scientific_name)}</td>
                      <td className="p-4 align-middle text-muted-foreground italic">{String(plant.scientific_name)}</td>
                      <td className="p-4 align-middle">
                        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          plant.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {String(plant.status)}
                        </div>
                      </td>
                      <td className="p-4 align-middle text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/plants/${plant.id}/edit`} className={buttonVariants({ variant: "outline", size: "icon" })}>
                            <Edit2 className="h-4 w-4" />
                          </Link>
                          <button className={buttonVariants({ variant: "outline", size: "icon", className: "text-red-600 hover:text-red-700" })}>
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
