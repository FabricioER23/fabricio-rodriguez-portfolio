const UPSTREAM_URL =
  'https://github.com/FabricioER23/fabricio-rodriguez-portfolio/releases/download/game-assets-v1/mva.wasm';

export async function onRequestGet() {
  const upstream = await fetch(UPSTREAM_URL);
  if (!upstream.ok) {
    return new Response('Asset not found', { status: 502 });
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/wasm');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  const contentLength = upstream.headers.get('content-length');
  if (contentLength) headers.set('Content-Length', contentLength);

  return new Response(upstream.body, { status: 200, headers });
}
