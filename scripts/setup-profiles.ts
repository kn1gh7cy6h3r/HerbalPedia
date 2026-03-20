import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') });

async function setupProfiles() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('DATABASE_URL is not set in .env.local');
    process.exit(1);
  }

  console.log('Connecting to database...');
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log('Connected.');
    
    // Read SQL file
    const sqlPath = path.join(__dirname, '../supabase_profiles.sql');
    const sqlScript = fs.readFileSync(sqlPath, 'utf8');

    console.log('Running SQL script to create profiles and trigger...');
    await client.query(sqlScript);
    
    console.log('Profiles table and trigger setup successfully!');
  } catch (error) {
    console.error('Error executing SQL:', error);
  } finally {
    await client.end();
  }
}

setupProfiles();
