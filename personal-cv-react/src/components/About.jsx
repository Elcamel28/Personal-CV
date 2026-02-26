import profileImg from "../assets/profile.jpg"; // make sure this path is correct

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>

      {}
      <img
        src={profileImg}
        alt="Profile photo"
        width={200}
        height={165}
      />

      <p>
        I am a student in USTP (University of Science and Technology of Southern
        Philippines)
      </p>
      <p>
        Email:{" "}
        <a href="mailto:elcamel.ericjohn20@gmail.com">
          elcamel.ericjohn20@gmail.com
        </a>
        <br />
        GitHub:{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;