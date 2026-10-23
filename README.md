# Stepora Admin

This is a standalone copy of the Stepora admin frontend. It can be moved to its
own GitHub repository and hosted on a separate domain such as `admin.example.com`.
It continues to use the existing Nexora API, so dashboard data and changes
(including announcements, Runner rules, grants, and withdrawal reviews) use the same backend
and Firestore database as `/admin`.

Administrators can edit the user-facing announcement from the **Announcement**
item in the admin navigation. Its title, subtitle, body, and optional image path
are saved through the Nexora API and displayed in the main app.

## Configure the API

Copy `.env.example` to `.env.production` and set `VITE_API_BASE_URL` to the
origin that serves the existing API routes. Do not append `/api`; the frontend
already requests `/api/admin/...`.

```dotenv
VITE_API_BASE_URL=https://api.example.com
```

The API must remain deployed and reachable from the admin host. Its CORS policy
must allow the admin domain. The current Nexora API permits cross-origin admin
requests. If that policy is restricted later, add the exact admin origin to the
API's allowed origins.

## Run locally

From this directory:

```sh
npm install
npm run dev
```

The Vite development server proxies `/api` to `http://localhost:5000` when
`VITE_API_BASE_URL` is unset. Start the existing Nexora API on port 5000 as
well.

## Build and deploy

```sh
npm run build
```

Deploy the generated `dist/` directory to the static host for the admin
subdomain, configure its SPA fallback to serve `index.html`, and set
`VITE_API_BASE_URL` before building. These are public frontend settings only;
never put API credentials, Firebase service accounts, or admin secrets in this
folder's frontend environment.

## Keeping the admin copy current

`src/components/admin.tsx` is copied from the main Nexora frontend. Copy changes
to the main admin component into this file when updating either project. Keep
`src/services/announcement.ts` in sync with the backend's announcement contract
and default content. The API implementation and sensitive configuration remain
in the existing Nexora backend and are intentionally not duplicated here.
