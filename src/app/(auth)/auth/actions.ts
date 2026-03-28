'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  if (!data.email || !data.password) {
    redirect('/login?error=Email and password are required')
  }

  const { data: authData, error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`)
  }

  // Determine role for redirect
  let redirectTo = '/'
  if (authData.user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single()
      
    if (profile?.role === 'admin') {
      redirectTo = '/admin/dashboard'
    }
  }

  revalidatePath('/', 'layout')
  redirect(redirectTo)
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        full_name: formData.get('full_name') as string,
      }
    }
  }

  if (!data.email || !data.password) {
    redirect('/signup?error=Email and password are required')
  }

  // Supabase auth.signUp by default requires email confirmation.
  // The user should receive an OTP code in their email.
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`)
  }

  // Redirect to verify page with email in query params so they can enter OTP
  redirect(`/verify?email=${encodeURIComponent(data.email)}`)
}

export async function verifyOtp(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    token: formData.get('code') as string,
    type: 'signup' as const
  }

  if (!data.email || !data.token) {
    redirect(`/verify?email=${encodeURIComponent(data.email)}&error=Verification code is required`)
  }

  const { data: authData, error } = await supabase.auth.verifyOtp(data)

  if (error) {
    redirect(`/verify?email=${encodeURIComponent(data.email)}&error=${encodeURIComponent(error.message)}`)
  }

  // Determine role for redirect
  let redirectTo = '/'
  if (authData.user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single()
      
    if (profile?.role === 'admin') {
      redirectTo = '/admin/dashboard'
    }
  }

  revalidatePath('/', 'layout')
  redirect(redirectTo)
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function changePassword(formData: FormData) {
  const supabase = await createClient()
  
  const currentPassword = formData.get('currentPassword') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!currentPassword || !password || password !== confirmPassword) {
    redirect('/profile?error=Invalid inputs or passwords do not match')
  }

  // Get current user to retrieve their email
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !user.email) {
    redirect('/login')
  }

  // Verify current password by attempting to sign in
  const { error: verifyError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: currentPassword,
  })

  if (verifyError) {
    redirect('/profile?error=Incorrect current password')
  }

  // If verification passed, update to the new password
  const { error } = await supabase.auth.updateUser({
    password: password
  })

  if (error) {
    redirect(`/profile?error=${encodeURIComponent(error.message)}`)
  }

  redirect('/profile?message=Password updated successfully')
}
