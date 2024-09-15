import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		const file = await request.blob();
		const filename = request.headers.get('x-vercel-filename') || 'file.png';
		const contentType = request.headers.get('content-type') || 'application/octet-stream';

		const blob = await put(filename, file, {
			contentType,
			access: 'public',
		});

		return NextResponse.json(blob);
	} catch (error) {
		console.error('Error uploading file:', error);
		return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
	}
}