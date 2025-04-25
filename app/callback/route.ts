import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return Response.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:3000/callback',
      }),
    });

    const data = await response.json();
    
    // This will show your refresh token - copy it!
    console.log('Refresh Token:', data.refresh_token);
    
    return Response.json({ message: 'Check your console for the refresh token!' });
  } catch (error) {
    return Response.json({ error: 'Failed to get token' }, { status: 500 });
  }
} 