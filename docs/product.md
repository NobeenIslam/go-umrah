# Umrah Companion PWA Prototype

### TL;DR

A lightweight, offline-first Progressive Web App to guide Umrah pilgrims with concise information and customizable checklists. The prototype focuses on Makkah and Medina content (Meeqat, Ihraam, Umrah Guide; Masjid An-Nabawi, Rawdah, Al-Baqee, etc.) and a Ziyarah checklist. Target users are Umrah pilgrims who need quick, reliable, and accessible guidance without requiring internet or accounts.

---

## Goals

### Business Goals

- Ship a functional PWA prototype within 2 days (Extra-small project).

- Demonstrate offline reliability: ≥95% of key screens load without network after first visit.

- Achieve installability on modern mobile browsers (manifest + service worker passing Lighthouse PWA checks ≥90).

- Validate core value: ≥60% of test users create at least 1 custom checklist item during pilot.

- Collect qualitative feedback from 5–10 pilgrims to inform iteration (no in-app analytics; use interviews).

### User Goals

- Quickly access essential Umrah guidance for Makkah and Medina, even without internet.

- Create and manage a personal checklist, including custom items, to stay organized.

- Navigate clearly labeled tabs and sub-pages with minimal cognitive load.

- Trust that data is private and stays on their device (no account needed).

- Install the app to home screen for fast access during travel.

### Non-Goals

- No user accounts, authentication, or cloud sync in this prototype.

- No real-time updates, bookings, or integrations (e.g., Rawdah reservation system).

- No multi-language support at launch (English-only for prototype).

---

## User Stories

Persona: Umrah Pilgrim (first-time, returning, or family organizer)

- As a pilgrim, I want to install the app to my home screen, so that I can access guidance quickly during travel.

- As a first-time pilgrim, I want a simple Umrah Guide, so that I can follow the steps confidently.

- As a returning pilgrim, I want to add custom checklist items, so that I can tailor preparation to my preferences.

- As a pilgrim in Medina, I want to learn about Masjid An-Nabawi and Rawdah basics, so that I can observe proper etiquette.

- As a pilgrim in Makkah, I want information about Meeqat and Ihraam, so that I can enter the state of Ihram correctly.

- As a pilgrim with limited connectivity, I want the content to work offline, so that I’m not dependent on mobile data.

- As a family organizer, I want a shared-friendly checklist structure (even if not synced), so that others can follow along on my device.

- As a pilgrim, I want my data to remain private on my device, so that I feel safe adding personal notes.

---

## User Experience

A detailed, first-time-to-advanced journey:

**Entry Point & First-Time User Experience**

- User opens the app via a shared link or QR code in their mobile browser.

- App immediately lands on the Home screen with all main tabs visible—no onboarding or install prompts.

- User can optionally install the PWA to their device for a full app-like experience (standard PWA install banner appears as per browser behavior).



## Narrative

Aisha is preparing for her first Umrah. She worries about remembering the steps and wants to be respectful in both Makkah and Medina. A friend shares a link to Umrah Companion. She opens it on her phone and adds it to her home screen.

On the flight, with spotty internet, she opens the app. The pages she visited earlier load instantly. In Makkah, she reads the brief guides on Meeqat and Ihraam, then opens the Umrah Guide to review the sequence before beginning. In Medina, she taps into Masjid An-Nabawi, finds the etiquette highlights, and skims the basics of Giving Salawaat and Rawdah. The content is concise and easy to scan in crowded spaces.

Aisha uses the Checklist to track essentials. She checks off preset Ziyarah items and adds custom tasks like “Refill zamzam bottle” and “Call family before Rawdah.” Everything saves locally, without accounts or data costs. Even when she loses connection, her checklist and previously viewed pages are available.

By the end of her journey, Aisha feels calm and prepared. The app’s offline-first design and simple structure help her focus on worship, while the clear interface reduces stress. For the project, the prototype proves that an elegant, private, offline PWA can deliver real value quickly, laying the foundation for future features like multi-language support and reminders.

### Install Requirements

- The app will be a basic web page with PWA manifest and service worker, enabling installation on supported devices and opening in standalone mode like a native app.

### Integration Points

- None required for prototype. No third-party SDKs or analytics.

- Optional (future): i18n libraries; push/notifications; content CMS.

### Data Storage & Privacy

- All user data stored locally on the device (no server or account).

- Provide a “Clear data” option and explain implications.

- No collection of personal data; comply with platform policies for PWAs.

- Content accuracy disclaimer and religious sensitivity note.

### Scalability & Performance

- Offline-first reduces server load; prototype intended for small pilot.

- Optimize assets for low bandwidth: image compression, lazy loading if needed.

- Performance budget: JS bundle <150KB gzipped for prototype; CSS <50KB.

### Potential Challenges

- iOS PWA quirks: Storage quotas, service worker lifecycle differences, missing push APIs.

- First-visit offline: Cannot cache until one successful online load; provide graceful messaging.

- Data persistence: Risk of storage eviction under low-space conditions; document recovery guidance.

- Content updates: SW update flow must avoid stale content confusion; provide update banner.

- Accessibility compliance: Ensure labels, contrast, and focus states are correct from the start.

---

## Milestones & Sequencing

A lean, two-day solo build plan focused on MVP value:

### Project Estimate

- Extra-small: 1–2 days (target: 2 days)

### Team Size & Composition

- Extra-small: 1 person (you) handling Product, Design, and Engineering.

### Suggested Phases

**Phase 1: Foundations & IA (Half Day)**

- Key Deliverables: App scaffold with tabs (Makkah, Medina, Checklist, About/Learn); routing and base styles.

- Dependencies: App name, icons, color palette.

**Phase 2: Checklist MVP (Half Day)**

- Key Deliverables: Preset Ziyarah checklist (Makkah/Medina), add/edit/delete/reorder custom items, local persistence (IndexedDB).

- Dependencies: Data schema finalized.

**Phase 3: Content Placeholders (Half Day)**

- Key Deliverables: Populate Makkah sub-pages (Meeqat, Ihraam, Umrah Guide) and Medina sub-pages (Masjid An-Nabawi, Giving Salawaat, Rawdah, Al-Baqee Cemetery, Recommended Acts of Worship) with concise placeholder content and etiquette callouts.

- Dependencies: Content outline.

**Phase 4: PWA & Offline (Half Day)**

- Key Deliverables: Manifest, icons, service worker (cache-first), offline fallback, install prompt, Lighthouse pass ≥90.

- Dependencies: Asset generation (icons/splash).

**Phase 5: Polish & QA (Half Day)**

- Key Deliverables: Accessibility pass (labels, contrast), empty/error states, iOS/Android browser testing, performance tweaks, “Clear data” control, update banner messaging.

- Dependencies: Test devices/browsers.

**Phase 6: Pilot Prep (Remaining Time)**

- Key Deliverables: Short usage guide, feedback form link (external), distribution link/QR.

- Dependencies: Hosting and URL ready.
