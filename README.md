# Umbra Writer

## Introduction

Umbra Writer is a real-time web-based rich text editor that allows users to write, edit, and format documents. Built with modern technologies like **[Nuxt3](https://nuxt.com/)**, **[Vue.js](https://vuejs.org/)**, and **[TypeScript](https://www.typescriptlang.org/)** the app delivers fast and smooth performance. The demo can be viewed **[here](https://www.umbrawriter.com/)**.

## Tech Stack

#### Frontend Framework:

- **[Nuxt3](https://nuxt.com/)**: A framework based on **[Vue.js](https://vuejs.org/)** that offers server-side rendering (SSR) and static site generation (SSG), enhancing the application's performance and SEO capabilities.

#### Programming Language:

- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety and modern JavaScript features, providing better tooling and maintainability.

#### Database:

- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database, chosen for its scalability and flexibility in handling unstructured data such as rich text documents.

#### ORM (Object-Relational Mapping):

- **[Prisma](https://www.prisma.io/)**: Simplifies database access and ensures type-safe interactions between **[MongoDB](https://www.mongodb.com/)** and the application, making it easier to manage data models and migrations.

#### Authentication:

- **[NuxtAuth](https://auth.sidebase.io/)**: Provides a secure and modular authentication system, supporting various sign-in methods, including OAuth providers (e.g., Google, GitHub).

## Road Map

Umbra Writer is currently a work in progress. Below is a breakdown of the completed tasks and upcoming milestones. This roadmap outlines my current status and future objectives, reflecting my dedication to delivering a high-quality, feature-rich editor.

### **Completed**

#### Rich Text Editing Features:

- Support for basic formatting (bold, italics, lists, fonts).
- Text alignment (left, center, right) and heading levels (H1-H6).
- Code blocks, inline code, and quotes for structured content creation.

#### Authentication:

- User authentication implemented using **NuxtAuth**.
- Dedicated sign-in and sign-up pages.

#### Database and Storage:

- Integrated **Prisma** as the ORM.
- Configured **MongoDB** for document storage.

#### Core Features:

- Added **autosave functionality** to ensure users never lose progress.
- Developed a file manager interface for viewing, creating, renaming, and deleting documents.

---

### **In Progress**

#### Pages:

- **Landing page** for marketing and onboarding.
- **Account page** for user profile and account settings.
- **Settings page** to allow users to customize editor preferences.

#### Editor Enhancements:

- Adding functionality for creating new document pages.
- Implementing **syntax highlighting** for code blocks to enhance readability.
- Adding **custom directories** in the file manager for better document organization.

---

### **Upcoming Features**

#### Image and Document Support:

- Support for embedding images within documents.
- Adding **headers and footers** to documents for formal editing.
- Implementing features to **export and save documents locally** in various formats (PDF, Word, Markdown).

#### Collaboration Features:

- Real-time collaboration allowing multiple users to work on the same document simultaneously.

#### Version Control:

- Keep track of changes and revert to previous versions of a document.
