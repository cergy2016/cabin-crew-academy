/**
 * Audio URL configuration
 * Supports both local paths (Vercel /public) and Supabase Storage URLs
 */

export function getAudioUrl(path: string): string {
  // If the audio file is in Supabase Storage, use Supabase URL
  const supabaseAudioUrl = 'https://muqkevgspfbocjftvszt.supabase.co/storage/v1/object/public/cabin-crew-audio';

  if (path.startsWith('/audio/unit-') || path.startsWith('/audio/interview/')) {
    // ICAO curriculum and interview prep audio - use Supabase Storage
    // Files are stored at bucket root: unit-1/lesson-1/example-1.wav or interview/emirates-q-1/question.wav
    const cleanPath = path.replace(/^\/audio\//, '');
    return `${supabaseAudioUrl}/${cleanPath}`;
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
