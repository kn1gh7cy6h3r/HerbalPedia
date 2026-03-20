import { login } from '@/app/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  const { error, message } = resolvedSearchParams;

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto w-full max-w-sm border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">HerbalPedia Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={login} className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
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
            {message && (
              <div className="bg-green-50 text-green-700 border border-green-200 text-sm p-3 rounded-md">
                {message}
              </div>
            )}
            <Button type="submit" className="w-full mt-2 bg-green-600 hover:bg-green-700">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4 text-green-600">
              Sign up
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
