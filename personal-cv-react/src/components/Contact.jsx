import { useState } from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
    } else {
      alert(`Thank you, ${name}! Your message has been received.`);
    }
  };

  return (
    <section className="card">
      <h2>Contact Me Here</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>

        <br />

        <button type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;