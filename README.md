# 🏥 Room Monitor Dashboard

A responsive and interactive room monitoring dashboard built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**.  
It displays **VIP** and **Standard** room details along with patient status in a clean, modern interface.

---

## ✨ Features

- ✅ Responsive Grid layout for rooms (VIP & Standard)
- 🟢 **Status Badges** for each room:
  - ✅ Ready
  - ❌ Occupied
  - ⚠️ Needs Cleaning
- 🔍 Search by patient name, type, or room number
- 🧭 Filter rooms by status using **Tabs UI**
- 🪟 Modal with full room & patient details
- 🔔 Toast notifications on interactions
- ⚡ Smooth UX with hover effects, transitions, and accessibility (ESC to close modals)

---

## ⚙️ Technologies Used

- ⚛️ [Next.js](https://nextjs.org/) — React framework
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 🌬️ [Tailwind CSS](https://tailwindcss.com/)
- 💠 [Shadcn UI](https://ui.shadcn.com/)
- 🎯 [Axios](https://axios-http.com/) — data fetching
- 📦 [React Icons](https://react-icons.github.io/react-icons/)
- 🔔 [Sonner](https://sonner.toastui.com/) — toast notifications

---

## 🌐 Deployment
  [🔗 Live Preview](https://room-monitor-dashboard.vercel.app)


---
## 🛠️ Usage
Use the search bar to filter rooms by patient name, room type, or room number.

Use the Tabs to filter by room status (Ready, Occupied, Needs Cleaning).

Click any card to open detailed room info in a modal.

Press ESC or click close icon to dismiss modal.

---
## 🧱 Project Structure
```
/app or /pages      ➜  Next.js routing
/components         ➜  Reusable UI components (RoomCard, RoomModal, SearchFilter, etc.)
/public/data        ➜  Mock data (rooms.json)
/styles             ➜  Tailwind and global CSS

```
---

### Prerequisites

- Node.js v16+
- npm or yarn
 
## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/room-monitor-dashboard.git
cd room-monitor-dashboard
npm install
# or
yarn install

