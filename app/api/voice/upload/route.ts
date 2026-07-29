import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: Upload voice recording
 * POST /api/voice/upload
 *
 * Stores voice recording for later analysis
 */

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioBlob = formData.get('audio') as Blob;
    const lessonId = formData.get('lessonId') as string;

    if (!audioBlob) {
      return NextResponse.json(
        { error: 'Missing audio file' },
        { status: 400 }
      );
    }

    // TODO: Upload to cloud storage (e.g., Supabase Storage, AWS S3)
    // For now, return mock URL
    const mockUrl = `https://cabin-crew-academy.storage.example.com/voice/${lessonId}/${Date.now()}.wav`;

    return NextResponse.json({
      audioUrl: mockUrl,
      success: true,
    });
  } catch (error) {
    console.error('Voice upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload voice recording' },
      { status: 500 }
    );
  }
}
