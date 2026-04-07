# FSD-2

Practice repository for Full Stack Development exercises.

## Overview

This repository is organized chapter-wise and module-wise. It contains:

- JavaScript practice files
- HTML practice pages
- Text-based question sets and notes
- Small JSON/text examples

Most files are standalone exercises and can be run independently.

## Repository Structure

```text
FSD-2/
├── ch2/
│   ├── Module 1/
│   │   ├── 1.html, 1.js, 1.json, 3.js, 4.js
│   │   └── Questions/
│   │       ├── q1.js ... q16.js
│   │       ├── q3.html, q7.html, q8.html, q9.html, q10.html
│   │       └── supporting .txt files
│   ├── Module 2/
│   │   ├── 5.js
│   │   └── Question/
│   │       ├── q1.js
│   │       └── LJ/temp.txt
│   └── Module 3/
│       ├── 6.js
│       └── question/
│           ├── q1.js ... q4.js
│           └── abc.txt
└── ch3/
    ├── url module/
    │   ├── 7.js
    │   └── Question/q1.js
    └── http module/
        ├── 8.js
        └── Questions/
            ├── q1.js, q2.js
            └── exam.txt
```

## Prerequisites

- Node.js (recommended: v18 or later)
- A modern web browser (for `.html` files)

Check your Node version:

```bash
node -v
```

## How to Run

### Run a JavaScript file

From repository root:

```bash
node "ch2/Module 1/Questions/q1.js"
```

Use the same pattern for any `.js` file.

### Open an HTML file

Open directly in a browser, for example:

- `ch2/Module 1/1.html`
- `ch2/Module 1/Questions/q3.html`

In VS Code, you can also use Live Server if installed.

## Notes

- Folder names and some files use spaces and mixed casing; keep exact paths while running commands.
- Exercises are intended for learning and may include alternate solutions across files.

## Suggested Workflow

1. Pick one module and solve files in order.
2. Run each JavaScript solution using Node.
3. Verify HTML outputs in browser.
4. Keep your own notes or answers in separate files if needed.