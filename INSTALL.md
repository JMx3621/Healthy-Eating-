# Installing the app on Android

Two ways to run it. The second is the real one.

## 1. Quick — the hosted preview

Open the artifact link in Chrome, then **⋮ → Add to Home screen**. You get an icon and it remembers your data. It is a shortcut rather than an installed app, so it still opens with browser chrome around it.

## 2. Proper — install it as an app from your own repo

This gives you a genuine installed app: its own icon in the app drawer, its own window with no browser bar, its own entry in recents, and it works with no signal at all. Android treats it as an app because it is one.

**One-time setup (about two minutes, on a computer or the GitHub mobile site):**

1. Go to `https://github.com/JMx3621/Healthy-Eating-/settings/pages`
2. Under **Source**, choose **Deploy from a branch**
3. Branch: `claude/personalized-meal-plan-nnzpo1` — Folder: **`/docs`**
4. Click **Save**, then wait 1–2 minutes for the first build

Your app is then live at:

```
https://jmx3621.github.io/Healthy-Eating-/
```

**Then on your phone:**

1. Open that URL in Chrome
2. **⋮ → Install app** (if it says *Add to Home screen* instead, wait a few seconds and reopen — Chrome needs a moment to read the manifest)
3. Confirm

That is it. It now behaves like any other app on the phone.

### Why it works offline

`docs/sw.js` is a service worker that caches the whole app on first load and serves from cache afterwards, refreshing quietly in the background whenever you do have signal. So the plan, recipes and shopping lists are available in a supermarket basement.

### Where your data lives

On the phone, in browser storage, and nowhere else. Nothing is uploaded. That also means **it does not sync between devices** and clearing Chrome's site data wipes it — use **Me → Back up my log** now and then.

Note that the two installs above are separate origins (`claude.ai` and `github.io`), so they keep separate data. Pick one and stick with it.

## What about a Play Store app?

Not from here. Producing a `.apk` needs the Android SDK, and putting it on the Play Store needs a signing key, a developer account and a review. Neither is something I can do for you.

The honest comparison: an installed PWA matches a native app for everything this plan needs — offline, home screen, full screen, local storage. The one real gap is **background notifications**, which need a push server. That gap is why the calendar file exists.

## Files

| Path | What it is |
|---|---|
| `docs/index.html` | The app, built and self-contained |
| `docs/manifest.webmanifest` | Makes it installable |
| `docs/sw.js` | Offline caching |
| `docs/icon-*.png` | Launcher icons |
| `app/data.js` | All plan content — menus, recipes, training, gut protocol |
| `app/shell.html` | App template with a `/*__DATA__*/` marker |
| `app/build.js` | Inlines data into the template |
| `app/gen-ics.js` | Builds the calendar file |
| `app/icons.js` | Generates the PNG icons |
| `eight-week-kitchen.ics` | The calendar, 80 entries |

Rebuild after editing anything in `app/`:

```bash
node app/build.js        # -> eight-week-app.html
node app/gen-ics.js 2026-08-16   # -> eight-week-kitchen.ics
```

`docs/index.html` is `eight-week-app.html` wrapped in a full HTML document with the manifest and service-worker registration added.
