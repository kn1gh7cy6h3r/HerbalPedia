'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { useState, FormEvent, useEffect, Suspense } from 'react';

function SearchInputInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams?.get('q') || '');

  useEffect(() => {
    setQuery(searchParams?.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/plants?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/plants`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full transition-all">
      <Input
        type="search"
        placeholder="Search plants, ailments, names..."
        className="h-9 md:w-[300px] bg-white/50 focus:bg-white transition-colors"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

// Fallback is required for useSearchParams inside Pages Router/App Router build phase
export default function SearchInput() {
  return (
    <Suspense fallback={<Input type="search" placeholder="Search plants..." className="h-9 md:w-[300px] opacity-50" disabled />}>
      <SearchInputInner />
    </Suspense>
  );
}
