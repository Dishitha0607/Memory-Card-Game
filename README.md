# 🧠 Memory Card Game (React)

A fun and interactive **Memory Matching Game** built using **React + Vite**. Flip cards, match pairs, and test your memory skills!

---

## 🚀 Features

* 🎴 Flip cards with smooth UI
* 🔀 Random card shuffling every game
* 🧩 Match logic with score tracking
* 📊 Move counter
* 🔒 Prevents rapid clicks during evaluation
* 🎉 Win message when all cards are matched
* ♻️ Reset / Restart game anytime

---

## 🛠️ Tech Stack

* React (Functional Components + Hooks)
* Vite (Fast development build tool)
* CSS (Custom styling)

---

## 📁 Project Structure

```
memory-cards/
│
├── public/
├── src/
│   ├── assets/          # Images & icons
│   ├── components/      # UI Components
│   │   ├── Card.jsx
│   │   ├── GameHeader.jsx
│   │   └── WinMessage.jsx
│   ├── hooks/           # Custom logic
│   │   └── useGameLogic.js
│   ├── App.jsx          # Main component
│   ├── index.css        # Styles
│   └── main.jsx         # Entry point
│
├── package.json
└── README.md
```

---

## 🧠 How the Game Works

1. Cards are **shuffled randomly** at the start.
2. Player clicks a card → it flips.
3. Player selects a second card:

   * ✅ If both match → they stay flipped
   * ❌ If not → they flip back after a short delay
4. Moves are counted for every attempt.
5. Game ends when all pairs are matched.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/memory-cards.git
cd memory-cards
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## 🎮 Controls

* Click on any card to flip it
* Match all pairs to win
* Use **Reset** button to restart the game

---

## 🖼️ Screenshot of the Game
![image alt] {https://github.com/Dishitha0607/Memory-Card-Game/blob/fcf8a3dfc86d8c80636a0e7ce92469ada4a3ef29/Screenshot%202026-04-08%20192727.png}
---

## 📌 Future Improvements

* ⏱️ Timer feature
* 🏆 High score system
* 🎚️ Difficulty levels (easy/medium/hard)

---

## 🙌 Acknowledgements

Built as a learning project to practice:

* React Hooks
* State management
* Component structure
* Game logic implementation

---

## 📄 License

This project is open-source and free to use.

---

## 💡 Author

Made with ❤️ by Dishitha 😄
Feel free to improve and expand it!
