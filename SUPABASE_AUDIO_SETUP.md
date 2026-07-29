# Supabase Audio Setup Guide

## ✅ Status
- Audio files: 198 WAV files (46MB total) ✓ Ready
- Curriculum: Optimized 24-lesson structure ✓ Ready
- App deployed: In progress (TypeScript fixes pushed)
- Next: Upload audio to Supabase

## 📝 Step-by-Step Setup

### 1. Create Supabase Storage Bucket

```bash
# Via Supabase Dashboard:
# 1. Go to Storage → Buckets
# 2. Click "New bucket"
# 3. Name: "cabin-crew-audio"
# 4. Make public: Yes
# 5. Create bucket
```

### 2. Upload Audio Files

**Option A: Dashboard (Easy)**
```
1. Storage → cabin-crew-audio
2. Click "Upload"
3. Select all files from: public/audio/*
4. Upload
```

**Option B: Supabase CLI (Faster)**
```bash
# Install CLI
npm install -g supabase

# Login
supabase login

# Upload folder
supabase storage upload cabin-crew-audio public/audio --recursive
```

**Option C: Script**
```bash
# Use provided upload script
node scripts/upload-audio-supabase.js
```

### 3. Configure Vercel Environment

Set in Vercel dashboard:
```
NEXT_PUBLIC_SUPABASE_URL=https://muqkevgspfbocjftvszt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SUPABASE_AUDIO_URL=https://muqkevgspfbocjftvszt.supabase.co/storage/v1/object/public/cabin-crew-audio
```

### 4. Test Audio Playback

Open Vercel deployment:
- Go to any lesson
- Audio should load from Supabase
- Check browser Network tab for audio requests

## 🐛 Troubleshooting

### Audio 404 errors
- Check bucket name matches config
- Verify files uploaded successfully
- Check CORS settings in Supabase

### Slow loading
- Audio files large? Use compression or streaming
- Consider CDN caching

## 📊 Current Setup
- Curriculum: 24 lessons, 8 units
- Audio per lesson: ~8 files (theory, examples, pronunciation, etc.)
- Total: 198 audio files
- Approx size: 46MB
