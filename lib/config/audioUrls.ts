/**
 * Audio URL configuration
 * Supports both local paths (Vercel /public) and Supabase Storage URLs
 */

export function getAudioUrl(path: string): string {
  // If the audio file is in Supabase Storage, use Supabase URL
  // Otherwise fall back to local path (for dev/old lessons)

  // For now, return local path (works for old lesson-1-1, lesson-1-2 audio)
  // To use Supabase, set NEXT_PUBLIC_SUPABASE_AUDIO_URL in env vars
  const supabaseAudioUrl = process.env.NEXT_PUBLIC_SUPABASE_AUDIO_URL;

  if (supabaseAudioUrl && path.startsWith('/audio/unit-')) {
    // New ICAO curriculum audio - use Supabase Storage
    // Files are stored in: audio/unit-1/lesson-1/example-1.wav
    const cleanPath = path.replace(/^\/audio\//, '');
    return `${supabaseAudioUrl}/audio/${cleanPath}`;
  }

  // Old lesson audio or no Supabase configured - use local path
  return path;
}

/**
 * Example: Once audio is uploaded to Supabase Storage, set:
 * NEXT_PUBLIC_SUPABASE_AUDIO_URL=https://your-project.supabase.co/storage/v1/object/public/audio
 *
 * This will automatically redirect all unit-* audio requests to Supabase Storage.
 */
