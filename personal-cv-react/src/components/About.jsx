import profileImg from "../assets/profile.jpg"; 
import Card from "./Card";

function About() {
  return (
    <Card title="About Me">
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
    </Card>
  );
}

export default About;