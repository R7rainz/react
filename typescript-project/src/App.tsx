import { useState } from 'react'
import './App.css'
import words from "./wordList.json"
import { HangmanDrawing } from './components/hangManDrawing'
import { HangmanWord } from './components/hangManWord'
import { Keyboard } from './components/Keyboard'

function App() {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
    <HangmanDrawing numberOfGuesses={guessedLetters.length} />
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
    <Keyboard 
      activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inactiveLetters={guessedLetters.filter(letter => !wordToGuess.includes(letter))}
      addGuessedLetter={(letter: string) => setGuessedLetters(currentLetters => [...currentLetters, letter])}
    />
  </div>
}

export default App
