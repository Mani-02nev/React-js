
# 📅 Daily Report – React Calculator Project

## 📌 Project Title
**Purple Theme Calculator (React)**

---
s
## 📝 Summary of the Day

Today, I designed and developed a **React-based calculator application** with a **fully responsive purple-themed UI**.  
The focus was on **UI layout, styling, and component structure**, ensuring a clean and professional appearance.

Key highlights:
- Calculator is **center-aligned** using Flexbox
- A **dynamic footer section** (“About Calculator”) is fixed at the bottom of the page
- Implemented a **modern purple gradient theme**
- Used **React state (`useState`)** to manage user input
- Buttons dynamically update the display based on user interaction

This task helped strengthen my understanding of **React component structure**, **state-driven UI updates**, and **CSS Flexbox layout techniques**.

---

## 🧠 Algorithm – Calculator Logic

### Step 1: Initialize State
- Create a state variable to store the calculator input
- Initial value is an empty string

---

### Step 2: Handle Number Input
- When a number button is clicked:
  - Append the number to the existing input
  - Update the display automatically via state

---

### Step 3: Handle Operator Input
- When an operator (`+ - * /`) is clicked:
  - Append the operator symbol to the input
  - Ensure it appears correctly in sequence

---

### Step 4: Handle Clear Action
- When the **Clear** button is clicked:
  - Reset the input state to empty
  - Clear the display

---

### Step 5: Handle Calculation
- When the **Equal (=)** button is clicked:
  - Evaluate the full expression stored in input
  - Convert the result into a string
  - Update the display with the result

---

### Step 6: Layout Management
- Use a column-based Flexbox layout:
  - Calculator remains centered
  - Footer stays at the bottom using `margin-top: auto`

---

## ✅ Outcome
- Functional calculator UI
- Responsive and clean design
- Improved understanding of React + CSS layout patterns

---

## 🚀 Next Improvements
- Remove `eval()` and implement manual calculation logic
- Add keyboard input support
- Introduce theme switch (Dark / Purple)
- Improve error handling for invalid expressions
