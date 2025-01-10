import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      service_id: "service_blua7db", // استبدل بـ Service ID الخاص بك
      template_id: "template_zvo7ako", // استبدل بـ Template ID الخاص بك
      user_id: "727Ha6mati5KOOxwC", // استبدل بـ User ID الخاص بك
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };
    console.log(data)

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message: " + (error.response?.data?.message || error.message));
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", color: "white" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              background: "transparent",
              border: "1px solid #999",
              borderRadius: "14px",
              outline: "none",
              color: "white",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              background: "transparent",
              border: "1px solid #999",
              borderRadius: "14px",
              outline: "none",
              color: "white",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              background: "transparent",
              border: "1px solid #999",
              borderRadius: "14px",
              outline: "none",
              color: "white",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
