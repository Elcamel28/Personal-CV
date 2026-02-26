import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container"> 
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode
        </button>

        <main>
          <Header />
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>

        <footer>
          <p>&copy; 2026 Eric John Elcamel. All rights reserved.</p>
        </footer>
      </div>

    </div>
  );
}

export default App;