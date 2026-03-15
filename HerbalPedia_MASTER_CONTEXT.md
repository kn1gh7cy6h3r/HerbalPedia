# HERBALPEDIA PROJECT - MASTER CONTEXT FILE
## Complete Project Context for AI Development Assistance (Claude/Cursor/v0)

> **Purpose:** This file contains all essential project information for AI assistants (Claude, Cursor AI, v0.dev, GitHub Copilot, etc.) to provide accurate, context-aware development help throughout the project lifecycle.
> 
> **Last Updated:** February 21, 2026
> **Project Status:** Planning Phase → Development Starting
> **AI Tool Primary:** Claude (Anthropic) via chat interface
> **Development Philosophy:** AI-assisted rapid prototyping with "vibe coding"

---

## 🎯 PROJECT IDENTITY

**Project Name:** HerbalPedia

**Alternative Names Considered:** Aushadhi, Jadibooti, Vanaushadhi (went with HerbalPedia for broader appeal)

**Tagline:** Your Encyclopedia of Indian Medicinal Plants

**Project Type:** Web Application (Capstone-I Academic Project)

**Institution:** IIT Patna

**Duration:** February 7, 2026 → May 30, 2026 (~3.5 months)

**Team Size:** 4 members

**Development Approach:** AI-assisted rapid development using Claude, Cursor AI, and modern web stack

---

## 📋 QUICK PROJECT SUMMARY (30-second pitch)

HerbalPedia is a comprehensive web platform providing verified information about 75-100 common Indian medicinal plants. Unlike existing scattered resources, it offers a centralized, user-friendly database with unique features like:
- Ailment-based reverse search (search by health problem, not just plant name)
- Visual safety rating system (traffic light: green/yellow/red)
- Plant substitute suggestions
- Interactive preparation calculator
- Plant parts visual guide

**Primary Users:** Biotech students, ayurveda practitioners, researchers, home remedy enthusiasts

**Core Problem Solved:** No single reliable source exists for Indian medicinal plant information - it's scattered across books, papers, websites. We centralize and make it accessible.

---

## 🏗️ TECHNICAL STACK

### Frontend
```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui (optional)
State Management: React Context API / Zustand (for simple state)
Icons: Lucide React
Fonts: Inter, local fonts for Hindi text
```

### Backend
```
Option A (Preferred): Next.js API Routes + Server Actions
Option B (If separate): Node.js + Express.js
Runtime: Node.js 18+
API Style: REST (initially), GraphQL (future consideration)
```

### Database
```
Primary: MongoDB Atlas (NoSQL - flexible schema for plant data)
Alternative: Firebase Firestore (if need rapid prototyping)
ODM: Mongoose (for MongoDB)
```

### Storage
```
Images: Cloudinary / Vercel Blob Storage
Documents: S3-compatible storage
```

### Hosting & Deployment
```
Frontend: Vercel (automatic deployments from Git)
Backend: Vercel Serverless Functions / Railway
Database: MongoDB Atlas (free tier M0)
Domain: .vercel.app initially, custom domain later
```

### Development Tools
```
Version Control: Git + GitHub
Package Manager: npm / pnpm
Code Editor: VS Code with Cursor AI
Design: Figma (for mockups)
API Testing: Postman / Thunder Client
Database GUI: MongoDB Compass
```

### AI Development Tools
```
Primary: Claude (Anthropic) - for architecture, logic, debugging
Secondary: Cursor AI - for inline code completion
Tertiary: v0.dev - for UI component generation
GitHub Copilot: Code suggestions (if available)
```

---

## 📊 DATABASE SCHEMA (MongoDB)

