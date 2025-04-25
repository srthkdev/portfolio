import { getAccessToken } from '@/lib/spotify';

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    
    // Use access_token for Spotify API requests
    // Example:
    // const response = await fetch('https://api.spotify.com/v1/tracks/id', {
    //   headers: {
    //     Authorization: `Bearer ${access_token}`,
    //   },
    // });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch Spotify data' }, { status: 500 });
  }
} 