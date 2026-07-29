#!/usr/bin/env node

/**
 * Upload audio files to Supabase Storage
 * Usage: node scripts/upload-audio-supabase.js
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Config
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const BUCKET_NAME = 'cabin-crew-audio';
const AUDIO_DIR = path.join(__dirname, '../public/audio');

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing environment variables:');
  console.error('   NEXT_PUBLIC_SUPABASE_URL');
  console.error('   NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function uploadAudio() {
  console.log('🎵 Uploading audio files to Supabase...\n');

  const audioFiles = [];

  // Collect all WAV files
  function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file.endsWith('.wav')) {
        const relativePath = path.relative(AUDIO_DIR, fullPath);
        audioFiles.push({ relativePath, fullPath });
      }
    });
  }

  walkDir(AUDIO_DIR);

  console.log(`📂 Found ${audioFiles.length} audio files\n`);

  let uploaded = 0;
  let failed = 0;

  for (const { relativePath, fullPath } of audioFiles) {
    try {
      const fileContent = fs.readFileSync(fullPath);

      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(relativePath, fileContent, {
          upsert: true,
          contentType: 'audio/wav',
        });

      if (error) {
        console.error(`❌ ${relativePath}: ${error.message}`);
        failed++;
      } else {
        console.log(`✅ ${relativePath}`);
        uploaded++;
      }
    } catch (err) {
      console.error(`❌ ${relativePath}: ${err.message}`);
      failed++;
    }

    // Progress every 10 files
    if ((uploaded + failed) % 10 === 0) {
      console.log(`   [${uploaded + failed}/${audioFiles.length}]\n`);
    }
  }

  console.log(`\n✅ Upload complete!`);
  console.log(`   Uploaded: ${uploaded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`\nSet this in Vercel environment variables:`);
  console.log(`   NEXT_PUBLIC_SUPABASE_AUDIO_URL=${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}`);
}

uploadAudio().catch(console.error);
