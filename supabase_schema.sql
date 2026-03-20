-- HerbalPedia Supabase SQL Schema Definition
-- Run this in the Supabase SQL Editor to create the necessary tables.

-- Create plants table
CREATE TABLE IF NOT EXISTS public.plants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Basic Info
  scientific_name TEXT NOT NULL,
  common_names JSONB NOT NULL DEFAULT '{"english": "", "hindi": "", "regional": []}'::jsonb,
  family TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  
  -- Description & Identification
  description TEXT NOT NULL,
  habitat TEXT,
  identification_features TEXT[],
  parts_used TEXT[] NOT NULL,
  
  -- Complex Data Types mapping to JSONB
  images JSONB[] DEFAULT '{}',
  medicinal_uses JSONB[] DEFAULT '{}',
  preparations JSONB[] DEFAULT '{}',
  
  -- Safety Information
  safety_rating TEXT NOT NULL CHECK (safety_rating IN ('green', 'yellow', 'red')),
  safety_rationale TEXT,
  precautions TEXT[],
  contraindications TEXT[],
  side_effects TEXT[],
  toxicity JSONB,
  pregnancy_safe BOOLEAN,
  lactation_safe BOOLEAN,
  
  -- Additional Data
  substitutes JSONB[],
  active_compounds TEXT[],
  scientific_references JSONB[],
  cultivation JSONB,
  
  -- Metadata
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'review')),
  verified_by TEXT,
  last_verified TIMESTAMPTZ,
  sources TEXT[],
  tags TEXT[],
  
  -- Analytics
  view_count INTEGER NOT NULL DEFAULT 0,
  bookmark_count INTEGER NOT NULL DEFAULT 0
);

-- Note: We skipped the extra 'ailments' table here for simplicity unless strongly required. 
-- For now, the 'medicinal_uses' JSON array directly on the plant table can cover ailment data.

-- Create an updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Attach trigger to plants table
CREATE TRIGGER update_plants_updated_at
BEFORE UPDATE ON public.plants
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Optional Row Level Security (RLS) setup for plants
-- Enable RLS
ALTER TABLE public.plants ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published plants
CREATE POLICY "Allow public read access to published plants"
ON public.plants
FOR SELECT
TO public
USING (status = 'published');

-- Allow authenticated users to insert/update/delete (Admin roles)
CREATE POLICY "Allow authenticated full access to plants"
ON public.plants
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
