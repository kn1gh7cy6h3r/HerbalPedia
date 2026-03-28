import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button-variants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { changePassword, logout } from '@/app/(auth)/auth/actions'
import { User, Mail, ShieldCheck, CalendarDays, KeyRound, LogOut } from 'lucide-react'

export default async function ProfilePage(props: { searchParams: Promise<{ error?: string; message?: string }> }) {
  const supabase = await createClient()

  // Get active session
  const { data: { user } } = await supabase.auth.getUser()

  const resolvedSearchParams = await props.searchParams;
  const { error, message } = resolvedSearchParams || {};

  if (!user) {
    redirect('/login')
  }

  // Fetch expanded profile data
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const formattedDate = new Date(profile?.created_at || user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="container max-w-2xl mx-auto py-10 px-4">
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
        <div className="flex items-center gap-2">
           {profile?.role === 'admin' && (
             <Link href="/admin/dashboard" className={buttonVariants({ variant: "outline", size: "sm" })}>
               <ShieldCheck className="mr-2 h-4 w-4" />
               Admin
             </Link>
           )}
           <form action={logout}>
             <Button type="submit" variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
               <LogOut className="h-4 w-4 mr-2" />
               Logout
             </Button>
           </form>
        </div>
      </div>

      {error && (
        <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md mb-6">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-50 text-green-700 border border-green-200 text-sm p-3 rounded-md mb-6">
          {message}
        </div>
      )}

      <div className="grid gap-8">
        {/* Main Profile Info */}
        <Card className="border-none shadow-md">
          <CardHeader className="bg-green-50/50 rounded-t-xl border-b">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-green-700" />
              Account Details
            </CardTitle>
            <CardDescription>
              Your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 grid gap-6">
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-2xl">
                {profile?.full_name ? profile.full_name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-xl">{profile?.full_name || 'HerbalPedia User'}</h3>
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Email Address</Label>
              <div className="flex items-center gap-2 text-md">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Member Since</Label>
              <div className="flex items-center gap-2 text-md">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>{formattedDate}</span>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Change Password Form */}
        <Card className="border-none shadow-md">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <KeyRound className="h-5 w-5 text-muted-foreground" />
              Change Password
            </CardTitle>
            <CardDescription>
              Update your account password securely.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form action={changePassword} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto sm:justify-self-start mt-2 bg-green-600 hover:bg-green-700">
                Update Password
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

// Inline label component to match standard shadcn formatting without making a new file just for this page
function Label({ className, htmlFor, children }: React.HTMLAttributes<HTMLLabelElement> & { htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
      {children}
    </label>
  )
}
