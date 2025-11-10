import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "JobEase – AI‑Powered Career Assistant",
    description:
      "Full‑stack AI career platform using Gemini AI for intelligent resume suggestions and job recommendations.",
    tags: ["React", "Node.js", "Tailwind", "Gemini AI"],
    link: "https://github.com/Nimrazulfiqar-002/job-ease-client",
  },
  {
    id: 2,
    title: "Cake Bakery Website",
    description:
      "Responsive bakery website built with React and Firebase for real‑time data storage and optimized UX.",
    tags: ["React", "Firebase", "Responsive"],
    link: "https://bakery-website-rho.vercel.app/",
  },
  {
    id: 3,
    title: "Hair Care App",
    description:
      "Detects hair issues and provides personalized product recommendations using React.js.",
    tags: ["React", "JavaScript"],
    link: "https://github.com/Nimrazulfiqar-002/hair-care-app",
  },
  {
    id: 4,
    title: "Food Delivery App (UI/UX Case Study)",
    description:
      "Figma case study designing intuitive food delivery flows for enhanced usability and hierarchy.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.behance.net/gallery/213580687/Food-Delivery-App-case-study-UIUX",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
            NZ
          </div>
          <div>
            <h1 className="text-lg font-semibold">Nimra Zulfiqar</h1>
            <p className="text-sm text-gray-600">Software Engineer </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
<a
  href="/public/Nimra_Zulfiqar.pdf"
  download="Nimra_Zulfiqar_Resume.pdf"
  className="ml-2 inline-flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
>
  Resume
</a>




        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 py-12">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm text-indigo-600 font-medium">Hello, I&apos;m</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">Nimra Zulfiqar</h2>
              <p className="mt-4 text-gray-700 max-w-xl">
                Passionate Software Engineer focused on Frontend side  crafting clean, interactive, and AI‑enhanced web interfaces using React.js and Tailwind CSS. I bring together strong problem‑solving, Agile collaboration, and UI/UX design skills.
              </p>

              <div className="mt-6 flex gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-0.5 transition">View Projects</a>
                <a href="#contact" className="inline-flex items-center gap-2 border px-4 py-3 rounded-lg hover:bg-gray-50 transition">Get in touch</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <motion.h3 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Featured Projects</motion.h3>
          <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={container} initial="hidden" animate="visible">
            {projects.map((p) => (
              <motion.article key={p.id} className="rounded-xl bg-white p-5 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1" variants={item} whileHover={{ scale: 1.02 }}>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-3 text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-700">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">View Project</a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-gradient-to-tr from-white to-gray-50 rounded-2xl p-8">
          <motion.h3 className="text-2xl font-bold mb-4" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>About Me</motion.h3>
          <motion.p className="text-gray-700" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.12 } }}>
            I am an independent and self‑motivated Software Engineer pursuing a BS in Software Engineering at Sindh Madressatul Islam University, Karachi. I specialize in building responsive, user‑centric web applications using React.js, JavaScript (ES6+), and Tailwind CSS. My focus is on scalable architecture, UI/UX design, and AI‑integrated solutions.
          </motion.p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <motion.h3 className="text-2xl font-bold" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Contact</motion.h3>
          <motion.p className="text-gray-600 mt-2 max-w-xl">Reach out for collaborations, freelance projects, or full‑time opportunities.</motion.p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <motion.form className="bg-white p-6 rounded-lg shadow-sm" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.08 } }} onSubmit={(e) => e.preventDefault()}>
              <label className="text-sm text-gray-700">Your Name</label>
              <input className="border rounded-md px-3 py-2 w-full" placeholder="Your name" />

              <label className="text-sm text-gray-700 mt-3">Email</label>
              <input className="border rounded-md px-3 py-2 w-full" placeholder="your@email.com" />

              <label className="text-sm text-gray-700 mt-3">Message</label>
              <textarea className="border rounded-md px-3 py-2 h-28 w-full" placeholder="Type your message..." />

              <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white w-full">Send Message</button>
            </motion.form>

            <motion.div className="p-6 rounded-lg bg-gradient-to-tr from-indigo-50 to-pink-50" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.12 } }}>
              <h4 className="font-semibold">Quick Info</h4>
              <p className="mt-2 text-sm text-gray-700">Karachi, Pakistan — nimrazulfiqar002@gmail.com</p>
              <p className="mt-2 text-sm text-gray-700">Phone: 0334‑3649032</p>
              
              <div className="mt-6">
                <h5 className="text-sm font-medium">Social Links</h5>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <a href="https://github.com/Nimrazulfiqar-002" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://www.behance.net/nimrazulfiqar4" target="_blank" rel="noreferrer">Behance</a>
                  <a href="https://www.linkedin.com/in/nimra-zulfiqar-062092272/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="mt-20 py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Nimra Zulfiqar — Built with React + Tailwind + Framer Motion</footer>
      </main>
    </div>
  );
}
