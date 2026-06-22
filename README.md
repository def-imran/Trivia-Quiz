# Trivia Quiz WebApp

An interactive web application that displays trivia questions dynamically and evaluates user answers in real-time. This project serves as a major milestone and a comprehensive test combining the core concepts mastered in my previous three mini-projects.

---

### 🎯 Project Purpose

This project was built for my portfolio to integrate and test my knowledge from my previous three applications:
* **[Salary Calculator App](../Salary-calculator)** 
* **[Number Filter App](../Number-Filter)** 
* **[Random Generator App](../Random-Generator)** 

 I used AI and online resources strictly as learning tools to understand concepts, ask questions, and refine my logic—not to generate the code for me. I fully understand every line of code written in this repository.

---

### 🚀 JavaScript Features & Concepts Applied

Through this project, I successfully combined and applied the following Vanilla JavaScript techniques based on my project criteria:

* **The Randomizer Logic (Arrays & Math):** Stored the quiz questions inside an array of objects. Used `Math.random()` and `Math.floor()` combined with `.splice()` to select a random question and ensure no question appears twice during a round.
* **Array Iteration with forEach:** Used `.forEach()` loops to dynamically loop through the rendered buttons, both to attach event listeners to each answer option and to disable the remaining buttons once an answer is selected.
* **Scoreboard & Variable Management:** Kept track of live data using a local array (`rightAnswers`) that updates dynamically by pushing the correct answers when the user clicks the right button.
* **Argument Passing & Validation:** Passed the button element and the correct answer string as arguments into functions to dynamically check and color the selected button.
* **Event-Driven Programming:** Attached click event listeners via `addEventListener()` to handle user selections, trigger verification, and advance through the quiz.
* **DOM Manipulation & Dynamic UI:** Swapped entire views dynamically using `style.display` to transition smoothly from the quiz interface to the final scoreboard container without refreshing the page.

---

### 🛠️ Tech Stack

* **JavaScript** — Core quiz logic, score evaluation & state management
* **HTML5** — Semantic structure for the quiz screens
* **CSS3** — Custom styling for correct/incorrect visual feedback and layout

---

### 📄 License

This project is open-source and free to use for educational purposes.