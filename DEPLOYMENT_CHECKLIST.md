# Cabin Crew Academy - Deployment Checklist

## ✅ Phase 1: Code Deployment (In Progress)

- [ ] Git push audio removal to main
- [ ] Vercel auto-detects changes
- [ ] Vercel build starts
- [ ] TypeScript compile succeeds
- [ ] Next.js build succeeds
- [ ] Deployment ready
- [ ] **Production URL live**

**Expected:** 2-3 minutes after push

---

## Phase 2: Supabase Audio Setup

### Step 1: Create Storage Bucket
- [ ] Go to Supabase Dashboard
- [ ] Navigate to Storage → Buckets
- [ ] Click "New bucket"
- [ ] Name: `cabin-crew-audio`
- [ ] Make public: ✅ YES
- [ ] Create

### Step 2: Upload Audio Files
- [ ] Choose upload method:
  - [ ] Option A: Dashboard drag-drop (easiest)
  - [ ] Option B: CLI (`npm install -g supabase && supabase login`)
  - [ ] Option C: Node script (`node scripts/upload-audio-supabase.js`)
- [ ] Verify all 198 files uploaded
- [ ] Check file sizes match local versions

### Step 3: Test Audio URLs
- [ ] Visit Supabase Storage bucket
- [ ] Copy a test file URL
- [ ] Paste in browser to verify accessibility
- [ ] Should download/play without errors

---

## Phase 3: Vercel Configuration

### Step 1: Set Environment Variables
In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://muqkevgspfbocjftvszt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = [your-anon-key]
NEXT_PUBLIC_SUPABASE_AUDIO_URL = https://muqkevgspfbocjftvszt.supabase.co/storage/v1/object/public/cabin-crew-audio
```

### Step 2: Redeploy
- [ ] Go to Deployments
- [ ] Click "Redeploy" on latest build
- [ ] Wait for build to complete
- [ ] Verify "Production" badge

---

## Phase 4: Testing

### Audio Playback
- [ ] Open app in browser
- [ ] Go to any lesson
- [ ] Click audio player
- [ ] Audio loads from Supabase ✓
- [ ] Check browser Network tab → filter "audio"
- [ ] URLs should show Supabase domain

### Content Verification
- [ ] Dashboard loads ✓
- [ ] 24 lessons visible ✓
- [ ] 8 units organized ✓
- [ ] Quiz works ✓
- [ ] Flashcards work ✓
- [ ] XP/badges visible ✓

### Performance
- [ ] Page load < 3s ✓
- [ ] Audio starts < 2s ✓
- [ ] No console errors ✓

---

## 🎉 Launch Ready!

Once all phases complete:
- App: Production-ready ✓
- Audio: Scalable via Supabase ✓
- Performance: Optimized ✓
- Maintenance: Easy updates ✓

**Share URL:** `https://cabin-crew-academy.vercel.app`
