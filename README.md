# FSD-2

Comprehensive Full Stack Development practice repository with exercises across Node.js, Express, and related technologies.

## Overview

This repository is divided into two main sections:

### **Part 1: Node.js Fundamentals (Ch 2-3)**
- JavaScript modules and practices
- Node.js core modules (HTTP, URL)
- Basic server-side concepts

### **Part 2: Express.js Development (Ch 4-6)**
- Express.js routing and middleware
- Session management and Cookies
- EJS templating engine
- File uploads (Multer)
- Email handling (Node Mailer)
- Full-stack web applications
- Q&A exercises with solutions

## Repository Structure

```text
FSD-2/
├── Ch 2/ - JavaScript Fundamentals & Modules
│   ├── Module 1/
│   │   ├── 1.html, 1.js, 1.json, 3.js, 4.js, c.txt
│   │   └── Questions/ (16 questions + supporting files)
│   ├── Module 2/
│   │   ├── 5.js
│   │   └── Question/ (q1.js + sub-folders)
│   └── Module 3/
│       ├── 6.js
│       └── question/ (q1.js - q4.js + abc.txt)
│
├── Ch 3/ - Node.js Core Modules
│   ├── http module/
│   │   ├── 8.js
│   │   └── Questions/ (q1.js, q2.js + exam.txt)
│   └── url module/
│       ├── 7.js
│       └── Question/ (q1.js)
│
├── Ch 4/ - Express Basics & Middleware
│   ├── 1.js, 2.js, package.json, query.js
│   ├── middleware/ (q1.js, q2.js)
│   └── question/ (q1.js - q5.js)
│
├── Ch 5/ - Express Advanced + Cookies/Session
│   ├── Express/
│   │   ├── Backend/ (1.js + package.json)
│   │   ├── Frontend/ (index.html + 1.css)
│   │   └── Folder Structures.md
│   │
│   ├── Cookies and Session/
│   │   ├── Cookies/ (cookie.js + q1/ with answer)
│   │   └── Session/ (session.js + q1 & q2 questions)
│   │
│   └── question/ (q1 - q7 with answers)
│       ├── q1 - q7 (each with q#.md + answer/ containing backend & frontend)
│
├── Ch 6/ - EJS Templates, Multer & Node Mailer
│   ├── EJS/ (ejs.md + q1 & Start folders)
│   │   ├── q1/ (q1.md + form.ejs, my.js, result.ejs)
│   │   └── Start/ (app.js + Views/first.ejs)
│   │
│   ├── Multer/ (index.html + m1.js + lju/)
│   │
│   └── Node mailer/ (mailer.js)
│
└── README.md
```

## Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)

Check your Node version:

```bash
node -v
npm -v
```

## Setup & Installation

1. Clone or navigate to the repository:
   ```bash
   cd FSD-2
   ```

2. Install dependencies (for chapters with `package.json`):
   ```bash
   cd "Ch 4"
   npm install
   ```

   Or for Express projects:
   ```bash
   cd "Ch 5/Express/Backend"
   npm install
   ```

## How to Run

### Run a JavaScript file
From repository root:

```bash
node "Ch 2/Module 1/1.js"
node "Ch 3/http module/8.js"
node "Ch 4/1.js"
```

### Run an Express server
Navigate to the relevant folder and start:

```bash
cd "Ch 5/Express/Backend"
npm install
npm start
# or
node 1.js
```

### Open an HTML file
- Open directly in a browser
- Or use VS Code's Live Server extension
- Examples:
  - `Ch 2/Module 1/1.html`
  - `Ch 5/question/q1/Express/html/1.html`
  - `Ch 6/Multer/index.html`

## Chapter Overview

### **Node.js Part**

| Chapter | Topic | Key Skills |
|---------|-------|-----------|
| **Ch 2** | JavaScript Modules | require, exports, module patterns |
| **Ch 3** | Node.js Core Modules | URL parsing, HTTP servers |

### **Express.js Part**

| Chapter | Topic | Key Skills |
|---------|-------|-----------|
| **Ch 4** | Express Basics | Routing, middleware, query handling |
| **Ch 5** | Express Advanced | Sessions, cookies, full-stack apps |
| **Ch 6** | Templates & Utilities | EJS rendering, file uploads (Multer), email (Mailer) |

## Important Notes

- File and folder names use spaces and mixed casing; use exact paths when running commands
- Wrap paths in quotes: `node "Ch 2/Module 1/1.js"`
- Each question folder typically contains a `.md` file describing the task and an `answer/` folder with the solution
- Some folders contain `node_modules` copies (e.g., Ch 5/question/q5/); these are development artifacts
- Exercises can be solved independently or in sequence

## Suggested Learning Path

### **Phase 1: Node.js Fundamentals**
1. **Ch 2**: Master JavaScript modules and fundamentals
2. **Ch 3**: Learn Node.js built-in modules (HTTP, URL)

### **Phase 2: Express.js Development**
3. **Ch 4**: Master Express.js routing and middleware
4. **Ch 5**: Build full-stack applications with sessions and cookies
5. **Ch 6**: Add templating (EJS), file uploads (Multer), and email functionality

## Tips

- Read the `.md` files in question folders for detailed instructions
- Check `answer/` directories for working solutions
- Use `package.json` to understand dependencies and available scripts
- Test HTML files in a browser to see frontend rendering
- Use Node.js debugging: `node --inspect "file.js"` then open `chrome://inspect`