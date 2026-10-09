// Local preview server with auto-rebuild and live reload.
//   npm run dev   → http://localhost:3000
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from './build.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT) || 3000;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain' };
const clients = new Set();
const RELOAD = `<script>new EventSource('/__reload').onmessage=()=>location.reload()</script>`;

function rebuild() {
  try {
    build({ quiet: true });
    console.log(`↻ rebuilt ${new Date().toLocaleTimeString()}`);
    for (const res of clients) res.write('data: reload\n\n');
  } catch (e) {
    console.error('Build failed:', e.message);
  }
}
rebuild();

let timer;
for (const dir of ['content', 'public', 'src', 'scripts']) {
  fs.watch(path.join(ROOT, dir), { recursive: true }, () => { clearTimeout(timer); timer = setTimeout(rebuild, 120); });
}
fs.watch(path.join(ROOT, 'docs.config.json'), () => { clearTimeout(timer); timer = setTimeout(rebuild, 120); });

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  let file = path.join(DIST, url);
  if (!file.startsWith(DIST)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  let status = 200;
  if (!fs.existsSync(file)) { file = path.join(DIST, '404.html'); status = 404; }
  const ext = path.extname(file);
  let body = fs.readFileSync(file);
  if (ext === '.html') body = body.toString().replace('</body>', `${RELOAD}</body>`);
  res.writeHead(status, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  res.end(body);
}).listen(PORT, () => console.log(`Lupe Docs running at http://localhost:${PORT}`));
