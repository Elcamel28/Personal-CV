import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // ✅ Validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }



   
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // ✅ Parse JSON first
      })
      .then(data => {
        if (data.message) {
          alert(`Success: ${data.message}`); // ✅ Show server message
        } else {
          alert("Unexpected error occurred.");
          console.warn("Unexpected error occurred:", data);
        }
      })
      .catch(error => {
        alert("Failed to send message. Please try again later."); // ✅ Handle network errors
        console.error("Error submitting form:", error);
      });
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

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;