### Plants Collection
```javascript
{
  _id: ObjectId,
  
  // Basic Information
  scientificName: String,          // "Ocimum sanctum"
  commonNames: {
    english: String,                // "Holy Basil"
    hindi: String,                  // "तुलसी"
    regional: [String]              // ["Tulasi", "Thulasi"]
  },
  family: String,                   // "Lamiaceae"
  slug: String,                     // "holy-basil-tulsi" (URL-friendly)
  
  // Description & Identification
  description: String,              // Detailed plant description
  habitat: String,                  // "Throughout India, cultivated"
  identificationFeatures: [String], // Physical characteristics
  partsUsed: [String],             // ["leaves", "seeds", "roots"]
  
  // Visual Content
  images: [{
    url: String,
    alt: String,
    caption: String,
    isPrimary: Boolean
  }],
  
  // Medicinal Information
  medicinalUses: [{
    ailmentId: ObjectId,           // Reference to Ailments collection
    ailmentName: String,           // "Cough and Cold"
    effectiveness: String,         // "High", "Moderate", "Traditional"
    description: String,
    scientificallyProven: Boolean
  }],
  
  // Preparation Methods
  preparations: [{
    name: String,                  // "Tulsi Kadha"
    type: String,                  // "decoction", "paste", "powder", "juice"
    difficulty: String,            // "easy", "medium", "expert"
    ingredients: [{
      item: String,
      quantity: Number,
      unit: String,                // "grams", "cups", "pieces"
      notes: String
    }],
    steps: [String],
    dosage: String,
    duration: String,
    precautions: [String]
  }],
  
  // Safety Information
  safetyRating: String,           // "green", "yellow", "red"
  safetyRationale: String,        // Why this rating
  precautions: [String],
  contraindications: [String],
  sideEffects: [String],
  toxicity: {
    level: String,                // "none", "mild", "moderate", "severe"
    details: String
  },
  pregnancySafe: Boolean,
  lactationSafe: Boolean,
  
  // Plant Substitutes
  substitutes: [{
    plantId: ObjectId,            // Reference to another plant
    plantName: String,
    similarity: Number,           // 0-100 percentage
    notes: String
  }],
  
  // Scientific Research
  activeCompounds: [String],      // ["eugenol", "ursolic acid"]
  scientificReferences: [{
    title: String,
    authors: [String],
    journal: String,
    year: Number,
    url: String,
    doi: String,
    summary: String              // Plain language summary
  }],
  
  // Cultivation (optional)
  cultivation: {
    soilType: String,
    waterNeeds: String,
    climate: String,
    growingDifficulty: String
  },
  
  // Metadata
  status: String,                 // "draft", "published", "review"
  verifiedBy: String,
  lastVerified: Date,
  sources: [String],              // Bibliography
  tags: [String],                 // For categorization
  
  // Analytics (optional)
  viewCount: Number,
  bookmarkCount: Number,
  
  createdAt: Date,
  updatedAt: Date
}
```

### Ailments Collection (for Reverse Search)
```javascript
{
  _id: ObjectId,
  name: String,                    // "Cough and Cold"
  slug: String,                    // "cough-and-cold"
  category: String,                // "Respiratory", "Digestive", etc.
  description: String,
  synonyms: [String],              // ["common cold", "flu"]
  relatedPlants: [{
    plantId: ObjectId,
    plantName: String,
    effectiveness: String
  }],
  commonSymptoms: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Categories Collection
```javascript
{
  _id: ObjectId,
  name: String,                    // "Respiratory System"
  slug: String,
  description: String,
  plantCount: Number,
  icon: String,                    // Icon identifier
  createdAt: Date
}
```

### Users Collection (Admin only for now)
```javascript
{
  _id: ObjectId,
  email: String,
  passwordHash: String,
  role: String,                    // "admin", "editor"
  name: String,
  lastLogin: Date,
  createdAt: Date
}
```

---

## 🎨 UI/UX GUIDELINES

### Design Principles
1. **Clean & Professional** - Medical information requires trust
2. **Visual Hierarchy** - Important info (safety) stands out
3. **Mobile-First** - Most users will access on phones
4. **Fast Loading** - Image optimization critical
5. **Accessibility** - WCAG 2.1 AA compliance

### Color Palette
```
Primary: Green shades (nature, herbs, growth)
  - Primary: #10b981 (emerald-500)
  - Dark: #059669 (emerald-600)
  - Light: #d1fae5 (emerald-100)

Safety Ratings:
  - Safe (Green): #22c55e (green-500)
  - Caution (Yellow): #eab308 (yellow-500)
  - Warning (Red): #ef4444 (red-500)

Neutrals:
  - Background: #ffffff (white)
  - Secondary BG: #f9fafb (gray-50)
  - Text Primary: #111827 (gray-900)
  - Text Secondary: #6b7280 (gray-500)

