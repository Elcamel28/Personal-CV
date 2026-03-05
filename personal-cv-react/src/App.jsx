import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2023",
      program: "BS Information Technology",
      school: "University of Science and Technology of Southern Philippines"
    },
    {
      year: "2019",
      program: "Senior High School",
      school: "Cagayan de Oro Senior High School"
    },
    {
      year: "2022",
      program: "High School",
      school: "Cagayan de Oro Junior High School"
    },

    {
      year: "2017",
      program: "Elementary",
      school: "Taguanao Elementary School"
    },

    {
      year: "2010",
      program: "Kinder",
      school: "Taguanao Elementary School"
    },


  ];


  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">

      <div className={`toggle ${darkMode ? "dark" : ""}`}>
  <input
    type="checkbox"
    id="darkModeToggle"
    checked={darkMode}
    onChange={() => setDarkMode(!darkMode)}
  />
  <label htmlFor="darkModeToggle">
    <span className="button"></span>
    <span className="label">☼</span>
  </label>
</div>
        <main>
          <Header />
          <About />
          <Skills skills={skills} />
          <Education education={education} />
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