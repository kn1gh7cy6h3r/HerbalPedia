import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Leaf className="hidden h-6 w-6 md:inline-block text-green-600" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by IIT Patna team. The information on HerbalPedia is for educational purposes only.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="text-sm text-muted-foreground hover:underline">
            About
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
