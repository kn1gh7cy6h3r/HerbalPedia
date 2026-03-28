import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing Supabase environment variables. Check .env.local')
  process.exit(1)
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

const ADMIN_EMAIL = 'yash.education27@gmail.com'
const INITIAL_PASSWORD = 'adminPassword123!'
const FULL_NAME = 'Yash (Admin)'

async function seedAdminUser() {
  console.log(`Seeding admin account for: ${ADMIN_EMAIL}...`)

  // 1. Create the user in auth.users using the admin API (bypasses email confirmation)
  const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
    email: ADMIN_EMAIL,
    password: INITIAL_PASSWORD,
    email_confirm: true,
    user_metadata: { full_name: FULL_NAME }
  })

  if (userError) {
    if (userError.message.includes('already registered')) {
      console.log('User is already registered. Attempting to update role...')
      // If they already tried to sign up, just find their ID and update the role
      const { data: existingUser } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('email', ADMIN_EMAIL)
        .single()
        
       if (existingUser) {
          await makeAdmin(existingUser.id)
       } else {
         console.error('User exists in auth.users but not profiles table. Please resync.')
       }
      return
    }
    
    console.error('Error creating user:', userError.message)
    return
  }

  if (userData.user) {
    console.log(`User created successfully with ID: ${userData.user.id}`)
    
    // Slight delay to ensure the Postgres trigger finishes inserting the profile
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    await makeAdmin(userData.user.id)
  }
}

async function makeAdmin(userId: string) {
  console.log(`Promoting user ${userId} to admin role...`)
  
  const { error: profileError } = await supabaseAdmin
    .from('profiles')
    .update({ 
      role: 'admin',
      full_name: FULL_NAME 
    })
    .eq('id', userId)

  if (profileError) {
    console.error('Error updating profile role:', profileError.message)
  } else {
    console.log('\n✅ Admin account successfully established!')
    console.log('--- LOGIN CREDENTIALS ---')
    console.log(`Email: ${ADMIN_EMAIL}`)
    console.log(`Password: ${INITIAL_PASSWORD}`)
    console.log('-------------------------')
    console.log('You can now log in at http://localhost:3000/login and use the Profile page to change this password.')
  }
}

seedAdminUser()
