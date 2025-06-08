# 🛍️ Regal - Advanced Online Store

Regal is an e-commerce website built with **Next.js**, **TypeScript**, **ShadCN**, **Tailwind CSS**, and **Sqlite**. The project follows the **MVC** architecture and provides a robust solution for managing complex server-side structure.

---

## ✨ Key Features

- 🏗️ **MVC Architecture in Next.js**: The entire project is modular and well-organized.  
- ⚡ **Backend Focused**: A simple structure for the server side that avoids creating hundreds of unnecessary folders.  
- 🔀 **Smart Routing**: All pages are routed to `app/[...slug]`, where the appropriate controller is determined.  
- 🔧 **Modular Controllers**: All controllers are stored in the `controllers` folder, supporting middleware usage.  
- 🌀 **autoload.ts**: A system for managing and defining routes automatically and flexibly.  
- 🚀 **Alternative Loading Methods**: Instead of separate files like `loading.tsx`, you can use a loading function within `Suspense` or similar components.

---

## 📚 Project Structure

1. **`app` folder**:  
   - All pages route to `app/[...slug]`.  
   - Handles requests and dispatches them to the appropriate controller.  

2. **`controllers` folder**:  
   - Contains various controllers managing server-side logic.  
   - Supports defining middleware per controller.  

3. **`autoload.ts` file**:  
   - Manages all routes in a single object.  
   - Categorizes routes by controller for easier management.

---

## 📋 Important Notes

- 📂 Solves the common issue in large Next.js projects with numerous routes; instead of creating hundreds of folders, it uses a simple and practical structure.  
- 🔗 **Example routing**:  
  - The request `/products/categories` is routed to the `products` controller and its `categories` method.  
- 🛠️ Supports alternative ways to handle loading pages. Next.js documentation is available for guidance.

---

## 🏃‍♂️ Quick Start

To run the project, execute the following command in your terminal:

```bash
npm run dev