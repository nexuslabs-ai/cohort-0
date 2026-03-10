# Dev Environment Setup -- Team Lead Runbook

Manual steps required to complete the dev (and prod) environment setup. These are one-time tasks that cannot be automated via code.

## Prerequisites

- Access to the GitHub OAuth App settings
- Access to the Google Cloud Console OAuth credentials
- Admin access to both Supabase projects
- Admin access to the Vercel project (`bob-the-builder` in `innovativegamers-projects`)

## Environment Reference

| Environment | Supabase Project Ref   | Vercel URL                                                             |
| ----------- | ---------------------- | ---------------------------------------------------------------------- |
| Dev         | `fpbglwvzpmqmtdtrhuhc` | `https://bob-the-builder-git-dev-innovativegamers-projects.vercel.app` |
| Prod        | `nktwfzcadffzfthslckx` | `https://bob-the-builder-zeta.vercel.app`                              |

| Environment | Supabase Dashboard                                          |
| ----------- | ----------------------------------------------------------- |
| Dev         | https://supabase.com/dashboard/project/fpbglwvzpmqmtdtrhuhc |
| Prod        | https://supabase.com/dashboard/project/nktwfzcadffzfthslckx |

---

## Step 1: Add Callback URLs to GitHub OAuth App

1. Go to GitHub > Settings > Developer settings > OAuth Apps > select your app
2. Add **both** Authorization callback URLs:
   ```
   https://fpbglwvzpmqmtdtrhuhc.supabase.co/auth/v1/callback
   https://nktwfzcadffzfthslckx.supabase.co/auth/v1/callback
   ```
3. Save changes

> The existing local callback (`http://127.0.0.1:54321/auth/v1/callback`) should remain.

## Step 2: Add Redirect URIs and Origins to Google OAuth App

1. Go to [Google Cloud Console](https://console.cloud.google.com/) > APIs & Services > Credentials
2. Select your OAuth 2.0 Client ID
3. Under **Authorized JavaScript origins**, add:
   ```
   https://bob-the-builder-git-dev-innovativegamers-projects.vercel.app
   https://bob-the-builder-zeta.vercel.app
   ```
4. Under **Authorized redirect URIs**, add:
   ```
   https://fpbglwvzpmqmtdtrhuhc.supabase.co/auth/v1/callback
   https://nktwfzcadffzfthslckx.supabase.co/auth/v1/callback
   ```
5. Save changes

## Step 3: Enable OAuth Providers in Dev Supabase Dashboard

1. Go to https://supabase.com/dashboard/project/fpbglwvzpmqmtdtrhuhc
2. Navigate to **Authentication > Providers**
3. Enable **GitHub**:
   - Set Client ID and Client Secret (shared OAuth app credentials from `.env`)
4. Enable **Google**:
   - Set Client ID and Client Secret (shared OAuth app credentials from `.env`)
5. Navigate to **Authentication > URL Configuration**
6. Set **Site URL** to:
   ```
   https://bob-the-builder-git-dev-innovativegamers-projects.vercel.app
   ```
7. Under **Redirect URLs**, add:
   ```
   https://bob-the-builder-git-dev-innovativegamers-projects.vercel.app/**
   http://localhost:3000/**
   ```

## Step 4: Enable OAuth Providers in Prod Supabase Dashboard

1. Go to https://supabase.com/dashboard/project/nktwfzcadffzfthslckx
2. Navigate to **Authentication > Providers**
3. Enable **GitHub**:
   - Set Client ID and Client Secret (shared OAuth app credentials from `.env`)
4. Enable **Google**:
   - Set Client ID and Client Secret (shared OAuth app credentials from `.env`)
5. Navigate to **Authentication > URL Configuration**
6. Set **Site URL** to:
   ```
   https://bob-the-builder-zeta.vercel.app
   ```
7. Under **Redirect URLs**, add:
   ```
   https://bob-the-builder-zeta.vercel.app/**
   ```

---

## Verification Checklist

After completing all steps, verify end-to-end:

- [ ] **Dev OAuth (GitHub):** Sign in with GitHub works on the dev URL
- [ ] **Dev OAuth (Google):** Sign in with Google works on the dev URL
- [ ] **Prod OAuth (GitHub):** Sign in with GitHub works on the prod URL
- [ ] **Prod OAuth (Google):** Sign in with Google works on the prod URL
- [ ] **Vercel dev deployment:** Pushing to `dev` triggers a deployment
- [ ] **Vercel prod deployment:** Pushing to `main` triggers a deployment
- [ ] **Type generation:** `npm run gen-types:dev` produces valid types
- [ ] **Local development:** `npm run dev` loads at `localhost:3000`
