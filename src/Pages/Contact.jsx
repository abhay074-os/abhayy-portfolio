import React, { useState } from "react";
import { supabase } from "../supabase";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error(error);
      setSuccess(false);
    } else {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-[#030014] text-white px-[5%] lg:px-[10%] py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:scale-105 transition-all duration-300 flex justify-center items-center gap-2"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success === true && (
            <p className="text-green-400 text-center">
              Message sent successfully!
            </p>
          )}

          {success === false && (
            <p className="text-red-400 text-center">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}