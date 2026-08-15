# Installing the app on Android

Two ways to run it. The second is the real one.

## 1. Quick — the hosted preview

Open the artifact link in Chrome, then **⋮ → Add to Home screen**. You get an icon and it remembers your data. It is a shortcut rather than an installed app, so it still opens with browser chrome around it.

## 2. Proper — install it as an app from your own repo

This gives you a genuine installed app: its own icon in the app drawer, its own window with no browser bar, its own entry in recents, and it works with no signal at all. Android treats it as an app because it is one.

**One-time setup (about two minutes, on a computer or the GitHub mobile site):**

1. Go to `https://github.com/JMx3621/Healthy-Eating-/settings/pages`
2. Under **Source**, choose **Deploy from a branch**
3. Branch: `claude/personalized-meal-plan-nnzpo1` — Folder: **`/ (root)`**
4. Click **Save**

Then wait. The first build takes **1–3 minutes** and the URL returns 404 until it finishes — that 404 is normal, not a mistake.

To watch it: the **Actions** tab shows a `pages build and deployment` run. Green tick means live. You can also reload the Pages settings page — once it has built, a green banner appears at the top with the live link.

Your app is then at:

```
https://jmx3621.github.io/Healthy-Eating-/
```

### If it still 404s

- **Did you press Save?** Selecting the branch alone does nothing until you do.
- **Give it three minutes.** A 404 immediately after saving means nothing.
- **Check the Actions tab** for a failed build. `.nojekyll` sits in the root specifically to stop Jekyll from trying to process the site, which is the usual cause of a failure.
- **Confirm the folder is `/ (root)`,** not `/docs`. There is no `docs` folder any more — `index.html` lives at the top level.

**Then on your phone:**

1. Open that URL in Chrome
2. **⋮ → Install app** (if it says *Add to Home screen* instead, wait a few seconds and reopen — Chrome needs a moment to read the manifest)
3. Confirm

That is it. It now behaves like any other app on the phone.

### Why it works offline

`sw.js` is a service worker that caches the whole app on first load and serves from cache afterwards, refreshing quietly in the background whenever you do have signal. So the plan, recipes and shopping lists are available in a supermarket basement.

### Where your data lives

On the phone, in browser storage, and nowhere else. Nothing is uploaded. That also means **it does not sync between devices** and clearing Chrome's site data wipes it — use **Me → Back up my log** now and then.

Note that the two installs above are separate origins (`claude.ai` and `github.io`), so they keep separate data. Pick one and stick with it.

## What about a Play Store app?

Not from here. Producing a `.apk` needs the Android SDK, and putting it on the Play Store needs a signing key, a developer account and a review. Neither is something I can do for you.

The honest comparison: an installed PWA matches a native app for everything this plan needs — offline, home screen, full screen, local storage. The one real gap is **background notifications**, which need a push server. That gap is why the calendar file exists.

## Files

| Path | What it is |
|---|---|
| `index.html` | The app, built and self-contained — what GitHub Pages serves |
| `manifest.webmanifest` | Makes it installable |
| `sw.js` | Offline caching |
| `icon-*.png` | Launcher icons |
| `.nojekyll` | Stops GitHub trying to run Jekyll over the site |
| `app/data.js` | All plan content — menus, recipes, training, gut protocol |
| `app/shell.html` | App template with a `/*__DATA__*/` marker |
| `app/build.js` | Inlines data into the template |
| `app/gen-ics.js` | Builds the calendar file |
| `app/icons.js` | Generates the PNG icons |
| `eight-week-kitchen.ics` | The calendar, 80 entries |

Rebuild after editing anything in `app/`:

```bash
node app/build.js                # -> eight-week-app.html AND index.html
node app/gen-ics.js 2026-08-16   # -> eight-week-kitchen.ics
node app/icons.js                # -> icon-*.png
```

`build.js` emits both outputs from the same source: `eight-week-app.html` is body-only for publishing as an Artifact, and `index.html` is the same app wrapped in a full HTML document with the manifest and service-worker registration.
