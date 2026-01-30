## Date:30/1/2026
# 📅 Day 04 Report – React Digital Clock


## 📌 Topic

Real-Time Digital Clock using React Hooks

---

## 📝 Summary

Today, I developed a **real-time Digital Clock application** using React.
The clock displays the **current time and date**, updating automatically every second.
State management is handled using the `useState` hook, while continuous time updates are implemented safely using `useEffect` with `setInterval`.
Proper cleanup is performed to avoid memory leaks, making the solution **efficient, clean, and production-ready**.
The UI follows a **minimal Blue and Black theme**, suitable for professional dashboards and portfolios.

---

## ⚙️ Algorithm (Step-by-Step)

1. Initialize a state variable `time` using `useState(new Date())`.
2. Use the `useEffect` hook to start a `setInterval` that runs every second.
3. Inside the interval, update the `time` state with the current date and time.
4. Ensure cleanup by clearing the interval when the component unmounts.
5. Format the time using `toLocaleTimeString()`.
6. Display the current date using `toDateString()`.
7. Style the clock using a minimal Blue and Black UI for clarity and readability.

---

## 🧠 Key Learnings

* `useState` is used to store and update time values.
* `useEffect` is essential for handling side effects like intervals.
* Proper cleanup prevents performance issues and memory leaks.
* React components re-render automatically when state changes.
* Clean UI design improves usability and professionalism.

---

## ✅ Output

* Real-time digital clock updating every second
* Clean and minimal Blue + Black UI
* Safe interval handling with cleanup
* Reusable and scalable React component
