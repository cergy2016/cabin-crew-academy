# Audio File Deployment Guide

## Problem

Vercel's deployment isn't including the 200+ audio files from `public/audio/`, even though they're committed to git. This causes HTTP 404 errors when trying to play ICAO curriculum audio.

**Status:**
- ✅ Old lesson audio (`lesson-1-1`, `lesson-1-2`) - **DEPLOYED** to Vercel
- ❌ New ICAO curriculum audio (`unit-1`, `unit-2`, etc.) - **NOT DEPLOYED** by Vercel

## Solution: Supabase Storage

Instead of relying on Vercel's static file serving, we'll use **Supabase Storage** to host audio files. This is more reliable and better for large numbers of files.

### Step 1: Create Supabase Storage Bucket

1. Go to: https://supabase.com/dashboard
2. Select your project (the one from the .env files)
3. Go to **Storage** → **Buckets**
4. Click **New Bucket**
5. Name it: `audio`
6. Make sure to set it as **PUBLIC** (required for files to be downloadable)
7. Click **Create**

### Step 2: Upload Audio Files

You have two options:

#### Option A: Upload via Supabase Dashboard (Easiest)

1. In Storage → Buckets → **audio** bucket
2. Click **Upload folder**
3. Select the `public/audio/` folder from your computer
4. Click Upload
5. Wait for all 200+ files to upload (5-10 minutes)

#### Option B: Upload via Supabase CLI (Faster for bulk)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to your account
supabase login

# Upload entire directory
supabase storage upload audio public/audio/ --recursive
```

#### Option C: Upload via Script

Use the provided `upload_to_supabase.js` script:

```bash
node scripts/upload_to_supabase.js
```

(You'll need to provide Supabase credentials in the script)

### Step 3: Configure Environment Variables

Add this to your `.env.local` (NOT committed to git):

```env
NEXT_PUBLIC_SUPABASE_AUDIO_URL=https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/audio
```

Replace `YOUR_PROJECT_ID` with your actual Supabase project ID.

You can find this in:
- Supabase Dashboard → Settings → API
- Look for "Project URL" - it contains your project ID

Example:
```env
NEXT_PUBLIC_SUPABASE_AUDIO_URL=https://muqkevgspfbocjftvszt.supabase.co/storage/v1/object/public/audio
```

### Step 4: Deploy

```bash
# Commit the changes
git add lib/config/audioUrls.ts components/lesson/AudioPlayer.tsx
git commit -m "Add Supabase Storage support for audio files"

# Push to GitHub (triggers Vercel deployment)
git push origin main

# Wait ~1-2 minutes for Vercel to build and deploy
```

### Step 5: Test

1. Go to: https://cabin-crew-academy.vercel.app
2. Open any ICAO curriculum lesson (Unit 1, 2, 3, etc.)
3. Click **Scenario** tab
4. Click the play button on the audio player
5. Audio should play! ✅

## How It Works

The `getAudioUrl()` helper function now:
- **Local paths** (`/audio/lesson-1-1/...`) → Uses Vercel static files (old lessons)
- **Unit paths** (`/audio/unit-1/...`) → Uses Supabase Storage URL

This is automatic - no need to change lesson data files!

## Troubleshooting

### Audio still returns 404
- Check that `NEXT_PUBLIC_SUPABASE_AUDIO_URL` is set in `.env.local`
- Verify the bucket is set to **PUBLIC**
- Check that files were uploaded to `audio/` bucket (not a subfolder)

### Files show in Supabase but don't download
- Make sure bucket is **PUBLIC** (Storage → Buckets → audio → Edit → Public)
- Check file permissions - might need to run: `supabase storage update audio --public`

### Some files uploaded but others failed
- Check file sizes (should be 100KB-1MB each)
- Try uploading smaller batches
- Check Supabase quota/limits

### Env var not working
- Make sure it starts with `NEXT_PUBLIC_` (required for client-side access)
- Restart dev server: `npm run dev`
- Check that URL ends without trailing slash

## Scaling Up

After audio is deployed, you can:
- Add more airlines to interview prep
- Generate audio for additional lessons
- Upload to Supabase Storage using the same process

## Notes

- Files in git remain as a backup
- Supabase Storage provides 1GB free, then standard pricing
- Audio URLs are public - no authentication needed
- Supabase automatically handles CDN caching

---

**Questions?** Check `lib/config/audioUrls.ts` for configuration details.
