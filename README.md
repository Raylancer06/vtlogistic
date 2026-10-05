# VT Logistic Services - Corporate Web Portal

A high-performance, institutional web application for **VT Logistic Services**, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Inspired by modern enterprise logistics benchmarks ([LogiXpress](https://www.designesia.com/themes/logixpress/)).

---

## 🚀 Key Features

- **Institutional B2B Aesthetic**: Ultra-clean, high-contrast corporate design with smooth animations and high-resolution logistics photography.
- **Dual-Channel Dispatch Transmission**:
  - 🟢 **Direct WhatsApp Dispatch**: Pre-formats full vehicle, corridor, and client manifests to `+91 9053529200`.
  - ✉️ **Official Email Processing**: Dispatches structured HTML manifests and generates pre-filled notifications to `info@vtlogistic.in`.
- **Interactive Dispatch & Quote Configurator**: Live corridor swapping, vehicle type selection, SLA urgency tiers, and automated Reference ID generation (e.g., `VT-2026-XXXXXX`).
- **Client Partner Logo Scroller**: Infinite marquee with auto-pause on hover for institutional partners (Crown, Mahadhan, Linkit, Agrim, AgriOne, etc.).
- **Screened Driver Roster Deep Dive**: 10,000+ verified commercial drivers showcase with 4-tier audit benchmarks and compliance stats.
- **Headquarters Logistics Hub**: Strategic location showcase in Jhajjar, Haryana (124103) with KMP Expressway connectivity and one-click Google Maps integration.
- **Mobile-First Responsiveness**: Responsive sticky header, slide-out mobile menu, and responsive floating WhatsApp support widget.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Delivery**: Nodemailer (with SMTP support & mailto fallbacks)
- **Animation**: Tailwind CSS Transitions & Framer Motion

---

## 📁 Project Structure

```
├── public/
│   └── images/               # High-res brand logo & HD fleet imagery
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # Corporate profile & driver standards
│   │   ├── services/page.tsx # Full-spectrum mobility & use cases
│   │   ├── contact/page.tsx  # Central coordination desk & dual inquiry
│   │   └── api/
│   │       ├── dispatch/     # POST endpoint for vehicle requests
│   │       └── contact/      # POST endpoint for general inquiries
│   ├── components/
│   │   ├── Header.tsx        # Sticky frosted navbar with mobile drawer
│   │   ├── Footer.tsx        # Enterprise footer & direct hotline
│   │   ├── QuoteSection.tsx  # Interactive dispatch configurator
│   │   ├── LogoScroller.tsx  # Infinite partner marquee
│   │   ├── RequestVehicleModal.tsx # Global quote modal
│   │   └── FloatingWhatsApp.tsx    # Bottom-right chat widget
│   └── lib/
│       └── email.ts          # Email generator & SMTP transporter
```

---

## ⚙️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment (Optional for SMTP)

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build

```bash
npm run build
npm run start
```

---

## 🏢 Corporate Contact

- **Headquarters**: Jhajjar, Haryana – 124103, India
- **24/7 Hotline**: +91 9053529200
- **Official Email**: info@vtlogistic.in
- **WhatsApp**: +91 9053529200
