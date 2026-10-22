# Content rules

Every blog post and AI update follows these rules. The blog routine and the AI updates routine both read this file. Publish with `scripts/publish-post.ts`, which checks the mechanical rules below and rejects a post that breaks them.

## Voice

- No em dashes or en dashes. Use commas, periods, or "and".
- Short sentences. Plain English. Vary the sentence length so the text does not read like a list.
- Avoid these words: delve, landscape, leverage, robust, seamless, unlock, game-changer, tapestry, elevate. Also avoid the phrase "in today's fast-paced world".
- No "In conclusion" endings. End when the last useful point is made.
- No emoji.
- No generic intros. Open with the specific point, finding, or news.

## SEO

- Pick one primary keyword. Put it in the title, the H1, the first 100 words, and the meta description.
- The site renders the post title as the H1. Do not add a `# ` heading to the content. Start the body at H2.
- Use H2 and H3 headings to structure the body.
- Meta description: 140 to 160 characters.
- Add 2 or 3 internal links in the body as markdown links that start with `/`, for example `[data verification](/data-verification)`. Link to existing posts or pages only (see below).

## Internal link targets

Pages: `/about`, `/blog`, `/ai-updates`, `/business-intelligence`, `/business-intelligence-exercises`, `/contact`, `/data-sorting`, `/data-validation`, `/data-verification`, `/data-security-check`, `/how-it-works`, `/industries`, `/trust-index`.

Industries: `/industries/education`, `/industries/logistics-trade`, `/industries/marketing-ecommerce`, `/industries/medical-clinical`.

Existing posts: run `node scripts/publish-post.ts --list`. Link as `/blog/<slug>` or `/ai-updates/<slug>`. Check the list before writing too, so you do not repeat a topic or reuse a slug.

## Input file

`scripts/publish-post.ts` takes one JSON file per post.

| Field | Type | Notes |
| --- | --- | --- |
| `type` | `"blog"` or `"ai-update"` | Required. |
| `title` | string | Required. Contains the primary keyword. |
| `slug` | string | Required. Lowercase letters, digits and single hyphens. Must not exist yet. |
| `excerpt` | string | Required. Up to 160 characters. Shown in listings and used as the page meta description. |
| `content` | string | Required. Markdown. Starts at H2. Has 2 or 3 internal links. |
| `metaTitle` | string | Required. |
| `metaDescription` | string | Required. 140 to 160 characters. |
| `tags` | string[] | Required, at least one. |
| `sources` | `{ label, url }[]` | Required for `ai-update`. Appended to the content as a `## Sources` list, so do not write that section yourself. On a blog it is saved as the post's references. |
| `category` | string | AI updates only. One of General, Model Release, Research, Industry News, Tool Update, Regulation. Defaults to General. |
| `images` | string[] | Blog only. Up to 4 https URLs of images already uploaded. The first is the hero image. |
| `primaryKeyword` | string | Optional. When set, the script checks it appears in the title, the first 100 words, and the meta description. |

The database has no columns for `metaTitle`, `metaDescription`, or `tags`. The script validates them but does not store them. The live page meta description comes from `excerpt`, so write the excerpt and the meta description to say the same thing.

## Publishing

New posts are saved as drafts unless the script runs with `--publish`. Run with `--dry-run` first to check a file without writing anything.
