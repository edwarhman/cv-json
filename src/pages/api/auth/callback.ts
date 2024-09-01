import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'

export const prerender = false

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get('code')
  if (!authCode) {
    return redirect('/login')
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode)

  if (error != null) {
    return redirect('/login')
  }

  const { access_token, refresh_token, provider_token } = data.session

  cookies.set('access_token', access_token, {
    path: '/',
    httpOnly: true
  })

  cookies.set('refresh_token', refresh_token, {
    path: '/',
    httpOnly: true
  })

  if (provider_token) {
    cookies.set('github_access_token', provider_token, {
      path: '/',
      httpOnly: true
    })
  }

  return redirect('/')
}
