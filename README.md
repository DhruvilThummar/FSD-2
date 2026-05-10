# FSD-2: Full Stack Development Learning Repository

> A comprehensive practice repository covering Node.js fundamentals and Express.js development with hands-on exercises and solutions.

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)
![Chapters](https://img.shields.io/badge/Chapters-6-blue)
![Type](https://img.shields.io/badge/Type-Learning%20Materials-brightgreen)

## 📚 Overview

This repository is organized into **two main learning phases**:

### **Phase 1: Node.js Fundamentals (Chapters 2-3)**
Master the core concepts of Node.js before moving to web frameworks:
- 📦 JavaScript modules and CommonJS patterns
- 🌐 HTTP servers and client-server communication
- 🔗 URL parsing and query string handling

### **Phase 2: Express.js Development (Chapters 4-6)**
Build complete full-stack web applications:
- 🛣️ Express routing, middleware, and request handling
- 🍪 Session management and Cookie handling
- 📄 EJS templating for dynamic HTML rendering
- 📤 File uploads with Multer
- 📧 Email functionality with Node Mailer

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

## 🚀 Quick Start

### Verify Installation
```bash
node -v    # Check Node.js version (v18+)
npm -v     # Check npm version
```

### Run Your First Exercise
```bash
# Node.js example
node "Ch 2/Module 1/1.js"

# Express.js example
cd "Ch 4"
npm install
npm start
```

### View HTML Exercises
Open in your browser or use Live Server:
- `Ch 2/Module 1/1.html`
- `Ch 5/question/q1/Express/html/1.html`
- `Ch 6/Multer/index.html`

## 📋 Prerequisites

- **Node.js** v18 or later ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)

## ⚙️ Setup & Installation

### Clone the Repository
```bash
git clone https://github.com/DhruvilThummar/FSD-2.git
cd FSD-2
```

### Install Dependencies for Chapters

**Chapter 4:** Express Basics
```bash
cd "Ch 4"
npm install
```

**Chapter 5:** Express Advanced (with Sessions & Cookies)
```bash
cd "Ch 5"
npm install
# or for specific projects
cd "Ch 5/Express/Backend"
npm install
```

**Chapter 6:** Templates & Utilities
```bash
cd "Ch 6"
npm install
```

## 🎯 How to Run

### Run JavaScript Files

From repository root, use exact paths with quotes:

```bash
# Chapter 2 - JavaScript Modules
node "Ch 2/Module 1/1.js"

# Chapter 3 - Node.js Core Modules
node "Ch 3/http module/8.js"
node "Ch 3/url module/7.js"

# Chapter 4 - Express Basics
node "Ch 4/1.js"
```

### Run Express Servers

```bash
# Chapter 5 - Express Advanced
cd "Ch 5/Express/Backend"
npm install
npm start

# Chapter 6 - Templates & Utilities
cd "Ch 6"
npm install
node app.js
```

### View HTML & Frontend Files

**Option 1: Open directly in browser**
- Simply double-click the `.html` file or drag it to your browser

**Option 2: Use VS Code Live Server**
1. Install [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click any `.html` file → "Open with Live Server"

**Common HTML Files:**
- `Ch 2/Module 1/1.html`
- `Ch 5/question/q1/Express/html/1.html`
- `Ch 5/question/q4/answer/calc.html`
- `Ch 6/EJS/q1/answer/form.ejs` (requires server)
- `Ch 6/Multer/index.html`

## 📖 Chapter Overview

### **Node.js Part**

| Chapter | Topic | Key Skills | Examples |
|---------|-------|-----------|----------|
| **Ch 2** | JavaScript Modules | CommonJS, require, exports | Module patterns, dependencies |
| **Ch 3** | Node.js Core | HTTP servers, URL parsing | Building servers, query handling |

### **Express.js Part**

| Chapter | Topic | Key Skills | What You'll Build |
|---------|-------|-----------|-------------------|
| **Ch 4** | Express Basics | Routing, middleware | REST endpoints, request handling |
| **Ch 5** | Express Advanced | Sessions, cookies, auth | User authentication, login systems |
| **Ch 6** | Templates & Utilities | EJS, file uploads, email | Dynamic pages, file handling, emails |

## 🎓 Learning Outcomes

By completing this course, you will understand:

### **Node.js & Server-Side JavaScript**
- ✅ Module system and package management
- ✅ Event-driven, non-blocking I/O
- ✅ Building HTTP servers from scratch
- ✅ Working with streams and file systems

### **Express.js & Web Development**
- ✅ RESTful API design and routing
- ✅ Middleware architecture and authentication
- ✅ Session and cookie management
- ✅ Template engines for dynamic HTML
- ✅ File uploads and email integration

## 📝 Working with Questions

Each question folder contains:

```
question-folder/
├── q#.md             ← Read this for problem statement & requirements
├── answer/           ← Solution implementation
│   ├── 1.js          ← JavaScript/Express server code
│   ├── index.html    ← Frontend (if applicable)
│   └── package.json  ← Dependencies
└── (optional) supporting files
```

**How to use:**
1. Read `q#.md` to understand the requirements
2. Attempt solving on your own
3. Compare with `answer/` folder
4. Run `npm install && npm start` in answer/ folder if it's an Express project

## 🔍 File Organization Guide

| File Type | Purpose | Location |
|-----------|---------|----------|
| `.js` | JavaScript executable code | Throughout chapters |
| `.html` | Frontend markup | Frontend folders, questions |
| `.css` | Styling | Express Frontend folders |
| `.ejs` | Express templates | Ch 6 EJS folder |
| `.md` | Documentation & instructions | Question folders |
| `package.json` | Dependencies & scripts | Ch 4, 5, 6 roots |
| `package-lock.json` | Locked dependency versions | Ch 4, 5, 6 roots |

## ✅ Important Notes

- 📌 **File paths use spaces and mixed casing** — Always use quotes: `node "Ch 2/Module 1/1.js"`
- 📌 **Each question is self-contained** — Can be completed independently
- 📌 **Check `answer/` folders for reference** — Study solutions after attempting
- 📌 **node_modules artifacts** — Some folders have copies; these are development artifacts
- 📌 **Dependencies listed in `.md` files** — Check documentation for required packages

## 🛠️ Troubleshooting

### Common Issues

**Issue:** `Cannot find module 'express'`
```bash
# Solution: Install dependencies
npm install
```

**Issue:** `Port already in use`
```bash
# Change port in code or kill existing process:
# Linux/Mac: lsof -ti:3000 | xargs kill -9
# Windows: netstat -ano | findstr :3000
```

**Issue:** `HTML file not rendering`
```bash
# Solution: Use Live Server instead of opening directly
# vs code extension: ritwickdey.LiveServer
```

**Issue:** `CORS errors**
```bash
# Solution: Check Express CORS middleware setup in answer files
```

**Issue:** `Ports 3000/5000 not accessible**
```bash
# Verify server is running and port is configured correctly
node "path/to/server.js"
```

## Suggested Learning Path

### **Phase 1: Node.js Fundamentals (3-4 days)**
1. **Ch 2**: JavaScript modules and CommonJS
   - [ ] Complete all 3 modules
   - [ ] Practice require/exports patterns
   
2. **Ch 3**: Node.js core modules
   - [ ] Build HTTP servers
   - [ ] URL parsing exercises

### **Phase 2: Express.js Development (4-5 days)**
3. **Ch 4**: Express basics and middleware
   - [ ] Master routing
   - [ ] Understand middleware flow
   
4. **Ch 5**: Authentication and sessions
   - [ ] Implement login systems
   - [ ] Work with cookies
   
5. **Ch 6**: Templates and utilities
   - [ ] EJS templating
   - [ ] File uploads and email

## 💡 Tips for Success

- **Read markdown files first** — Each question `.md` contains detailed requirements
- **Compare with solutions** — Study the `answer/` folder to see best practices
- **Run code frequently** — Don't just read; execute and experiment
- **Modify examples** — Try changing values to understand how things work
- **Console.log everything** — Debug by logging intermediate values
- **Check package.json** — Understand dependencies and available scripts
- **Use browser DevTools** — Inspect requests/responses for HTML exercises
- **Ask why, not just how** — Understand concepts, not just syntax

## 📚 Additional Resources

### Official Documentation
- [Node.js Docs](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [EJS Templating](https://ejs.co/)
- [Multer](https://github.com/expressjs/multer)
- [Node Mailer](https://nodemailer.com/)

### Debugging Tools
- Chrome DevTools: `node --inspect "file.js"` → `chrome://inspect`
- Node.js REPL: `node` → Interactive mode
- VS Code Debugger: Built-in debugging

### Practice Platforms
- [FreeCodeCamp Node.js](https://www.freecodecamp.org/)
- [Node University](https://node.university/)
- [Scrimba Web Dev](https://scrimba.com/)

## 📧 Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Review `answer/` folders for reference implementations
3. Check `.md` files for detailed instructions
4. Verify Node.js and npm versions match prerequisites

## 📄 Tips

- Read the `.md` files in question folders for detailed instructions
- Check `answer/` directories for working solutions
- Use `package.json` to understand dependencies and available scripts
- Test HTML files in a browser to see frontend rendering
- Use Node.js debugging: `node --inspect "file.js"` then open `chrome://inspect`