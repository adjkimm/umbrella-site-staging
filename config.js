/* ============================================================
   UMBRELLA SITE — single-source configuration.
   NAME SWAP: change GROUP_NAME on the next line and the name
   updates on every page (masthead, titles, footer, headings).
   See NAME-SWAP.md for the full swap checklist.
   ============================================================ */
const GROUP_NAME = "Saetbyeol Group";   /* <-- change this one line */

/* Dev-only: shows the interruptive "placeholder name" notice on every
   page. Set to false (or delete the banner element) at go-live. */
const SHOW_PLACEHOLDER_NOTICE = true;

/* Contact: mailto fallback. When the group has a domain and the
   "umbrella" site_id is added to the platform API SITES_CONFIG,
   point CONTACT_API at the leads endpoint instead. */
const CONTACT_EMAIL = "hello@saetbyeolgroup.com";
const CONTACT_API = "https://platform-api-yf9l.onrender.com/api/v1/leads";
const CONTACT_SITE_ID = "umbrella";
