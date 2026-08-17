# Nan Zhao’s Academic Website: A No-Experience-Needed Maintenance Guide

This guide explains how to update the website using only a web browser. You do
not need to install anything or know how to program.

- Website: <https://normazn96.github.io/>
- GitHub repository: <https://github.com/normazn96/normazn96.github.io>

## The easiest option: ask Codex

You do not have to edit the website yourself. You can open Codex, describe one
change in ordinary language, and ask it to inspect the repository, make the
change, check the website, and show you the result before publishing.

Useful example requests:

- “Add this new publication to Nan Zhao’s website, put it first, bold Zhao,
  N., add the DOI, update the safety test, and show me the result before you
  publish: [paste the complete citation here].”
- “Change the About paragraph to the text below. Please do not change any
  other section, and let me review it before you publish: [paste the new
  paragraph here].”
- “Replace the website headshot with the photo I attached. Keep the public
  filename as `headshot.jpg`, check the page on desktop and mobile, and ask me
  before pushing it to GitHub.”

For the clearest result, say exactly what should change, what must stay the
same, and whether Codex may publish immediately or must wait for approval. For
an image change, attach the image. For a publication, provide the final
citation and DOI.

The remaining sections explain how to make every update manually in GitHub.

## Four words you need to know

- **Repository:** The folder on GitHub that contains the website.
- **File:** One document or image inside the repository.
- **Commit:** GitHub’s name for saving a change. Every commit becomes part of
  the website’s recoverable history.
- **Workflow:** The automatic process that checks and publishes the website
  after a commit.

The `main` branch is the published version. Changes committed to `main` are
checked and then placed online automatically.

## The files that matter

| File | What it controls |
|---|---|
| `site/index.html` | All visible wording, sections, publications, contact information, and links |
| `site/styles.css` | Colors, typography, spacing, and layout |
| `site/headshot.jpg` | The headshot in the left profile panel |
| `site/og.png` | The wide preview image shown when the website link is shared |
| `tests/site.test.mjs` | Automatic checks that prevent common publishing and privacy mistakes |
| `README.md` | A public description of the repository, not the webpage itself |

Do not edit these unless someone experienced is helping you:

- `.github/workflows/pages.yml`
- `site/.nojekyll`
- `package.json`
- `.gitignore`

`site/robots.txt` and `site/sitemap.xml` normally need no changes as long as
the website remains at <https://normazn96.github.io/>.

## The normal editing procedure

Use this procedure for most text changes.

