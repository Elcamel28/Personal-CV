import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
    } else {
      alert(`Thank you ${name}! Your message has been received.`);
    }
  }

  return (
    <section className="card">
      <h2>Contact Me Here</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br />

        <button type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;