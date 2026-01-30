## Date:29/1/2026
# 📅 Day03  Report – React Theme Toggle

## 📌 Topic
Global Light / Dark Theme Toggle using React

---

## 📝 Summary

Today, I implemented a **global theme toggle (Light / Dark mode)** in a React application.  
The theme state is managed using the `useState` hook and applied globally using `useEffect` by updating the `document.body` class.  
This approach ensures that the selected theme affects **all routes and components** in the application, including pages like Counter and Calculator.  
The solution is simple, scalable, and suitable for real-world React projects.

---

## ⚙️ Algorithm (Step-by-Step)

1. Initialize a state variable `dark` using `useState(false)` to track the theme.
2. Create a toggle button to switch between Light and Dark modes.
3. On button click, update the `dark` state using boolean negation.
4. Use `useEffect` to listen for changes in the `dark` state.
5. Inside `useEffect`, update `document.body.className` based on the current theme.
6. Define CSS styles for `.light` and `.dark` classes to change background and text colors.
7. Ensure the theme applies globally across all routes.

---

## 🧠 Key Learnings

- `useState` is used for theme state management.
- `useEffect` ensures DOM updates after state changes.
- Applying styles to `document.body` enables global theming.
- React Router pages automatically inherit global styles.

---

## ✅ Output

- Smooth Light / Dark mode switching
- Theme applied to entire application
- Clean and reusable implementation

---

