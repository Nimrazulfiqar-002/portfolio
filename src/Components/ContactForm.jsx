import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset(); // clear form
          setLoading(false);
        },
        (error) => {
          alert("Failed ❌ " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-white p-6 rounded-lg shadow-sm space-y-4"
    >
      <div>
        <label className="text-sm text-gray-700">Your Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="border rounded-md px-3 py-2 w-full"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="text-sm text-gray-700">Message</label>
        <textarea
          name="message"
          required
          className="border rounded-md px-3 py-2 w-full h-28"
          placeholder="Type your message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white w-full hover:bg-indigo-500 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}