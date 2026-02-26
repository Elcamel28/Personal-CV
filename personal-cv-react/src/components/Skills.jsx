import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card" id="skillsSection">
      <h2>Skills</h2>
      <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>
      {visible && (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      )}
    </section>
  );
}

export default Skills;