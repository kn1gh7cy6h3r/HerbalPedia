import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button-variants';
import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/server';

export default async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="hidden font-bold sm:inline-block">
              HerbalPedia
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/plants"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Plants
            </Link>
            <Link
              href="/ailments"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Ailments
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Input
                id="search-plants-input"
                type="search"
                placeholder="Search plants..."
                className="h-9 md:w-[300px]"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            {user ? (
              <Link href="/profile" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                Profile
              </Link>
            ) : (
              <Link href="/login" className={buttonVariants({ variant: "default", size: "sm" })}>
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