Accents:
  - Info: #3b82f6 (blue-500)
  - Success: #10b981 (emerald-500)
```

### Typography
```
Headings: Inter (600-700 weight)
Body: Inter (400-500 weight)
Hindi Text: Noto Sans Devanagari / Local system fonts
Code/Scientific: Fira Code / JetBrains Mono

Size Scale (Tailwind):
  - h1: text-4xl (36px)
  - h2: text-3xl (30px)
  - h3: text-2xl (24px)
  - h4: text-xl (20px)
  - Body: text-base (16px)
  - Small: text-sm (14px)
```

### Component Patterns
```
Cards: Rounded corners (rounded-lg), shadow (shadow-md)
Buttons: Rounded (rounded-md), clear hover states
Forms: Clear labels, validation feedback
Tables: Responsive, mobile converts to cards
Images: Lazy loading, blur placeholder
```

### Responsive Breakpoints (Tailwind)
```
sm: 640px   (tablet portrait)
md: 768px   (tablet landscape)
lg: 1024px  (laptop)
xl: 1280px  (desktop)
2xl: 1536px (large desktop)
```

---

## 🔑 CORE FEATURES (Priority Order)

### PHASE 1: MVP (For Mid-Semester - March 30)

**1. Plant Database & Detail Pages** ⭐⭐⭐
- List view with cards
- Individual plant detail pages
- Basic info display
- Image gallery
- **Must have:** 30 plants fully populated

**2. Search & Filter** ⭐⭐⭐
- Text search (plant name - English/Hindi/Scientific)
- Filter by: category, parts used, safety rating
- Sort options
- **Must be:** Fast and accurate

**3. Admin Panel (Basic)** ⭐⭐⭐
- Add/edit/delete plants
- Image upload
- WYSIWYG editor for content
- Authentication (simple login)
- **Purpose:** Content management by team

**4. Responsive Design** ⭐⭐⭐
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions

### PHASE 2: Differentiators (For Final - May 15)

**5. Ailment-Based Reverse Search** ⭐⭐⭐ (UNIQUE)
- Search by health condition
- Shows all plants treating that ailment
- Compare effectiveness
- **Why unique:** Problem-first instead of plant-first

**6. Safety Rating System** ⭐⭐⭐ (UNIQUE)
- Visual traffic light (🟢🟡🔴)
- Clear categorization
- Hover for details
- **Why unique:** Instant safety assessment

**7. Plant Substitute Suggestions** ⭐⭐ (UNIQUE)
- "Similar plants" section
- Alternative recommendations
- Availability-based
- **Why unique:** Practical problem-solving

**8. Preparation Calculator** ⭐⭐
- Adjust serving sizes
- Auto-calculate ingredients
- Like a recipe app
- **Why useful:** Prevents errors

**9. Plant Parts Visual Guide** ⭐⭐
- Interactive SVG/diagram
- Click on part → see uses
- Before/after processing images
- **Why useful:** Visual learning

**10. Scientific Research Section** ⭐
- Links to papers
- Plain language summaries
- "What science says" tab
- **Why useful:** Academic credibility

### PHASE 3: Nice-to-Have (If Time Permits)

**11. Bookmark Collections**
- Save plants locally
- Create themed collections
- No login required (localStorage)

**12. Export to PDF**
- Download plant profile
- Printable format
- Offline reference

**13. Interactive Quiz**
- Identify plants by features
- Educational tool
- Gamified learning

---

## 🚀 DEVELOPMENT WORKFLOW (AI-Assisted)

### Using Claude for Development

**When to Use Claude:**
1. **Architecture Decisions**
   - Prompt: "I'm building [feature]. Should I use [approach A] or [approach B]?"
   - Provide: This context file for reference

2. **Code Generation**
   - Prompt: "Generate a React component for [feature] using our stack (Next.js, TypeScript, Tailwind)"
   - Include: Relevant schema, design requirements

3. **Debugging**
   - Prompt: "I'm getting [error]. Here's my code: [paste code]. What's wrong?"
   - Provide: Error message, relevant code, what you tried

4. **Database Queries**
   - Prompt: "Write a MongoDB aggregation query to [task]"
   - Provide: Schema structure, expected output

5. **API Design**
   - Prompt: "Design REST API endpoints for [feature]"
   - Provide: Data flow, authentication needs

### Cursor AI Usage

**Best For:**
- Inline code completion
- Refactoring existing code
- Writing boilerplate
- Converting designs to code

**Setup:**
1. Add this context file to project root
2. Reference in Cursor settings
3. Use @context in prompts

### v0.dev Usage

**Best For:**
- Rapid UI prototyping
- Component generation
- Design → Code conversion

**Workflow:**
1. Describe component in natural language
2. Iterate on generated code
3. Copy to project, adapt to stack
4. Refine with Cursor/Claude

---

## 📁 PROJECT STRUCTURE

```
herbalpedia/
├── .next/                    # Next.js build output
├── public/
│   ├── images/
│   │   ├── plants/          # Plant images
│   │   ├── icons/           # UI icons
│   │   └── logos/           # Branding
│   └── fonts/               # Custom fonts (if any)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (admin)/        # Admin routes
│   │   │   ├── dashboard/
│   │   │   └── plants/
│   │   │       ├── new/
│   │   │       └── [id]/edit/
│   │   ├── (public)/       # Public routes
│   │   │   ├── page.tsx   # Homepage
│   │   │   ├── plants/
│   │   │   │   ├── page.tsx      # Plant listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Plant detail
│   │   │   ├── ailments/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── search/
│   │   │   └── about/
│   │   ├── api/            # API routes
│   │   │   ├── plants/
│   │   │   ├── ailments/
│   │   │   ├── search/
│   │   │   └── auth/
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── plants/         # Plant-specific components
│   │   │   ├── PlantCard.tsx
│   │   │   ├── PlantDetail.tsx
│   │   │   ├── SafetyBadge.tsx
│   │   │   ├── PlantPartsGuide.tsx
│   │   │   └── PreparationCalculator.tsx
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── AilmentSearch.tsx
│   │   └── common/         # Reusable components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── mongodb.ts   # DB connection
│   │   │   └── models/      # Mongoose models
│   │   │       ├── Plant.ts
│   │   │       ├── Ailment.ts
│   │   │       └── User.ts
│   │   ├── utils/
│   │   │   ├── format.ts    # Formatters
│   │   │   ├── validation.ts
│   │   │   └── helpers.ts
│   │   └── constants.ts
│   ├── types/
│   │   ├── plant.ts
│   │   ├── ailment.ts
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   ├── useSearch.ts
│   │   ├── useBookmark.ts
│   │   └── usePlants.ts
│   └── styles/
│       └── tailwind.css
├── .env.local              # Environment variables
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── README.md
└── CONTEXT.md              # THIS FILE
```

---

## 🔐 ENVIRONMENT VARIABLES

```bash
# .env.local (DO NOT COMMIT)

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/herbalpedia

