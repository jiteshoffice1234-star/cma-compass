# Privacy Policy

**Last updated:** July 19, 2026

## Overview

CMA Compass is a self-study Android application for CMA exam preparation. It does **not** collect, store, or transmit any personal user data to any server. All user data resides exclusively on your device.

## Data Storage

| Data | Where it's stored | Purpose |
|---|---|---|
| Progress (watched videos, quiz scores, XP) | Local SQLite database via `@capacitor-community/sqlite` | Track study progress across sessions |
| Bookmarks | Same local SQLite database | Remember which chapters you bookmarked |
| Preferences (selected level) | Same local SQLite database | Show the correct syllabus |
| OTA update version | Android `SharedPreferences` | Know which OTA bundle to load after update |

All of this data is stored **only on your device**. It is never sent to any server, analytics service, or third party.

## Network Requests

CMA Compass makes the following network requests:

### 1. GitHub API (update checks)

When the app launches, it fetches `https://api.github.com/repos/jiteshoffice1234-star/cma-compass/releases/latest` to check for new versions. This request includes your IP address (standard for any HTTP request) but no device identifiers, cookies, or personal data. The response is used only to compare version numbers.

### 2. YouTube embeds

Video lectures are embedded from YouTube via `<iframe>`. YouTube may set cookies and collect data in accordance with [Google's Privacy Policy](https://policies.google.com/privacy). This only occurs when you view the video player on a chapter screen — no data is sent to YouTube on app launch or while browsing other screens.

### 3. GitHub Release downloads

When you update via APK or OTA, the app downloads the asset from `github.com`. Same as above — your IP is visible but no personal data is transmitted.

## No Third-Party Services

CMA Compass does **not** integrate with:
- Analytics SDKs (Google Analytics, Firebase, etc.)
- Advertising SDKs
- Crash reporting tools
- Push notification services
- Social media SDKs
- Any third-party tracking

## Data Deletion

Since all data is stored locally, deleting the app or clearing its storage removes all data. There are no server-side records to delete.

## Children's Privacy

CMA Compass does not collect any data from any user, including children under 13.

## Changes

If this policy changes, the "Last updated" date at the top will be revised.

## Contact

For questions, open an issue at: https://github.com/jiteshoffice1234-star/cma-compass/issues
