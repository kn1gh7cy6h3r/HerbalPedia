import { signup } from '@/app/(auth)/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  const { error } = resolvedSearchParams;

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto w-full max-w-sm border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your details to create your HerbalPedia account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signup} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
              />
            </div>
            {error && (
              <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full mt-2 bg-green-600 hover:bg-green-700">
              Sign up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 text-green-600">
              Login
            </Link>
          </div>
          <Link href="/" className="text-center text-sm text-muted-foreground w-full">
            &larr; Back to Home
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