# Authentication (for admin)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Image Storage (Cloudinary example)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📝 DATA COLLECTION GUIDELINES

### Plant Research Checklist (for Content Team)

For each plant, collect:

**✅ Basic Info**
- Scientific name (verify spelling)
- Common names (English, Hindi, 2-3 regional)
- Family name
- 2-3 high-quality images

**✅ Description**
- Physical appearance (height, leaves, flowers)
- Habitat and distribution
- Parts used

**✅ Medicinal Uses**
- Top 5-7 uses (backed by sources)
- Traditional vs. scientific validation
- Effectiveness level

**✅ Preparation Methods**
- At least 2-3 simple home remedies
- Clear step-by-step instructions
- Dosage and duration

**✅ Safety**
- General safety level (green/yellow/red)
- Contraindications
- Side effects (if any)
- Pregnancy/lactation safety

**✅ References**
- Minimum 3 reliable sources
- At least 1 scientific paper (if available)

### Reliable Sources

**Primary Sources (Use These):**
1. Books:
   - Kirtikar & Basu - Indian Medicinal Plants
   - Ayurvedic Pharmacopoeia of India
   - Database of Indian Medicinal Plants (CSIR)

2. Websites:
   - AYUSH Ministry publications
   - PubMed for research papers
   - ScienceDirect for studies

3. Avoid:
   - Random blogs
   - Unverified websites
   - Social media posts

---

## 🎯 PRIORITY PLANT LIST (Start with these 30)

