# 🏥 Room Monitor Dashboard

A responsive and interactive room monitoring dashboard built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**.  
It displays **VIP** and **Standard** room details along with patient status in a clean, modern interface.

---

## ✨ Features

- ✅ Responsive Grid layout for rooms (VIP & Standard)
- 🟢 *Status Badges* for each room:
  - ✅ Ready
  - ❌ Occupied
  - ⚠ Needs Cleaning
- 🔍 **Search bar** with icon — filter by room number or status
- 🧭 **Tabs UI** for room filtering by type/status
- 🪟 **Modal** with full patient and room details
- 🎨 **Dark/Light mode toggle**
- ⏰ **Live Clock** in 24-hour format
- 🔁 **Scroll-To-Top** FAB for mobile users
- 🧠 **Status Summary** cards + Legend
- 🎨 Smooth UI with transitions & accessibility (ESC to close modals)

---

## ⚙️ Technologies Used

- ⚛️ [Next.js](https://nextjs.org/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 🌬️ [Tailwind CSS](https://tailwindcss.com/)
- 💠 [Shadcn UI](https://ui.shadcn.com/)
- 🎯 [Axios](https://axios-http.com/)
- 📦 [React Icons](https://react-icons.github.io/react-icons/)
- 🧩 [Lucide Icons](https://lucide.dev/) for icons

---

## 🌐 Deployment

🔗 [Live Preview](https://room-monitor-dashboard.vercel.app)

---

## 🛠️ Usage

- Use the search bar to filter rooms by **room number** or **status**
- Filter by **room type** and **status** using **tabs**
- Click any room card to open full details in a modal
- Press `ESC` or the close icon to dismiss the modal
- Toggle light/dark theme with the moon/sun icon
- Toasts appear on certain actions for UX feedback
- Floating button on mobile scrolls to the top

---
## 🧱 Project Structure
```
/app or /pages ➜ Next.js routing
/components ➜ Reusable UI (RoomCard, RoomModal, StatsSummary, etc.)
/components/ui ➜ Shadcn-generated components
/public/data ➜ Mock data (rooms.json)
/styles ➜ Tailwind & global styles

```
---


---

### 🧩 Prerequisites

- Node.js v16+
- npm or yarn

---

## 🚀 Getting Started

```bash
git clone https://github.com/AhmedNawar2003/Room-Monitor-Dashboard.git
cd Room-Monitor-Dashboard
npm install
npm run dev


