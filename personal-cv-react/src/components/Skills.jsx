import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card" id="skillsSection">
      <h2>Skills</h2>
      <button
  className="uiverse-button"
  onClick={() => setVisible(!visible)}
>
  {visible ? "Hide Skills" : "Show Skills"}
</button>

      <ul className={`skills-list ${visible ? "show" : "hide"}`}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;