### Common & Well-Known (Start Here)
1. Tulsi (Holy Basil) - Ocimum sanctum
2. Neem - Azadirachta indica
3. Ashwagandha - Withania somnifera
4. Amla (Indian Gooseberry) - Phyllanthus emblica
5. Turmeric - Curcuma longa
6. Ginger - Zingiber officinale
7. Giloy - Tinospora cordifolia
8. Aloe Vera - Aloe barbadensis
9. Brahmi - Bacopa monnieri
10. Shatavari - Asparagus racemosus

### Easily Available
11. Pudina (Mint) - Mentha arvensis
12. Ajwain (Carom Seeds) - Trachyspermum ammi
13. Methi (Fenugreek) - Trigonella foenum-graecum
14. Jeera (Cumin) - Cuminum cyminum
15. Dhaniya (Coriander) - Coriandrum sativum
16. Dalchini (Cinnamon) - Cinnamomum verum
17. Elaichi (Cardamom) - Elettaria cardamomum
18. Laung (Clove) - Syzygium aromaticum
19. Kali Mirch (Black Pepper) - Piper nigrum
20. Garlic - Allium sativum

### Ayurvedic Classics
21. Triphala components:
    - Haritaki - Terminalia chebula
    - Bibhitaki - Terminalia bellirica
    - Amla (already listed)
22. Arjuna - Terminalia arjuna
23. Punarnava - Boerhavia diffusa
24. Manjistha - Rubia cordifolia
25. Guduchi (Giloy - already listed)
26. Shankhpushpi - Convolvulus pluricaulis
27. Vacha - Acorus calamus
28. Jatamansi - Nardostachys jatamansi
29. Guggul - Commiphora wightii
30. Shilajit - Asphaltum (mineral pitch)

**Rationale:** Mix of kitchen herbs (easy), well-known (high utility), and classical ayurvedic (academic value)

---

## 📅 TIMELINE & MILESTONES

### Week-by-Week Breakdown

**Week 1-2: Setup & Design (Feb 7-21)**
- [ ] Project kickoff meeting ✅
- [ ] Tech stack finalized ✅
- [ ] GitHub repo created
- [ ] Next.js project initialized
- [ ] Tailwind configured
- [ ] MongoDB Atlas setup
- [ ] Figma mockups (3-4 key pages)
- [ ] Database schema finalized
- [ ] Content team: Research 15 plants

**Week 3-4: Core Development (Feb 22 - Mar 7)**
- [ ] Database models created
- [ ] API routes for plants (CRUD)
- [ ] Homepage design implemented
- [ ] Plant listing page
- [ ] Plant detail page (basic)
- [ ] Search functionality (basic)
- [ ] Admin panel (add plant form)
- [ ] Content: 15 more plants researched (total 30)

**Week 5-6: Data Entry & Features (Mar 8-21)**
- [ ] All 30 plants entered in DB
- [ ] Filter functionality
- [ ] Safety rating display
- [ ] Image optimization
- [ ] Responsive design refinement
- [ ] Admin: Edit/delete functionality

**Week 7-8: MID-SEMESTER (Mar 22-30) ⚡**
**Deliverables:**
- [ ] Working webapp deployed on Vercel
- [ ] 30 plants live with complete info
- [ ] Search + filter working
- [ ] Mobile responsive
- [ ] Individual reports submitted
- [ ] Demo ready

**Week 9-10: Unique Features (Mar 31 - Apr 13)**
- [ ] Ailment-based reverse search
- [ ] Ailments collection populated
- [ ] Plant substitutes logic
- [ ] Additional 20 plants added (total 50)

**Week 11-12: Polish & Additions (Apr 14-27)**
- [ ] Preparation calculator
- [ ] Plant parts visual guide
- [ ] Bookmark functionality (localStorage)
- [ ] Scientific references section
- [ ] Remaining plants added (target 75+)

**Week 13-14: Testing & Documentation (Apr 28 - May 11)**
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Performance optimization
- [ ] SEO basics
- [ ] Documentation complete
- [ ] Presentation slides prepared

**Week 15: Final Submission (May 12-15) ⚡**
- [ ] Final testing
- [ ] Bug fixes
- [ ] Final reports submitted (May 15)
- [ ] Demo rehearsal

**Week 16: Presentations (May 15-30) ⚡**
- [ ] Final presentation to committee
- [ ] Q&A preparation

