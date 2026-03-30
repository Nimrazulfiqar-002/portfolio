import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "CMS Dashboard",
    image: "/src/assets/Images/cms-1.PNG",
    github: "https://github.com/Nimrazulfiqar-002/CMS-Dashboard",
    live: "https://nimrazulfiqar-002.github.io/CMS-Dashboard/",
  },
  {
    title: "Cake Bliss",
    image: "/src/assets/Images/cakebliss.PNG",
    github: "https://github.com/Nimrazulfiqar-002/Bakery-website",
    live: "https://bakery-website-rho.vercel.app/",
  },
  {
    title: "Landing page",
    image: "/src/assets/Images/landing-page.PNG",
    github: "https://github.com/Nimrazulfiqar-002/landing-page",
  },
  {
    title: "Hair Care App",
    image: "/src/assets/Images/Hair-care.PNG",
    github: "https://github.com/Nimrazulfiqar-002/hair-care-app",
  },
  {
    title: "Login form",
    image: "/src/assets/Images/loginformreact.PNG",
    github: "https://github.com/Nimrazulfiqar-002/aesthetic-login-form-react.js",
  },
  {
    title: "Wana agency-hackton-project",
    image: "/src/assets/Images/wanna.PNG",
    github: "https://github.com/Nimrazulfiqar-002/hackton-project",
    live: "https://nimrazulfiqar-002.github.io/hackton-project/",
  },
  {
    title: "Card Component design",
    image: "/src/assets/Images/cardComp.png",
    github: "https://github.com/Nimrazulfiqar-002/react-practice",
  },
  {
    title: "Like And DisLike Component Design",
    image: "/src/assets/Images/likeDislikeComp.png",
    github: "https://github.com/Nimrazulfiqar-002/react-practice",
  },
];

export default function ProjectsGallery() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // 🔁 Auto Scroll
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;

        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  // ⬅➡ Buttons
  const scrollLeft = () => {
    stopAutoScroll();
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    stopAutoScroll();
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // 🖱 Drag Scroll
  const handleMouseDown = (e) => {
    stopAutoScroll();
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects Gallery
      </h2>

      <div className="relative">

        {/* ⬅ Left */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100 text-white p-3 rounded-full z-10 hover:bg-gray-200"
        >
          ◀
        </button>

        {/* ➡ Right */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 text-white p-3 rounded-full z-10 hover:bg-gray-200"
        >
          ▶
        </button>

        {/* 🧠 Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden px-10 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] p-2 bg-gray-200 rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            >
              <div className="h-48 w-full flex items-center justify-center bg-gray-300 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}