# 📰 Global News Times Web - Client-Driven Full-Stack News Portal

A modern, fast, and fully responsive News Portal application engineered around an asynchronous **Client-Side RESTful API Architecture** using **Next.js** and styled beautifully with **Tailwind CSS**. The app delivers fluid reading flows, client-side data orchestration, and secured multi-provider social authentication.

---

## ✨ Core Features

- **Asynchronous RESTful Architecture:** Core feeds and specific article blocks are completely rendered on the client side by consuming RESTful API endpoints.
- **State-Driven UI States:** Features explicit client-side hooks to handle ongoing API transactions, rendering elegant loading spinners and empty/error states fallback cleanly.
- **Secure Authentication System:** Fully integrated authentication workflow supporting both credential forms (Email & Password) and Social OAuth tokens (Google and GitHub logins) using Better Auth.
- **Dynamic Category Mapping:** Interactive left-sidebar navigation tracking chosen categories through client parameters and applying instant active CSS states.
- **Uncompromised Media Presentation:** Responsive full-face image components that protect the aspect ratio of breaking news graphics across multi-resolution viewpoints.

---

## 🛠️ Project Tech Stack

- **Framework Layout:** Next.js (Client Component Driven)
- **Styling Architecture:** Tailwind CSS
- **Data Lifecycle:** Client-side Fetching API & React Lifecycle Hooks
- **Forms Handling:** React Hook Form
- **Authentication Providers:** Better Auth Platform (Credentials + Google/GitHub Providers)
- **Icons Library:** React Icons

---

## 📂 Key Client Modules

- `src/app/mynews/[id]/page.js` - Client-side state handler rendering arrays from dynamic category queries.
- `src/app/news/[id]/page.js` - Dedicated component pulling individual news records via REST API routes.
- `src/component/homepage/news/Leftnews.jsx` - Interactive sidebar category selection module.
- `src/component/homepage/news/Rightside.jsx` - Responsive social auth login component.

---

## 🚀 Installation & Local Execution

Setup the project ecosystem inside your local machine using these sequential instructions:

### 1. Clone Source Repository
```bash
git clone [https://github.com/Sagor8187/Global-Times-news-web-use-next.git](https://github.com/Sagor8187/Global-Times-news-web-use-next.git)
cd Global-Times-news-web-use-next
