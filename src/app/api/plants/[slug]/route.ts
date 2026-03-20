import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    const { data: plant, error } = await supabase
      .from('plants')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    if (!plant) {
      return NextResponse.json({ success: false, error: 'Plant not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: plant });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    const body: Record<string, unknown> = await request.json();
    
    // Map camelCase to snake_case similar to POST
    // We would need a robust mapping function in reality, but here's a simplified mapping
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbPayload: any = {};
    if (typeof body.scientificName === 'string') dbPayload.scientific_name = body.scientificName;
    if (body.commonNames) dbPayload.common_names = body.commonNames;
    if (typeof body.status === 'string') dbPayload.status = body.status;
    if (typeof body.description === 'string') dbPayload.description = body.description;
    // ... add full mapping as needed

    // @ts-ignore - Supabase type inference for JSONB arrays is causing issue
    const { data: plant, error } = await supabase
      .from('plants')
      .update(dbPayload)
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;
    if (!plant) {
      return NextResponse.json({ success: false, error: 'Plant not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: plant });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = await params;
    const { data, error } = await supabase
      .from('plants')
      .delete()
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ success: false, error: 'Plant not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: {} });
  } 
  catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
