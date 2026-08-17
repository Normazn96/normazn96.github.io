import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("contains the approved academic homepage content", async () => {
  const html = await source("site/index.html");

  assert.match(html, /<title>Nan Zhao \| Counseling Psychology<\/title>/);
  assert.equal((html.match(/<section\b/g) ?? []).length, 6);
  assert.match(html, /<h2>About<\/h2>/);
  assert.match(html, /<h2>Education<\/h2>/);
  assert.match(html, /<h2>Research<\/h2>/);
  assert.match(html, /<h2>Clinical Training Interests<\/h2>/);
  assert.match(html, /<h2>Publications<\/h2>/);
  assert.match(html, /<h2>Contact<\/h2>/);
  assert.match(html, /Peking University/);
  assert.match(html, /M\.S\. in Clinical and Health Psychology/);
  assert.match(html, /B\.S\. in Mathematics and Applied Mathematics \(Double Major\)/);
  assert.match(html, /IferW48AAAAJ/);
  assert.match(html, /0000-0003-3498-4741/);
  assert.equal((html.match(/class="obfuscated-email"/g) ?? []).length, 2);
  assert.match(html, /nzhao[\s\S]*AT[\s\S]*iowastate[\s\S]*DOT[\s\S]*edu/);
  assert.equal((html.match(/class="publication-self-author"/g) ?? []).length, 15);
});

test("keeps private CV and contact details out of public source", async () => {
  const files = await Promise.all([source("site/index.html"), source("README.md")]);
  const publicSource = files.join("\n");
  const atSign = String.fromCharCode(64);

  assert.equal(publicSource.includes(atSign), false);
  assert.doesNotMatch(publicSource, /mailto:/i);
  assert.doesNotMatch(publicSource, /cv\.pdf|downloadable CV|href=["'][^"']*\/cv/i);
  assert.doesNotMatch(publicSource, /515[-–]\d{3}[-–]\d{4}/);
});

test("uses only the selected public design", async () => {
  const [html, css] = await Promise.all([source("site/index.html"), source("site/styles.css")]);

  assert.doesNotMatch(html, /homepage draft|not published|template picker|palette picker/i);
  assert.doesNotMatch(html, /Quiet Scholar|Field Notes|Cardinal Banner|Research Brief/);
  assert.match(css, /--page: #fcfcfe/);
  assert.match(css, /--accent: #4b6494/);
  assert.match(css, /--rail: #edf1f8/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 540px\)/);
});

test("includes all static publishing assets", async () => {
  const paths = [
    "site/index.html",
    "site/styles.css",
    "site/.nojekyll",
    "site/robots.txt",
    "site/sitemap.xml",
    "site/og.png",
  ];

  const stats = await Promise.all(paths.map((path) => stat(new URL(path, root))));
  assert.ok(stats.every((entry) => entry.isFile()));
  assert.ok(stats.at(-1).size > 10_000);
});
