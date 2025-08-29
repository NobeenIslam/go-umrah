## Functional Requirements

Features grouped by product area and priority:

- PWA Shell & Offline (Priority: P0) -- Service Worker & Caching: Cache-first for static assets and content after first load; offline fallback page. -- Web App Manifest: App name, icons, theme color; installable across major browsers. -- Offline-first Routing: Ensure all primary pages are accessible without network after initial visit.

- Navigation & Information Architecture (Priority: P0) -- Tab Navigation: Bottom or top tabs (Makkah, Medina, Checklist, About/Learn). -- Sub-Pages (Makkah): Meeqat, Ihraam, Umrah Guide. -- Sub-Pages (Medina): Masjid An-Nabawi, Giving Salawaat, Rawdah, Al-Baqee Cemetery, Recommended Acts of Worship.

- Content Presentation (Priority: P0) -- Basic Content Placeholders: Concise sections with headings, short paragraphs, bullets. -- Reading UX: Scannable typography, consistent spacing, and in-page anchors for longer sections. -- Disclaimers: Non-juridical guidance disclaimer and respect/etiquette reminders.

- Checklist (Priority: P0) -- Preset Items: Ziyarah checklist for Makkah and Medina. -- Custom Items: Add, edit, reorder, and delete personal checklist items. -- State Management: Persist completion status and custom items locally (IndexedDB/Storage API). -- Category Filters: Toggle between Makkah and Medina checklist categories.

- Storage & Privacy (Priority: P0) -- Local-Only Storage: All data saved on-device (no server). -- Clear Data: Simple control to reset/clear all local data.

- Visual & Accessibility (Priority: P1) -- Aesthetic Direction: Clean, calm aesthetic inspired by “Life with Allah” (spacing, icons, color palette). -- Accessibility: High-contrast mode, larger tap targets, font size scaling, screen reader labels.

- Enhancements (Priority: P2, Future) -- Multi-language support (Arabic, Urdu, Bahasa, etc.). -- Basic search across content pages. -- Optional reminders (local notifications) for key tasks. -- Analytics events (post-prototype) for insights.

---

**Core Experience**

- Step 1: Explore Navigation
  - UI/UX: Clear tabs labeled Home Checklist, Makkah, Medina, About/Learn.

  - Placeholder screens just navigatable

- Step 2: View Makkah Content
  - User selects Makkah; sees sub-page list: Meeqat, Ihraam, Umrah Guide.

  - UI: Each sub-page shows headings, key points, and placeholders for tips.

  - Validation: If offline and not yet cached, display “Content will be available after first visit” notice.

- Step 3: View Medina Content
  - User selects Medina; sees Masjid An-Nabawi, Giving Salawaat, Rawdah, Al-Baqee, Recommended Acts.

  - UI: Scannable content blocks; etiquette highlights emphasized.

  - Next: Link to related pages (e.g., Rawdah etiquette from Masjid An-Nabawi).

- Step 4: Use the Checklist
  - User opens Checklist tab; toggles between Makkah and Medina categories.

  - Add Item: Taps “Add item,” enters text, optional category; validation prevents empty or 200+ chars.

  - Edit/Reorder: Long-press to reorder; tap to edit; confirm before delete.

  - Feedback: Subtle haptics (where supported) and toast to confirm actions.

  - Persistence: Changes saved instantly to local storage.

- Step 6: Install to Home Screen
  - User taps “Install app” in header menu; follows OS-native prompt.

  - Post-install: App launches in standalone mode with splash screen.

-
