import Link from "next/link";
import { Search, ShieldAlert, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-green-50/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-[800px]">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-green-900">
              Your Encyclopedia of Indian Medicinal Plants
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl leading-relaxed">
              Discover verified information about 70+ traditional Indian herbs. Search by plant name, health concern, or view safety ratings and preparations.
            </p>
          </div>
          <div className="w-full max-w-lg space-y-2">
            <form className="flex space-x-2">
              <Input className="flex-1 bg-white" placeholder="Search for a plant e.g. Tulsi, Ashwagandha..." type="search" />
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Search
              </Button>
            </form>
            <p className="text-sm text-gray-500">
              Try: <Link href="/plants/holy-basil-tulsi" className="underline underline-offset-2">Holy Basil (Tulsi)</Link> or <Link href="/plants/neem" className="underline underline-offset-2">Neem</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-0 shadow-lg bg-emerald-50/30">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-emerald-100 rounded-full mb-4">
                  <Search className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Ailment-Based Search</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-500">
                <p>Don&apos;t know the plant name? Search by health condition to find all herbs that treat your symptoms.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-orange-50/30">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  <ShieldAlert className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Visual Safety Ratings</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-500">
                <p>Instantly know a plant's safety with our traffic-light rating system (Green, Yellow, Red) and detailed contraindications.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-blue-50/30">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Detailed Preparations</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-500">
                <p>Step-by-step instructions on making decoctions, pastes, and powders with exact dosage guidelines.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-green-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to explore?</h2>
              <p className="max-w-[600px] text-green-100 md:text-xl">
                Start browsing our database of categorized medicinal plants.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/plants" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Browse All Plants
              </Link>
              <Link href="/ailments" className={buttonVariants({ variant: "outline", size: "lg" }) + " bg-transparent border-white text-white hover:bg-white hover:text-green-900 focus:bg-white focus:text-green-900"}>
                View by Ailment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
