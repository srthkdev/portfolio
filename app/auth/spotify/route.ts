import { getAuthUrl } from '@/lib/spotify-auth';
import { redirect } from 'next/navigation';

export async function GET() {
  const url = getAuthUrl();
  console.log('Auth URL:', url);
  redirect(url);
} 