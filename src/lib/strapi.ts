// src/lib/strapi.ts
const base = process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

console.log('STRAPI BASE URL:', base); // this will log in the terminal when Next runs

export async function strapi(path: string, init?: RequestInit) {
  const res = await fetch(`${base}${path}`, {
    ...(init || {}),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status}: ${await res.text()}`);
  }

  return res.json();
}
