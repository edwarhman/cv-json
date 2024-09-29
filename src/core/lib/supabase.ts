import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY
export const supabaseBucketURL = import.meta.env.SUPABASE_BUCKET_URL

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce'
  }
})
