import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'
import type { Provider } from '@supabase/supabase-js'

export const prerender = false

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const validProviders: Provider[] = ['github']
  const formData = await request.formData()
  const provider = formData.get('provider') as Provider

  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        scopes: 'repo',
        redirectTo: 'http://localhost:4321/api/auth/callback'
      }
    })

    if (error != null) {
      return redirect('/')
    }

    return redirect(data.url)
  }

  return redirect('/')
}
