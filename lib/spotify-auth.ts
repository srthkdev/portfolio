const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state'
].join(' ');

export const getAuthUrl = () => {
  if (!process.env.SPOTIFY_CLIENT_ID) {
    throw new Error('SPOTIFY_CLIENT_ID is not defined');
  }

  const params = {
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    show_dialog: 'true'
  };

  const searchParams = new URLSearchParams(params);
  return `${SPOTIFY_AUTH_URL}?${searchParams.toString()}`;
}; 