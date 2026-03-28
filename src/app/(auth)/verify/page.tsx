import { verifyOtp } from '@/app/(auth)/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; email?: string }>
}) {
  const resolvedSearchParams = await searchParams;
  const { error, email } = resolvedSearchParams;

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto w-full max-w-sm border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
          <CardDescription>
            We sent a 6-digit confirmation code to <span className="font-semibold text-green-700">{email || 'your email'}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={verifyOtp} className="grid gap-4">
            <input type="hidden" name="email" value={email || ''} />
            <div className="grid gap-2">
              <Label htmlFor="code">Confirmation Code</Label>
              <Input
                id="code"
                name="code"
                type="text"
                placeholder="123456"
                required
                maxLength={6}
                className="text-center tracking-widest text-lg"
              />
            </div>
            
            {error && (
              <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            
            <Button type="submit" className="w-full mt-2 bg-green-600 hover:bg-green-700">
              Verify & Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/login" className="text-center text-sm text-muted-foreground w-full">
            &larr; Back to Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
