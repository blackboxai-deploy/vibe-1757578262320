import { NextRequest, NextResponse } from 'next/server';
import { AIService } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { script, voice, music, niche, topic } = body;

    // Validate required fields
    if (!script || !voice?.id || !niche || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields: script, voice, niche, and topic' },
        { status: 400 }
      );
    }

    // Generate video using AI
    const result = await AIService.generateVideo({
      script,
      voice,
      music: music || { id: 'none', name: 'No Music', genre: 'None' },
      niche,
      topic
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    // Generate additional metadata
    const metadataResult = await AIService.generateMetadata(script, niche, topic);
    let metadata = {};
    
    if (metadataResult.content) {
      try {
        metadata = JSON.parse(metadataResult.content);
      } catch (e) {
        console.warn('Failed to parse metadata JSON, using defaults');
        metadata = {
          title: topic,
          description: `Learn about ${topic} in this comprehensive ${niche} video.`,
          tags: [niche, topic, 'AI', 'YouTube'],
          thumbnailText: topic
        };
      }
    }

    return NextResponse.json({
      videoUrl: result.url,
      metadata,
      config: {
        script,
        voice,
        music,
        niche,
        topic
      },
      generatedAt: new Date().toISOString(),
      duration: Math.ceil(script.length / 150), // Estimated minutes
      status: 'completed'
    });

  } catch (error) {
    console.error('Video generation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle GET request for checking generation status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const videoId = searchParams.get('id');

  if (!videoId) {
    return NextResponse.json(
      { error: 'Video ID is required' },
      { status: 400 }
    );
  }

  // In a real implementation, you'd check the status from a database
  // For now, return a mock status
  return NextResponse.json({
    videoId,
    status: 'completed',
    progress: 100,
    videoUrl: `https://generated-videos.example.com/${videoId}.mp4`,
    generatedAt: new Date().toISOString()
  });
}