---

## 👥 TEAM ROLES & RESPONSIBILITIES

### Member 1: Full-Stack Lead (You - "Vibe Coder")
**Primary:**
- Overall architecture and technical decisions
- Next.js setup and configuration
- API routes development
- Database integration
- Feature integration and testing
- Deployment and DevOps
- Git management

**AI Tools to Use:**
- Claude for architecture questions
- Cursor for rapid development
- GitHub Copilot for code completion

**Deliverables:**
- Working app deployed
- API documentation
- Git commit history
- Technical sections of report

### Member 2: Frontend Developer
**Primary:**
- UI/UX design in Figma
- React component development
- Tailwind styling
- Responsive design
- Interactive features (calculator, visual guide)
- Animations and transitions

**AI Tools to Use:**
- v0.dev for component generation
- Claude for component logic
- Figma for design

**Deliverables:**
- Figma design files
- Reusable component library
- Responsive layouts
- Frontend documentation

### Member 3: Backend & Database Developer
**Primary:**
- MongoDB schema design
- Mongoose models
- Data validation
- Admin panel backend
- Authentication logic
- Database optimization
- API endpoint logic

**AI Tools to Use:**
- Claude for schema design
- MongoDB Compass for testing
- Cursor for model generation

**Deliverables:**
- Database schema documentation
- API endpoint documentation
- Admin panel functionality
- Backend testing reports

### Member 4: Content & QA
**Primary:**
- Medicinal plant research
- Content collection and verification
- Data entry via admin panel
- Image sourcing and editing
- Testing all features
- Bug reporting
- User documentation
- Presentation content

**AI Tools to Use:**
- Claude for research assistance
- ChatGPT for content summaries
- Grammarly for proofreading

**Deliverables:**
- 75+ plant profiles researched
- All data entered in database
- Testing checklist completed
- User guide/documentation
- Bibliography of sources

---

## 🐛 COMMON ISSUES & SOLUTIONS

### Development Issues

**Issue: MongoDB connection failing**
```
Solution: 
1. Check MONGODB_URI in .env.local
2. Verify IP whitelist in MongoDB Atlas
3. Test connection string in MongoDB Compass first
```

**Issue: Images not loading**
```
Solution:
1. Check Next.js Image component usage
2. Verify image paths (use /public correctly)
3. Add domains to next.config.js if external images
```

**Issue: Build errors with TypeScript**
```
Solution:
1. Check for type errors: npm run type-check
2. Use 'any' temporarily if stuck (mark with TODO)
3. Ask Claude for correct type definitions
```

**Issue: Tailwind classes not working**
```
Solution:
1. Verify tailwind.config.js content paths
2. Check if globals.css imports Tailwind directives
3. Restart dev server: npm run dev
```

### Content Issues

**Issue: Conflicting information from sources**
```
Solution:
1. Prioritize scientific papers over blogs
2. Note both views with disclaimer
3. Mark as "Traditional use" vs "Scientifically proven"
```

**Issue: Missing images for plants**
```
Solution:
1. Use Wikimedia Commons (check licenses)
2. Unsplash/Pexels for general nature images
3. Commission original photography if budget
4. Use placeholder until found
```

---

## 🎤 PRESENTATION TALKING POINTS

### Opening (1 min)
- "We identified that medicinal plant information in India is scattered..."
- "Students and practitioners waste time searching multiple sources..."
- "HerbalPedia solves this by creating a centralized, verified database..."

### Demo Flow (5-7 min)
1. **Homepage** → Clean, professional design
2. **Search by Name** → Show Tulsi, navigate to detail page
3. **Plant Detail** → Highlight safety rating, preparation methods
4. **Unique Feature 1** → Ailment search (search "cough" → multiple plants)
5. **Unique Feature 2** → Plant substitutes
6. **Unique Feature 3** → Preparation calculator in action
7. **Admin Panel** → Quick show of content management

### Technical Highlights (2 min)
- "Built with modern stack: Next.js, TypeScript, MongoDB..."
- "AI-assisted development for rapid prototyping..."
- "Scalable architecture, can add thousands of plants..."
- Show database schema diagram

