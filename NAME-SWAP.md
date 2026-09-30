# Name swap — one-line change

The group name is undecided. The whole site reads it from a single
variable so Andrew can rename the group without touching any page.

## The one line

`config.js`:

```js
const GROUP_NAME = "Saetbyeol Group";   // <-- change this one line
```

Every page injects it at load via `site.js` into all `[data-group-name]`
elements and the `<title>`. No page contains the name in hard-coded copy
(except the static fallback text inside the elements, which is replaced
on load).

## Full swap checklist (when Andrew picks the real name)

1. `config.js`: set `GROUP_NAME` to the chosen name.
2. `config.js`: set `CONTACT_EMAIL` to the real address on the real domain.
3. `config.js`: set `SHOW_PLACEHOLDER_NOTICE = false` (removes the
   "Placeholder name" banner from every page).
4. `contact.html`: when ready, set `CONTACT_API` to the platform leads
   endpoint AND add `"umbrella"` to the platform API `SITES_CONFIG`
   (requires Andrew's approval + API redeploy); the form then posts
   there instead of the mailto fallback.
5. Re-check the fallback text inside `[data-group-name]` elements and
   `<title>` tags — they still say "Saetbyeol Group" for no-JS readers.
   A find/replace of `Saetbyeol Group` across the directory covers it.

## Deliberately NOT on the site

- Andrew's name or photo.
- Any financial figures (AUM, returns, fund size).
- Trackers, analytics, or cookies (none are used, so no banner is needed).
- The words "family office".
