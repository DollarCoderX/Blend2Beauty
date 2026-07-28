# How to Host Blend2Beauty on Vercel

This project is ready to deploy on Vercel in under 5 minutes.

---

## Step-by-Step Guide

### 1. Push to GitHub
If your project isn't on GitHub yet:
1. Go to [github.com/new](https://github.com/new) and create a new repository
2. In Replit, open the Shell tab and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/blend2beauty.git
   git push -u origin main
   ```

---

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up / log in (free)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository

---

### 3. Configure Build Settings
On the import screen, Vercel will auto-detect settings from `vercel.json`.

**If you need to set them manually:**

| Setting | Value |
|---|---|
| Framework Preset | **Other** |
| Build Command | `pnpm --filter @workspace/blend2beauty run build` |
| Output Directory | `artifacts/blend2beauty/dist/public` |
| Install Command | `npm install -g pnpm && pnpm install` |

---

### 4. Deploy
Click **"Deploy"** — Vercel builds and publishes your site.

You'll get a live URL like:  
`https://blend2beauty.vercel.app`

---

### 5. Add a Custom Domain (optional)
1. In your Vercel dashboard, open the project
2. Go to **Settings → Domains**
3. Add your domain (e.g. `blend2beauty.com`)
4. Update your domain's DNS records as instructed

---

## Updating the Site

Every time you push to GitHub, Vercel automatically rebuilds and redeploys. No manual steps needed.

---

## Replacing the Sample Videos

The video section currently uses free open-source sample videos. To swap in your real clips:

1. **Upload your videos** to any hosting service:
   - [Cloudinary](https://cloudinary.com) (free tier available — recommended)
   - Google Drive → Share → "Anyone with the link" → copy direct link
   - Your own server / CDN

2. **Open** `artifacts/blend2beauty/src/components/VideoSection.tsx`

3. **Find this block** near the top of the file:
   ```ts
   const videos = [
     {
       src: 'https://commondatastorage.googleapis.com/...',
       poster: posterImg1,
       title: 'Bridal Transformation',
       tag: 'Bridal',
     },
     ...
   ]
   ```

4. **Replace each `src`** with your video's direct `.mp4` URL

5. **Replace each `poster`** with a screenshot/thumbnail of your video:
   - Save the thumbnail image into `attached_assets/`
   - Import it at the top of the file: `import myPoster from '@assets/my-thumbnail.jpg'`
   - Set `poster: myPoster`

6. Save the file — the site updates instantly in preview.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails with "pnpm not found" | Vercel's install command sets it up. Try redeploying. |
| Blank white page | Make sure `outputDirectory` is set to `artifacts/blend2beauty/dist/public` |
| Page refreshes show 404 | The `rewrites` rule in `vercel.json` handles this. Make sure the file is at the repo root. |
| Videos don't load | Ensure video URLs end in `.mp4` and are publicly accessible (not behind login) |

---

Made by **Shapes Studio** · [hello.shapesstudio@proton.me](mailto:hello.shapesstudio@proton.me)