### Challenges & Learnings (1 min)
- "Biggest challenge: Content verification..."
- "Learned: Full-stack development, team coordination..."
- "AI tools accelerated development 3x..."

### Future Scope (1 min)
- Mobile app
- Image-based plant identification
- Multi-language support
- Expert consultation integration

### Q&A Prep
**Expected Questions:**
1. "How do you verify information accuracy?"
   → Multiple source cross-referencing, scientific paper citations

2. "What about liability if someone misuses?"
   → Clear disclaimers, safety ratings, "consult professional" warnings

3. "Why MongoDB over SQL?"
   → Flexible schema for diverse plant data, easier to modify

4. "How many plants currently?"
   → 75-100 for capstone, designed to scale to thousands

5. "What makes you different from existing platforms?"
   → Ailment-based search, safety ratings, Indian-focused, modern UX

---

## 🔗 IMPORTANT LINKS

### Development
- GitHub Repo: [will be created]
- Deployed App: [will be hosted on Vercel]
- Figma Designs: [will be created]
- MongoDB Atlas: [cluster link]

### Documentation
- API Docs: [will be in README]
- User Guide: [will be created]
- Technical Docs: [will be in /docs]

### Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- MongoDB Docs: https://docs.mongodb.com
- TypeScript Handbook: https://www.typescriptlang.org/docs

### Content Sources
- AYUSH Ministry: https://www.ayush.gov.in
- PubMed: https://pubmed.ncbi.nlm.nih.gov
- CSIR-NISCAIR: http://www.niscair.res.in

---

## 💡 AI PROMPTING TIPS FOR THIS PROJECT

### Effective Prompts for Claude

**For Feature Development:**
```
I'm building [feature name] for HerbalPedia (Indian medicinal plants database).

Context: [paste relevant section from this file]

Requirements:
- Next.js 14 with App Router
- TypeScript
- MongoDB with this schema: [paste schema]
- Should look like: [describe UI]

Please provide:
1. Component code
2. API route if needed
3. Any utilities required

Generate production-ready code with error handling.
```

**For Debugging:**
```
HerbalPedia project issue:

Error: [paste error]
Code: [paste relevant code]
Expected: [what should happen]
Actual: [what's happening]

Our stack: Next.js 14, TypeScript, MongoDB
Schema: [paste if relevant]

What's wrong and how to fix?
```

**For Database Queries:**
```
Need MongoDB query for HerbalPedia:

Schema: [paste plant schema]
Task: [describe what you need to fetch/update]
Example data: [paste sample document]

Provide Mongoose query with TypeScript types.
```

**For Component Generation:**
```
Create React component for HerbalPedia:

Feature: [describe]
Design: [Tailwind classes, shadcn/ui if needed]
Props: [list required props]
State: [what state is needed]
Interactions: [user actions]

Stack: Next.js 14, TypeScript, Tailwind
Provide: Complete component with types.
```

### Using This Context File

**In Conversation:**
```
Reference CONTEXT.md for:
- Database schema (section: Database Schema)
- Tech stack (section: Technical Stack)
- Design guidelines (section: UI/UX Guidelines)
- Project structure (section: Project Structure)
```

**In Cursor AI:**
```
@CONTEXT.md
Generate [component/feature] following our project standards
```

---

## 📋 CHECKLIST: BEFORE ASKING AI FOR HELP

Before prompting Claude/Cursor:
- [ ] Read relevant section of this CONTEXT.md
- [ ] Check if schema/stack info is needed
- [ ] Have error message ready (if debugging)
- [ ] Know expected behavior vs actual
- [ ] Tried basic fixes (restart server, check env vars)
- [ ] Checked official docs first

This prevents back-and-forth and gets better first responses.

---

## 🚨 CRITICAL REMINDERS

### DO ✅
- Always reference this context file when asking AI for help
- Keep schema in sync between this file and actual code
- Update this file when making major architectural changes
- Use TypeScript strictly (no 'any' in production)
- Write descriptive commit messages
- Test on mobile before committing
- Add disclaimers to all medical information
- Cross-verify plant information from 3+ sources
- Keep backup of database regularly

### DON'T ❌
- Don't commit .env.local or API keys
- Don't use 'any' type without TODO comment
- Don't skip mobile testing
- Don't add plants without verification
- Don't ignore TypeScript errors
- Don't merge without testing
- Don't copy code without understanding it
- Don't skip safety ratings for plants
- Don't use copyrighted images without permission

