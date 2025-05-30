// Create a SHA-256 hash object

import {encodeBase64} from "@oslojs/encoding";

let value = "";

// Set encoding to hex for readable output
process.stdin.setEncoding('utf8');

// Handle data chunks from stdin
process.stdin.on('data', (chunk) => {
  value += chunk;
});

const encoder = new TextEncoder();
// When input ends, output the digest
process.stdin.on('end', async () => {
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(value));

  const hash = encodeBase64(new Uint8Array(hashBuffer));
  console.log(`sha256-${hash}`);
});

// Handle errors
process.stdin.on('error', (err) => {
  process.exit(1);
});