#!/bin/bash

# Upload audio files to Supabase Storage
# Usage: ./scripts/upload_audio_to_supabase.sh

set -e

echo "🎵 Cabin Crew Academy - Supabase Audio Upload"
echo "=============================================="
echo ""

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Installing..."
    npm install -g supabase
fi

echo "✅ Supabase CLI found"
echo ""

# Get project ID
read -p "📋 Enter your Supabase Project ID (e.g., muqkevgspfbocjftvszt): " PROJECT_ID

if [ -z "$PROJECT_ID" ]; then
    echo "❌ Project ID is required"
    exit 1
fi

echo ""
echo "📁 Preparing audio files for upload..."
echo "   Files to upload: 198 WAV files (46 MB total)"
echo ""

# Check if audio directory exists
if [ ! -d "public/audio" ]; then
    echo "❌ Error: public/audio directory not found"
    echo "   Make sure you're in the cabin-crew-academy-repo directory"
    exit 1
fi

# Count files
FILE_COUNT=$(find public/audio -name "*.wav" | wc -l)
echo "✅ Found $FILE_COUNT audio files"
echo ""

# Check if already logged in to Supabase
echo "🔐 Checking Supabase authentication..."
if supabase projects list &>/dev/null; then
    echo "✅ Already logged into Supabase"
else
    echo "⚠️  Not authenticated. Opening Supabase login..."
    supabase login
fi

echo ""
echo "📤 Starting upload to Supabase Storage..."
echo "   Bucket: audio"
echo "   Path: /audio"
echo ""

# Create bucket if it doesn't exist
echo "📦 Creating 'audio' bucket if needed..."
supabase storage create-bucket audio --public 2>/dev/null || echo "   Bucket already exists"

echo ""
echo "⏳ Uploading files (this may take 10-15 minutes for 198 files)..."
echo ""

# Upload files
supabase storage upload audio public/audio/ --recursive --project-id "$PROJECT_ID"

echo ""
echo "✅ Upload complete!"
echo ""
echo "🎉 Next steps:"
echo "   1. Get your Supabase URL from: https://supabase.com/dashboard/project/$PROJECT_ID/settings/general"
echo "   2. Create .env.local with:"
echo "      NEXT_PUBLIC_SUPABASE_AUDIO_URL=https://$PROJECT_ID.supabase.co/storage/v1/object/public/audio"
echo "   3. Restart your dev server: npm run dev"
echo "   4. Test at: https://cabin-crew-academy.vercel.app"
echo ""