---

## 📊 SUCCESS METRICS

### For Mid-Semester (March 30)
- [ ] 30 plants with complete, verified information
- [ ] 100% uptime of deployed app
- [ ] <2 second page load time
- [ ] Works on 3+ browsers (Chrome, Firefox, Safari)
- [ ] Mobile responsive on 3+ devices
- [ ] Zero critical bugs
- [ ] Search returns results in <1 second

### For Final Submission (May 15)
- [ ] 75+ plants with complete information
- [ ] All 10 core features working
- [ ] 5+ unique features implemented
- [ ] Lighthouse score >90 (performance)
- [ ] Zero accessibility errors
- [ ] Complete documentation
- [ ] Professional presentation ready
- [ ] Individual contributions clear

---

## 📞 GETTING HELP

### When Stuck on Development:
1. Check this CONTEXT.md file
2. Search official docs (Next.js/Tailwind/MongoDB)
3. Ask Claude with context from this file
4. Try Cursor AI for code-level issues
5. Check GitHub Issues of libraries you're using
6. Ask team members in group chat

### When Stuck on Content:
1. Check reliable sources list in this file
2. Ask Claude for research assistance
3. Cross-reference with multiple sources
4. Mark uncertain info with [needs verification]
5. Consult with team member 4 (Content lead)

### When Stuck on Design:
1. Check UI/UX guidelines in this file
2. Browse similar successful projects
3. Use v0.dev for quick prototypes
4. Ask Claude for Tailwind class suggestions
5. Review Figma mockups

---

## 🎓 LEARNING RESOURCES

### For Next.js
- Official Tutorial: https://nextjs.org/learn
- App Router Guide: https://nextjs.org/docs/app
- Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

### For TypeScript
- Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- React TypeScript Cheatsheet: https://react-typescript-cheatsheet.netlify.app

### For Tailwind CSS
- Docs: https://tailwindcss.com/docs
- UI Components: https://ui.shadcn.com
- Examples: https://tailwindui.com/components

### For MongoDB
- University: https://learn.mongodb.com
- Mongoose Guide: https://mongoosejs.com/docs/guide.html

### For AI-Assisted Development
- Claude Prompting Guide: https://docs.anthropic.com/claude/docs/prompt-engineering
- Cursor Documentation: https://docs.cursor.com
- v0.dev Examples: https://v0.dev

---

## 📄 VERSION HISTORY

**v1.0 - Feb 21, 2026**
- Initial context file created
- All sections drafted
- Ready for development

**Future Updates:**
- v1.1: After tech stack finalization (add specific package versions)
- v1.2: After database schema implementation (update with actual field names)
- v1.3: After mid-semester (lessons learned, adjustments)
- v2.0: Final version with all learnings

---

## 📝 NOTES FOR AI ASSISTANTS

### Context Understanding
This is a **capstone academic project** with:
- Fixed timeline (3.5 months)
- Team of 4 with varying skill levels
- Deliverables at mid-point and end
- Presentation to evaluation committee

### Development Approach
- **AI-assisted but human-driven** - Student is using AI tools extensively
- **Learning-focused** - Should explain concepts, not just provide code
- **Production-ready** - Code should work and be maintainable
- **Academic integrity** - Help with understanding, don't do everything

### When Helping
- Provide complete, working code (not pseudocode)
- Explain WHY, not just WHAT
- Consider the team's skill level (beginner-friendly)
- Suggest best practices
- Point out potential issues
- Offer alternatives when relevant

### What to Prioritize
1. **Correctness** - Code must work
2. **Simplicity** - Easy to understand and maintain
3. **Completeness** - Include types, error handling
4. **Best Practices** - Follow Next.js/React conventions
5. **Performance** - Optimize where it matters

### Red Flags to Watch For
- Student copying code without understanding
- Overcomplicating simple features
- Ignoring TypeScript errors
- Skipping error handling
- Not testing on mobile
- Security issues (API keys in code, etc.)

---

**END OF MASTER CONTEXT FILE**

*This file should be kept at the root of the project and referenced in all AI development sessions.*

*Last maintained by: [Your Name]*
*Contact: [Your Email]*
