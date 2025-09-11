import { NextRequest, NextResponse } from 'next/server';
import { AIService } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { niche, topic, systemPrompt } = body;

    // Validate required fields
    if (!niche || !topic) {
      return NextResponse.json(
        { error: 'Missing required fields: niche and topic' },
        { status: 400 }
      );
    }

    // Generate script using AI
    const result = await AIService.generateScript({
      niche,
      topic,
      systemPrompt: systemPrompt || 'You are an expert YouTube script writer. Create engaging, informative scripts that hook viewers from the start, provide valuable content, and encourage engagement.'
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      script: result.content,
      niche,
      topic,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Script generation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}