1. Sign in to GitHub.
2. Open the [website repository](https://github.com/normazn96/normazn96.github.io).
3. Make sure the branch selector above the file list says `main`.
4. Open the required folder and file. Most changes begin with `site`, then
   `index.html`.
5. Click the pencil icon near the upper-right corner of the file.
6. Use `Command + F` on a Mac or `Ctrl + F` on Windows to search for the
   existing wording.
7. Carefully replace only the intended text.
8. Click **Commit changes…**
9. Enter a short description, such as `Update research interests`.
10. Select **Commit directly to the main branch**.
11. Click **Commit changes**.

GitHub explains the same process in its
[editing files guide](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

A simple rule: make one logical change at a time. “Add a publication” is a
good commit. A large group of unrelated changes is harder to check and undo.

## Wait for the change to publish

After committing:

1. Open the repository’s **Actions** tab.
2. Select **Publish academic homepage** in the left column.
3. Open the newest run at the top.
4. Wait for a green check mark. Publishing usually takes one to three minutes.
5. Open [the live website](https://normazn96.github.io/).
6. Refresh the page.

If the old version remains visible:

- On a Mac, press `Command + Shift + R`.
- On Windows, press `Ctrl + F5` or `Ctrl + Shift + R`.
- Wait five minutes and try again.
- You can also open `https://normazn96.github.io/?v=2`. Change the number after
  `v=` on a later occasion.

GitHub describes the Actions screen in its
[workflow history guide](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history?tool=webui).

## Replace the headshot

The current photograph is `site/headshot.jpg`. It was copied from Nan Zhao’s
public Google Scholar profile when the website was built. It is now a separate
file in this repository: changing the Google Scholar photograph will **not**
automatically change this website.

The easiest and safest replacement method is to keep exactly the same
filename.

### Prepare the photograph

- Use a JPEG portrait that Nan has permission to publish.
- Crop it vertically, preferably close to a 2:3 shape.
- Give it the exact filename `headshot.jpg`.
- Lowercase letters matter: `Headshot.JPG` is not the same filename.
- A clear image under 1 MB is normally enough for this layout.

### Upload it

1. Open the repository.
2. Open the `site` folder.
3. Select **Add file**, then **Upload files**.
4. Choose the new `headshot.jpg`.
5. Confirm that GitHub recognizes it as a replacement for the existing file.
6. Use a commit message such as `Update headshot`.
7. Commit directly to `main`.
8. Wait for the green Actions check.

GitHub’s upload instructions are available in
[Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

You do not need to edit `index.html` if the filename remains `headshot.jpg`.

The current HTML lists the image as 171 pixels wide and 256 pixels high. If a
future replacement has a very different shape, either crop it to approximately
the same proportion or update the `width` and `height` values near:

```html
src="headshot.jpg"
```

The alternative description is:

```html
alt="Professional headshot of Nan Zhao"
```

Update that description if the person’s name changes. A browser may
temporarily show the old photograph from its cache; a hard refresh usually
fixes this.

## Change the name, pronouns, title, institution, or graduation year

Open `site/index.html` and search for the current wording. Some information
appears more than once intentionally.

### Name

Search for `Nan Zhao` and check every result. The name currently appears in:

- The browser-tab title
- Search and social-sharing descriptions
- The profile panel’s accessibility label
- The headshot description
- The large visible name
- The About heading line
- The footer

Do not replace `Zhao, N.` in the publication list when merely changing the
display name unless Nan’s publication name has also changed.

### Pronouns

Search for `she/her`. It appears in the profile panel and the About section.
Update both.

### Academic title

Search for both `PhD Candidate` and `PhD candidate`. Capitalization differs
because one version is a label and one occurs in a sentence.

### Institution and program

Search for `Iowa State University`. It appears in the page description,
profile panel, About section, Education section, and footer.

Search for `Counseling Psychology`. It appears in several visible and
behind-the-scenes descriptions.

### Expected graduation year

Search for `Expected 2028`. It appears in both About and Education.

Also review the beginning of `site/index.html`. These items are not visible in
the main page, but they control the browser title, search description, and
link-sharing description:

```html
<title>...</title>
<meta name="description" ... />
<meta property="og:title" ... />
<meta property="og:description" ... />
<meta property="og:image:alt" ... />
<meta name="twitter:title" ... />
<meta name="twitter:description" ... />
```

## Edit the About section

Open `site/index.html` and search for:

```html
id="about"
```

The About section contains the short name-and-pronouns line, the program and
university line, and the main biography paragraph.

To revise the biography, replace only the words between `<p>` and `</p>`. Keep
those opening and closing markers. For example:

```html
<p>
  I am a PhD candidate ...
</p>
```

It is fine for the text to occupy several lines in the editor. The website will
still display it as a normal paragraph. For a literal ampersand, write
`&amp;`. For example, `Research &amp; Practice` displays as “Research &
Practice.”

## Update Education

In `site/index.html`, search for:

```html
id="education"
```

Each degree is one complete block beginning with:

```html
<li class="education-item">
```

and ending with `</li>`.

A normal degree entry looks like this:

```html
<li class="education-item">
  <span class="education-year">2029</span>
  <div class="education-details">
    <h3>Degree name</h3>
    <p>University name · City, State or Country</p>
  </div>
</li>
```

To add a degree:

1. Copy an entire existing block from its opening `<li>` through its closing
   `</li>`.
2. Paste it above or below another degree.
3. Replace the year, degree, university, and location.
4. Keep the degrees in newest-first order.

To remove a degree, delete its entire `<li>...</li>` block. Do not remove only
half of the block.

The double major uses two `<span>` lines inside `<h3>`. Preserve that structure
if both degrees should appear on separate lines.

## Update Research

Search `site/index.html` for:

```html
id="research"
```

The first `<p>...</p>` in that section is the research summary. The topics
appear inside:

```html
<ul class="interest-list">
```

Each bullet has this form:

```html
<li>Research interest</li>
```

- To add a topic, copy one complete `<li>...</li>` line and change its wording.
- To remove a topic, delete one complete `<li>...</li>` line.
- To reorder topics, move complete lines.

Keep the summary concise—usually three or four sentences at most.

## Update Clinical Training Interests

Search for:

```html
id="clinical"
```

Edit the summary paragraph between its `<p>` and `</p>` markers. Clinical
topics are also individual items:

```html
<li>Clinical interest</li>
```

Add, remove, or reorder only complete `<li>...</li>` items. Do not publish
identifying client information, clinical records, case details, assessment
data, or the names of clients.

## Add or revise a publication

Search for:

```html
id="publications"
```

The publications are inside `<ol class="publication-list">`. Each publication
begins with `<li>` and ends with `</li>`. The list is currently newest first.

### Template for a publication with a DOI

Copy this template and place it immediately after
`<ol class="publication-list">` for the newest publication:

```html
<li>
  <p>
    Author, A. A., <strong class="publication-self-author">Zhao, N.</strong>,
    &amp; Author, B. B. (2027). Article title.
    <cite>Journal Name</cite>, 00(0), 00–00.
    <a
      href="https://doi.org/DOI-GOES-HERE"
      target="_blank"
      rel="noopener noreferrer"
    >DOI</a>
  </p>
</li>
```

Important details:

- Put Nan’s publication name inside
  `<strong class="publication-self-author">Zhao, N.</strong>`. This makes her
  name bold.
- If Nan is the first author, place that bold block at the beginning of the
  author list.
- For equal contribution, use
  `<strong class="publication-self-author">Zhao, N.*</strong>`.
- Write `&amp;` before the final author, not a plain ampersand.
- Put the journal or book title inside `<cite>...</cite>`.
- Use the complete DOI address beginning with `https://doi.org/`.
- If no DOI exists, omit the entire `<a ...>DOI</a>` portion.
- Move a complete `<li>...</li>` block when reordering a publication.
- Never paste a citation over an existing opening or closing tag.

### Update the publication count in the safety test

The automatic check currently expects 15 bold appearances of Nan’s name. After
adding or removing a publication:

1. Open `tests/site.test.mjs`.
2. Search for `publication-self-author`.
3. Find the line ending with `length, 15`.
4. Change `15` to the new total.

Every publication should normally contain exactly one
`publication-self-author` marker. If a new paper is added, the count will
usually increase by one.

Because `index.html` and the test are saved separately in GitHub’s simple
editor, the first commit may temporarily produce a red Actions result. That is
harmless: the previous good website remains online. Make the matching test
change, commit it, and wait for the next run to turn green.

## Change the obfuscated email address

The displayed email is deliberately not clickable and does not contain a
normal at-sign. This discourages basic automated scraping, although no public
display method can stop every scraper.

The address appears in two places: the left profile panel and the Contact
section near the bottom. Search `site/index.html` for `nzhao`.

Both email blocks should remain identical:

```html
<span class="obfuscated-email">
  nzhao <span class="email-word">AT</span> iastate
  <span class="email-word">DOT</span> edu
</span>
```

Edit both copies. Keep `AT` and `DOT` inside their existing `<span>` markers.
For an address with an additional domain part, add another DOT marker. Do not
enter the address in normal email form anywhere in `index.html` or `README.md`,
and do not add a clickable email link.

If the address changes, also open `tests/site.test.mjs` and search for `nzhao`.
Update the corresponding username and domain words in that test. If the new
address has a different number of domain parts, ask Codex or another
experienced person to update the test pattern.

## Update profile links

The University profile, Google Scholar, ORCID, and ResearchGate links each
appear twice: once in the left profile panel and again in Contact.

To update a link:

1. Open `site/index.html`.
2. Search for the current full address, such as
   `https://orcid.org/0000-0003-3498-4741`.
3. Replace both occurrences with the new public address.
4. If the visible label or accessibility label has changed, update those words
   in both copies too.

A link has this general structure:

```html
<a
  href="https://example.com/profile"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Profile name (opens in a new tab)"
>Profile name</a>
```

Change the address inside `href="..."`, but keep the quotation marks. If an
address contains an ampersand, write it as `&amp;` inside the HTML. The
current Google Scholar link demonstrates this.

To add a new profile service, copy one complete `<a ...>...</a>` block and add
it in both profile-link areas. To remove a service, delete its complete link
block in both places.

Google Scholar and ORCID are also checked in `tests/site.test.mjs`. If either
address changes, search that file for the old Scholar user ID or ORCID number
and update it.

## Update the footer and year

Near the bottom of `site/index.html`, search for `© 2026 Nan Zhao` and change
the year when appropriate.

The second footer line is `Counseling Psychology · Iowa State University`.
Update it if the program or affiliation changes.

## Change the theme colors

Open `site/styles.css`. The safest color controls are at the very top:

```css
:root {
  --page: #fcfcfe;
  --ink: #293448;
  --muted: #5b6679;
  --accent: #4b6494;
  --rule: #c0cde0;
  --portrait: #d5dfef;
  --focus: #89503c;
  --rail: #edf1f8;
}
```

Each six-character value beginning with `#` is a color.

| Setting | Controls |
|---|---|
| `--page` | Main page background |
| `--ink` | Primary text |
| `--muted` | Secondary text |
| `--accent` | Links, bullets, and small highlights |
| `--rule` | Borders and divider lines |
| `--portrait` | Background shown while the headshot loads |
| `--focus` | Keyboard-focus outline |
| `--rail` | Left profile-panel background |

Change only the characters after the colon, keeping the colon and semicolon.
Keep `--ink` dark against the light `--page`, keep links clearly visible, and
avoid very pale text. Change one or two colors at a time and inspect the result
on both a computer and phone.

The safety test checks three current colors. If you change them, open
`tests/site.test.mjs` and update the matching lines for `--page`, `--accent`,
and `--rail`. Do not delete the mobile-layout sections beginning with `@media`.

## Replace the social-sharing preview image

`site/og.png` is not the headshot. It is the wide image that may appear when
someone shares the website link in social media, messaging apps, or
professional platforms.

For a replacement:

1. Create a PNG measuring 1200 × 630 pixels.
2. Make sure it contains only public information.
3. Name it exactly `og.png`.
4. Keep it larger than 10 KB and below GitHub’s browser upload limit.
5. Open the repository’s `site` folder.
6. Select **Add file**, then **Upload files**.
7. Upload the replacement and commit directly to `main`.

Keep the same filename so no other file needs to change.

The text accompanying the preview is near the beginning of `site/index.html`.
Search for `og:title` and also review `og:description`, `og:image:alt`,
`twitter:title`, and `twitter:description`.

Social platforms often cache preview images. The website may be updated even
if a messaging app continues showing the previous preview for several days.

## Safely remove or reorder content

HTML uses matching opening and closing markers. Move or delete a whole block:

- Paragraph: `<p> ... </p>`
- Bullet: `<li> ... </li>`
- Link: `<a ...> ... </a>`
- Section: `<section ...> ... </section>`

Moving complete publication, education, and list-item blocks is safe.

Removing or adding an entire major section is more involved. You must also:

1. Add or remove its matching navigation link near
   `aria-label="Primary navigation"`.
2. Keep the section’s `id` and navigation `href` identical. For example,
   `href="#research"` goes to `id="research"`.
3. Update the expected section count in `tests/site.test.mjs`.
4. Add or remove the test for that section’s `<h2>` heading.

Ask for help if you are unsure where a section ends. A section can be much
longer in the file than it appears on the screen.

## Understand the automatic safety checks

The file `tests/site.test.mjs` protects the approved structure and privacy
decisions. Do not delete it merely to make a red test disappear.

Update the test when you intentionally change any of these:

| Website change | What to search for in the test |
|---|---|
| Browser-tab title | `Nan Zhao \| Counseling Psychology` |
| Number of major sections | `match(/<section` |
| Section heading | The exact heading, such as `Research` |
| Education wording | `Peking University` or the degree name |
| Google Scholar | `IferW48AAAAJ` |
| ORCID | `0000-0003-3498-4741` |
| Headshot filename or description | `headshot.jpg` or `Professional headshot` |
| Email | `nzhao` |
| Number of publications | `publication-self-author` |
| Main colors | `--page`, `--accent`, and `--rail` |
| Image filename | The list beginning with `const paths` |

Do not weaken the privacy checks that prohibit a normal machine-readable email
address, a clickable email link, a downloadable CV, or a phone number.

## Troubleshooting

### The website did not change

- Confirm that the commit was made to `main`.
- Open **Actions** and check the newest run.
- Wait for the green check.
- Perform a hard refresh.
- Wait five minutes for GitHub’s cache.

### Actions shows a red X

1. Open the red workflow run.
2. Open the `deploy` job.
3. Expand the first step with a red X.
4. Read the final lines.

If the failed step is **Verify public site**, the message often shows an old
value and a new value. Update `tests/site.test.mjs` to match an intentional
change, or correct the website file if the change was accidental. A failed run
normally leaves the previous good website online.

### The photograph is missing

- Confirm that the file is inside the `site` folder.
- Confirm that its name is exactly `headshot.jpg`.
- Confirm that the HTML still says `src="headshot.jpg"`.
- Check uppercase and lowercase letters in the filename.

### A link does not work

- Make sure the address begins with `https://`.
- Make sure it remains inside quotation marks after `href=`.
- Check both copies of the profile link.
- Open the destination directly in a new browser tab.

### The layout suddenly looks broken

A closing marker such as `</p>`, `</li>`, `</a>`, `</div>`, or `</section>` may
have been deleted. Restore the last good version or undo the recent edit.

### The social preview remains old

This is usually caching by the app where the link was shared. It does not
necessarily mean the website failed to publish.

### The whole website gives a 404 error

Do not delete or recreate the repository. Do not change the repository name,
Pages settings, or workflow file. Ask for help.

## Undo a bad edit

### Before committing

If you have not clicked **Commit changes**, leave the editor or cancel the
edit. Nothing has been published.

### After committing

If you know what is wrong, edit the file again, correct it, and make a new
commit such as `Correct publication entry`.

If you do not know what changed:

1. Open the repository.
2. Open the affected file.
3. Click **History** near the upper-right area of the file.
4. Open the last version from before the mistake.
5. For a text file, open its raw view and copy the complete old contents.
6. Return to the current version, click the pencil icon, replace its contents
   with the good version, and commit.
7. For an old photograph or `og.png`, download the earlier file and upload it
   again with the exact same filename.

You can also inspect the repository’s
[main-branch commit history](https://github.com/normazn96/normazn96.github.io/commits/main/).

Do not delete the repository to undo one edit. GitHub keeps a useful history
so that changes can be restored.

## Privacy rules

This repository and every file in it are public.

Never upload:

- The CV
- A phone number or street address
- Birth date, identification documents, passwords, or access keys
- GPA or other information Nan has chosen not to publish
- Client information, clinical notes, assessment records, or case details
- Private research data
- Unpublished manuscripts that are not approved for public release
- Documents containing tracked changes, hidden comments, or private metadata

Use only a headshot that Nan owns or has permission to publish.

Deleting a sensitive file later does not automatically erase it from GitHub’s
history. GitHub explains this risk in its
[file-deletion documentation](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository).
If private information is accidentally committed, stop editing and seek help
immediately. If a password or access key was exposed, change it immediately.

The written `AT` and `DOT` format only discourages simple email scrapers; it
does not provide complete anonymity.

## Final checklist after every update

- [ ] The newest Actions run has a green check.
- [ ] The live website shows the intended wording.
- [ ] The page looks correct on both a computer and phone.
- [ ] The headshot loads.
- [ ] Every updated link opens the correct destination.
- [ ] Nan Zhao is bold in every publication entry.
- [ ] The obfuscated email is correct in both locations.
- [ ] No CV, phone number, private address, client information, or confidential
      material was added.
- [ ] Spelling, degree dates, publication details, and DOI links were checked.
- [ ] The footer year is current.
