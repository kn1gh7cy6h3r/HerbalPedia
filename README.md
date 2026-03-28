# 🍃 HerbalPedia

HerbalPedia is a comprehensive, modern Next.js web application designed to be the ultimate interactive encyclopedia for Indian Medicinal Plants. Using deep database architectures and beautiful UI, this repository serves authenticated users detailed botanical profiles, medical uses, verified compound data, and region-specific tracking.

## 🚀 Features

- **Extensive Medicinal Database**: 50 fully structured plant profiles detailing active compounds, preparation methods, precise dosages, and medically-proven benefits.
- **Robust Searching Engine**: Universal substring and cross-language alias (Hindi/English/Latin) search directly built into the main directory.
- **Secure Authentication**: Encrypted Supabase magic links and credential flows baked right in.
- **Modern UI**: Polished TailwindCSS and LucideReact glassmorphism components with complete responsive support.
- **Server-Side Rendering Pipeline**: Pure Next.js 15 Server-Side hydration via direct Row Level Security Supabase queries, ensuring blinding fast load speeds and SEO indexing.

## 📂 Project Structure

Following the structural cleanup, the source tree has been carefully reorganized for enterprise scaling:

- `/src/app`: The Next.js App Router carrying the core authentication and public layout architectures. No more redundant API mocks.
- `/src/components`: Heavily structured UI component groupings spanning `layout`, custom React `ui`, and dedicated `plants` UI slices.
- `/src/lib/data`: The beating heart of the frontend encyclopedia containing deeply tailored botanical constants patching into the database. 
- `/database`: Consolidated domain containing all core table initialization scripts `sql/` and robust seeder engines `scripts/`.
- `**/HerbalPedia_MASTER_CONTEXT.md`: System-level project architecture guidelines.

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience HerbalPedia.

### Database Sync

If you need to repopulate the Supabase backend from the `src/lib/data` patches, navigate via browser to the strictly authenticated seeder pipeline:
`http://localhost:3000/api/seed?secret=seed123`
