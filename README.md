# Password Generator (React + Tailwind)

A simple password generator built with **React Hooks** and styled using **Tailwind CSS**.  
It can generate passwords with:
- Letters (default)
- Optional Numbers
- Optional Symbols
- Custom Length (slider)

---

## Features
- ✅ Auto-generate password when settings change
- ✅ Length slider (min–max)
- ✅ Toggle Numbers / Symbols
- ✅ Copy-to-clipboard button
- ✅ Dark theme UI (Tailwind)

---

## Tech Stack
- React (useState, useEffect, useCallback)
- Tailwind CSS
- Vite (recommended)

---

## How It Works (Simple)
- `passwordGenerator()` creates a character string:
  - Always letters
  - Adds numbers if enabled
  - Adds symbols if enabled
- It picks random characters from that string based on `length`
- `setPassword(pass)` updates the UI
- `useEffect` runs the generator automatically whenever settings change

---

## Setup (Vite + React)

### 1) Create project
```bash
npm create vite@latest password-generator -- --template react
cd password-generator
npm install
