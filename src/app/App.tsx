import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  Menu,
  X,
  Mail,
  Phone,
  Code2,
  Smartphone,
  Database,
  ChevronDown,
  Cpu,
  Globe,
  Shield,
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Github,
  Linkedin,
  Link,
} from "lucide-react";
import resumePdf from "@/imports/Sujal_Pardhi_Resume.pdf";
import androidCert from "@/imports/EDU Android Developers.jpeg";
import pythonCert from "@/imports/EDU Python.jpeg";
import reactNativeCert from "@/imports/EDU React Native Mobile.jpeg";
import webFullStackCert from "@/imports/EDU Web Full Stack.jpeg";

function downloadResume() {
  const a = document.createElement("a");
  a.href = resumePdf;
  a.download = "Sujal_Pardhi_Resume.pdf";
  a.click();
}

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(0,245,255,0.12) 0%, transparent 55%), #020817",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-x-0 h-px opacity-30"
        style={{
          top: "30%",
          background:
            "linear-gradient(90deg, transparent, #00f5ff, transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />
      <style>{`
        @keyframes scanline {
          0% { top: -2px; opacity: 0; }
          5% { opacity: 0.4; }
          95% { opacity: 0.2; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(2deg); }
          66% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0,245,255,0.3), 0 0 60px rgba(0,245,255,0.1); }
          50% { box-shadow: 0 0 40px rgba(0,245,255,0.6), 0 0 80px rgba(0,245,255,0.2); }
        }
        @keyframes rotate3d {
          0% { transform: perspective(800px) rotateY(0deg) rotateX(10deg); }
          100% { transform: perspective(800px) rotateY(360deg) rotateX(10deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .glow-cyan { text-shadow: 0 0 20px rgba(0,245,255,0.8), 0 0 40px rgba(0,245,255,0.4); }
        .glass-card {
          background: rgba(10, 20, 40, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,245,255,0.15);
        }
        .glass-card:hover {
          border-color: rgba(0,245,255,0.4);
          box-shadow: 0 0 30px rgba(0,245,255,0.1), inset 0 1px 0 rgba(0,245,255,0.1);
        }
        .skill-bar {
          background: linear-gradient(90deg, #00f5ff, #7c3aed);
          border-radius: 4px;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #00f5ff, #a855f7, #00f5ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .nav-blur {
          backdrop-filter: blur(20px);
          background: rgba(2, 8, 23, 0.9);
          border-bottom: 1px solid rgba(0,245,255,0.1);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #020817; }
        ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.3); border-radius: 2px; }
        .hex-icon {
          clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
        }
        .tilt-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tilt-card:hover {
          transform: perspective(800px) rotateX(-4deg) rotateY(4deg) scale(1.02);
        }
        section { scroll-margin-top: 80px; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-jetbrains { font-family: 'JetBrains Mono', monospace; }
      `}</style>
    </div>
  );
}

function Navbar({
  // onGoProjects,
  onGoHome,
  page,
}: {
  onGoProjects: () => void;
  onGoHome: () => void;
  page: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sections = [
    "About",
    "Education",
    "Projects",
    "Skills",
    "Certifications",
    "Contact",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (page !== "home") {
      onGoHome();
      setTimeout(
        () =>
          document
            .getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    } else
      document
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={onGoHome}
        >
          <div
            className="w-10 h-10 hex-icon flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff22, #7c3aed33)",
              border: "1.5px solid #00f5ff55",
            }}
          >
            <Briefcase size={16} className="text-[#00f5ff]" />
          </div>
          <span className="font-orbitron font-bold text-sm tracking-widest text-white hidden sm:block">
            SUJAL PARDHI
          </span>
        </div>

        {page === "home" ? (
          <div className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-sm font-rajdhani font-medium tracking-wider text-slate-400 hover:text-[#00f5ff] transition-colors relative group"
              >
                {s}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f5ff] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={onGoHome}
            className="hidden md:flex items-center gap-2 text-sm font-rajdhani font-medium tracking-wider text-slate-400 hover:text-[#00f5ff] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </button>
        )}

        <button
          onClick={downloadResume}
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-rajdhani font-semibold tracking-wider text-[#00f5ff] border border-[#00f5ff]/40 rounded hover:bg-[#00f5ff]/10 transition-all duration-300 hover:border-[#00f5ff]/80"
          style={{ boxShadow: "0 0 15px rgba(0,245,255,0.1)" }}
        >
          <Download size={14} />
          Resume
        </button>

        <button
          className="md:hidden text-[#00f5ff] p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden nav-blur px-6 pb-6 pt-2 flex flex-col gap-4">
          {page === "home" &&
            sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-left text-sm font-rajdhani font-medium tracking-wider text-slate-300 hover:text-[#00f5ff] transition-colors"
              >
                {s}
              </button>
            ))}
          {page !== "home" && (
            <button
              onClick={() => {
                onGoHome();
                setOpen(false);
              }}
              className="text-left text-sm font-rajdhani text-slate-300 hover:text-[#00f5ff] transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
          )}
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-4 py-2 text-sm font-rajdhani font-semibold text-[#00f5ff] border border-[#00f5ff]/40 rounded w-fit"
          >
            <Download size={14} />
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero({ onGoProjects }: { onGoProjects: () => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute right-8 top-1/4 hidden lg:block opacity-30">
        <div
          style={{
            width: 200,
            height: 200,
            animation: "rotate3d 20s linear infinite",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #00f5ff",
              borderRadius: "50%",
              boxShadow: "0 0 30px rgba(0,245,255,0.4)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "20px",
              border: "1px solid rgba(124,58,237,0.6)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "50px",
              background:
                "radial-gradient(circle, rgba(0,245,255,0.1), transparent)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <div
        className="absolute top-1/3 left-16 w-4 h-4 rounded-full opacity-60"
        style={{
          background: "#00f5ff",
          boxShadow: "0 0 20px #00f5ff",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full opacity-50"
        style={{
          background: "#7c3aed",
          boxShadow: "0 0 15px #7c3aed",
          animation: "float 8s ease-in-out infinite 2s",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
        >
          <Cpu size={14} className="text-[#00f5ff]" />
          <span className="text-xs font-jetbrains tracking-widest text-slate-400 uppercase">
            Android Developer · Flutter · Full Stack
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-rajdhani text-2xl md:text-3xl text-slate-400 tracking-wide mb-2"
        >
          Hello, I am
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-orbitron font-black mb-4 leading-none"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          <span className="shimmer-text">SUJAL</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-rajdhani text-xl md:text-s tracking-widest text-slate-400 uppercase mb-8"
        >
          Android Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-rajdhani text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Motivated student with a solid foundation in front-end
          development and UI design, building intuitive,
          user-friendly interfaces while expanding expertise in
          Android technologies, Flutter, and modern design
          principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={onGoProjects}
            className="flex items-center gap-2 px-8 py-3 font-rajdhani font-bold tracking-wider text-black rounded"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff, #06b6d4)",
              boxShadow: "0 0 30px rgba(0,245,255,0.4)",
            }}
          >
            <Globe size={16} />
            View Projects
          </button>
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-8 py-3 font-rajdhani font-bold tracking-wider text-[#00f5ff] border border-[#00f5ff]/50 rounded hover:bg-[#00f5ff]/10 transition-all"
          >
            <Download size={16} />
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs font-jetbrains tracking-widest">
              SCROLL
            </span>
            <ChevronDown size={16} className="animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { label: "Projects Built", value: "3+" },
    { label: "Tech Stacks", value: "8+" },
    { label: "Year Started", value: "2022" },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="01 // ABOUT" title="Who I Am" />
        <div className="grid md:grid-cols-5 gap-10 mt-14">
          <div className="md:col-span-2 flex flex-col items-center gap-6">
            <div
              className="relative w-48 h-48"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid #00f5ff",
                  boxShadow:
                    "0 0 30px rgba(0,245,255,0.4), inset 0 0 30px rgba(0,245,255,0.05)",
                  animation:
                    "pulse-glow 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute inset-3 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(0,245,255,0.2), rgba(124,58,237,0.3), rgba(2,8,23,0.9))",
                  border: "1px solid rgba(124,58,237,0.4)",
                }}
              >
                <span className="font-orbitron font-black text-4xl shimmer-text">
                  SP
                </span>
              </div>
              <div
                className="absolute w-3 h-3 rounded-full bg-[#00f5ff]"
                style={{
                  top: "10%",
                  right: "5%",
                  boxShadow: "0 0 10px #00f5ff",
                }}
              />
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-lg px-4 py-3 text-center tilt-card"
                >
                  <div className="font-orbitron font-bold text-xl text-[#00f5ff] glow-cyan">
                    {s.value}
                  </div>
                  <div className="text-xs font-jetbrains text-slate-500 mt-1 tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center gap-6">
            <p className="font-rajdhani text-lg text-slate-300 leading-relaxed">
              I am a motivated and enthusiastic student with a
              solid understanding of front-end development and
              UI design. My focus is on building intuitive,
              user-friendly interfaces while continuously
              expanding my knowledge in Android technologies and
              design principles.
            </p>
            <p className="font-rajdhani text-base text-slate-400 leading-relaxed">
              Committed to learning and growing in the tech
              field, I love turning ideas into functional mobile
              and web applications. Currently pursuing my B.Tech
              in Computer Science (AI &amp; ML), I bridge the
              gap between beautiful design and robust
              engineering.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="mailto:sujalpardhi2006@gmail.com"
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-jetbrains text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-all"
              >
                <Mail size={13} />
                sujalpardhi2006@gmail.com
              </a>
              <a
                href="tel:9699774716"
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-jetbrains text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-all"
              >
                <Phone size={13} />
                9699774716
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    {
      year: "2024 – Present",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (AI & ML)",
      institute: "P. R. Pote Patil COEM",
      status: "Ongoing",
      icon: <Cpu size={20} />,
    },
    {
      year: "2022 – 2024",
      degree: "12th — Science Stream",
      field: "Physics, Chemistry, Mathematics",
      institute: "L G Bhele Jr College",
      status: "Completed",
      icon: <Shield size={20} />,
    },
  ];

  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="02 // EDUCATION"
          title="Academic Journey"
        />
        <div className="mt-14 relative">
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #00f5ff, #7c3aed, transparent)",
            }}
          />
          <div className="flex flex-col gap-8">
            {edu.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="md:ml-20 relative"
              >
                <div
                  className="hidden md:flex absolute -left-[3.75rem] top-6 w-5 h-5 rounded-full items-center justify-center"
                  style={{
                    background: "#020817",
                    border: "2px solid #00f5ff",
                    boxShadow: "0 0 15px rgba(0,245,255,0.5)",
                  }}
                />
                <div className="glass-card rounded-xl p-6 tilt-card">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-[#00f5ff]"
                        style={{
                          background: "rgba(0,245,255,0.1)",
                          border:
                            "1px solid rgba(0,245,255,0.2)",
                        }}
                      >
                        {e.icon}
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-sm text-white">
                          {e.degree}
                        </h3>
                        <p className="text-xs font-jetbrains text-slate-400 mt-0.5">
                          {e.field}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-jetbrains px-3 py-1 rounded-full"
                      style={{
                        background:
                          e.status === "Ongoing"
                            ? "rgba(0,245,255,0.1)"
                            : "rgba(124,58,237,0.1)",
                        color:
                          e.status === "Ongoing"
                            ? "#00f5ff"
                            : "#a855f7",
                        border: `1px solid ${e.status === "Ongoing" ? "rgba(0,245,255,0.3)" : "rgba(124,58,237,0.3)"}`,
                      }}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="font-rajdhani font-semibold text-slate-300">
                    {e.institute}
                  </p>
                  <p className="text-xs font-jetbrains text-slate-500 mt-1">
                    {e.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projectsData = [
  {
    num: "01",
    title: "Blood Donation & Donor Matching",
    status: "Ongoing",
    desc: "Flutter-based mobile application for connecting blood donors and recipients. Implements blood compatibility matching algorithms and location-based donor search with real-time notifications.",
    stack: ["Flutter", "Node.js", "MongoDB"],
    icon: <Smartphone size={28} />,
    color: "#00f5ff",
    details:
      "This application bridges the critical gap between blood donors and recipients by providing real-time matching based on blood type compatibility and geographic proximity. Features include donor registration, live location sharing, push notifications for urgent requests, and a hospital-side dashboard for managing blood bank inventory.",
    github: "https://github.com/SujalPardhi",
    demo: "",
  },
  {
    num: "02",
    title: "ShoeZone E-Commerce Platform",
    status: "Completed",
    desc: "Full-featured online shopping platform for footwear with authentication, product catalog, cart management, and order processing. Delivers a seamless mobile shopping experience.",
    stack: ["Flutter", "Node.js", "MongoDB"],
    icon: <Globe size={28} />,
    color: "#7c3aed",
    details:
      "ShoeZone delivers a polished mobile shopping experience for footwear. Includes JWT-based authentication, a filterable product catalog, persistent cart, order history, and an admin panel for inventory management. The UI uses Flutter animations for smooth page transitions and product browsing.",
    github: "https://github.com/sujalpardhi2006",
    demo: "",
  },
  {
    num: "03",
    title: "Digital Feedback System",
    status: "Completed",
    desc: "Web-based feedback management system for college students featuring secure submission, analytics dashboard for admins, and comprehensive feedback analysis tools.",
    stack: ["React.js", "Node.js", "MongoDB", "HTML/CSS"],
    icon: <Database size={28} />,
    color: "#06b6d4",
    details:
      "A full-stack web platform that digitizes the college feedback process. Students submit structured feedback anonymously or under their student ID. Admins see real-time analytics — helping faculty act on student insights quickly and transparently.",
    github: "https://github.com/sujalpardhi2006",
    demo: "",
  },
  {
    num: "04",
    title: "Blogs WebApp",
    status: "Completed",
    desc: "Web-based feedback management system for college students featuring secure submission, analytics dashboard for admins, and comprehensive feedback analysis tools.",
    stack: ["Node.js", "MongoDB", "HTML/CSS","EJS"],
    icon: <Database size={28} />,
    color: "#06b6d4",
    details:
      "Built while learning backend development, this full-stack web application uses **Node.js, Express.js, EJS, and MongoDB**. It features user registration, secure authentication, login, personalized profiles, and CRUD-based blog publishing.",
    github: "https://github.com/sujalpardhi2006",
    demo: "",
  },
  
];

const certificationsData = [
  {
    num: "01",
    title: "Android Developer",
    issuer: "Google",
    date: "2025",
    desc: "Comprehensive Android development course covering Kotlin, Android Studio, and building native Android applications.",
    credential: "Android Development Fundamentals",
    icon: <Smartphone size={28} />,
    color: "#00f5ff",
    details: "Mastered Android development including Kotlin programming, Android Studio, activity lifecycle, UI components, data persistence with Room, and network operations. Built multiple native Android applications during the course.",
    image: androidCert,
  },
  {
    num: "02",
    title: "Python Programming",
    issuer: "Eduskills",
    date: "2025",
    desc: "Python programming fundamentals including data structures, algorithms, and object-oriented programming.",
    credential: "Python Programming Course",
    icon: <Database size={28} />,
    color: "#7c3aed",
    details: "Learned Python programming from basics to advanced concepts including data structures, file handling, web scraping, and database operations. Developed multiple Python projects to reinforce learning.",
    image: pythonCert,
  },
  {
    num: "03",
    title: "React Native Mobile",
    issuer: "Eduskills",
    date: "2026",
    desc: "React Native development for building cross-platform mobile applications with JavaScript and React.",
    credential: "React Native Mobile Development",
    icon: <Globe size={28} />,
    color: "#06b6d4",
    details: "Mastered React Native framework for building iOS and Android applications. Covered components, navigation, state management, API integration, and publishing to app stores.",
    image: reactNativeCert,
  },
  {
    num: "04",
    title: "Web Full Stack",
    issuer: "Eduskills",
    date: "2025",
    desc: "Full-stack web development covering HTML, CSS, JavaScript, Node.js, and database management.",
    credential: "Full Stack Web Development",
    icon: <Code2 size={28} />,
    color: "#a855f7",
    details: "Comprehensive full-stack development course covering front-end technologies (HTML, CSS, JavaScript, React) and back-end technologies (Node.js, Express, MongoDB). Built complete web applications from scratch.",
    image: webFullStackCert,
  },
];

function ProjectCard({
  p,
  i,
}: {
  p: (typeof projectsData)[0];
  i: number;
}) {
  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      className="glass-card rounded-xl p-6 tilt-card flex flex-col gap-4 group"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${p.color}22, transparent)`,
            border: `1px solid ${p.color}44`,
            color: p.color,
          }}
        >
          {p.icon}
        </div>
        <span
          className="text-xs font-jetbrains px-2.5 py-1 rounded-full"
          style={{
            background:
              p.status === "Ongoing"
                ? "rgba(0,245,255,0.1)"
                : "rgba(124,58,237,0.1)",
            color:
              p.status === "Ongoing" ? "#00f5ff" : "#a855f7",
            border: `1px solid ${p.status === "Ongoing" ? "rgba(0,245,255,0.25)" : "rgba(124,58,237,0.25)"}`,
          }}
        >
          {p.status}
        </span>
      </div>

      <div
        className="font-orbitron text-xs tracking-widest"
        style={{ color: `${p.color}66` }}
      >
        PROJECT {p.num}
      </div>

      <h3 className="font-orbitron font-bold text-base text-white leading-snug group-hover:text-[#00f5ff] transition-colors">
        {p.title}
      </h3>

      <p className="font-rajdhani text-sm text-slate-400 leading-relaxed flex-1">
        {p.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-[#00f5ff]/10">
        {p.stack.map((t) => (
          <span
            key={t}
            className="text-xs font-jetbrains px-2 py-0.5 rounded"
            style={{
              background: "rgba(0,245,255,0.05)",
              color: "#94a3b8",
              border: "1px solid rgba(0,245,255,0.1)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({
  c,
  i,
}: {
  c: (typeof certificationsData)[0];
  i: number;
}) {
  const [loading, setLoading] = useState(false);

  const handleViewCredential = () => {
    setLoading(true);
    setTimeout(() => {
      window.open(c.image, '_blank');
      setLoading(false);
    }, 2500);
  };

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      className="glass-card rounded-xl p-6 tilt-card flex flex-col gap-4 group"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${c.color}22, transparent)`,
            border: `1px solid ${c.color}44`,
            color: c.color,
          }}
        >
          {c.icon}
        </div>
        <span
          className="text-xs font-jetbrains px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(0,245,255,0.1)",
            color: "#00f5ff",
            border: "1px solid rgba(0,245,255,0.25)",
          }}
        >
          {c.date}
        </span>
      </div>

      <div
        className="font-orbitron text-xs tracking-widest"
        style={{ color: `${c.color}66` }}
      >
        CERTIFICATE {c.num}
      </div>

      <h3 className="font-orbitron font-bold text-base text-white leading-snug group-hover:text-[#00f5ff] transition-colors">
        {c.title}
      </h3>

      <p className="font-rajdhani text-sm text-slate-400 leading-relaxed flex-1">
        {c.desc}
      </p>

      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#00f5ff]/10">
        <span className="text-xs font-jetbrains text-slate-500">
          Issued by:
        </span>
        <span className="text-xs font-rajdhani font-semibold text-slate-300">
          {c.issuer}
        </span>
      </div>

      <button
        onClick={handleViewCredential}
        disabled={loading}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-3 text-xs font-jetbrains tracking-wider rounded border transition-all hover:bg-[#00f5ff]/10 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ color: "#00f5ff", borderColor: "rgba(0,245,255,0.3)" }}
      >
        {loading ? (
          <>
            <span className="animate-spin">⟳</span>
            Loading...
          </>
        ) : (
          <>
            <ExternalLink size={13} />
            View Credential
          </>
        )}
      </button>
    </motion.div>
  );
}

function ProjectsPreview({
  onGoProjects,
}: {
  onGoProjects: () => void;
}) {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <SectionHeader
            label="03 // PROJECTS"
            title="Projects"
          />
          <button
            onClick={onGoProjects}
            className="flex items-center gap-2 px-5 py-2.5 font-rajdhani font-bold tracking-wider text-[#00f5ff] border border-[#00f5ff]/40 rounded hover:bg-[#00f5ff]/10 transition-all text-sm"
          >
            <ExternalLink size={14} />
            View All Projects
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(0, 3).map((p, i) => (
            <ProjectCard key={i} p={p} i={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={onGoProjects}
            className="inline-flex items-center gap-2 px-8 py-3 font-rajdhani font-bold tracking-wider text-black rounded"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff, #7c3aed)",
              boxShadow: "0 0 30px rgba(0,245,255,0.3)",
            }}
          >
            <ExternalLink size={16} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-sm font-jetbrains text-slate-500 hover:text-[#00f5ff] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </button>
          <SectionHeader label="ALL PROJECTS" title="Things I've Built" />
          <p className="font-rajdhani text-slate-400 mt-4 mb-14 text-lg max-w-2xl">
            A complete look at everything I have built — mobile
            apps, web platforms, and tools that solve real
            problems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {projectsData.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 tilt-card"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${p.color}22, transparent)`,
                      border: `1px solid ${p.color}55`,
                      color: p.color,
                    }}
                  >
                    <div className="scale-150">{p.icon}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-orbitron text-xs tracking-widest"
                      style={{ color: `${p.color}88` }}
                    >
                      PROJECT {p.num}
                    </span>
                    <span
                      className="text-xs font-jetbrains px-2.5 py-1 rounded-full"
                      style={{
                        background:
                          p.status === "Ongoing"
                            ? "rgba(0,245,255,0.1)"
                            : "rgba(124,58,237,0.1)",
                        color:
                          p.status === "Ongoing"
                            ? "#00f5ff"
                            : "#a855f7",
                        border: `1px solid ${p.status === "Ongoing" ? "rgba(0,245,255,0.25)" : "rgba(124,58,237,0.25)"}`,
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h2 className="font-orbitron font-bold text-xl text-white">
                    {p.title}
                  </h2>
                  <p className="font-rajdhani text-slate-300 leading-relaxed text-base">
                    {p.details}
                  </p>
                  <div>
                    <p className="text-xs font-jetbrains text-slate-500 tracking-widest mb-2 uppercase">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-jetbrains px-3 py-1 rounded"
                          style={{
                            background: "rgba(0,245,255,0.07)",
                            color: "#94a3b8",
                            border: "1px solid rgba(0,245,255,0.15)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-jetbrains tracking-wider rounded border transition-all hover:bg-[#00f5ff]/10"
                      style={{ color: "#00f5ff", borderColor: "rgba(0,245,255,0.3)" }}
                    >
                      <Github size={13} />
                      View on GitHub
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-jetbrains tracking-wider rounded border transition-all hover:bg-[#7c3aed]/10"
                        style={{ color: "#a855f7", borderColor: "rgba(124,58,237,0.3)" }}
                      >
                        <Link size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationsPreview({
  onGoCertifications,
}: {
  onGoCertifications: () => void;
}) {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <SectionHeader
            label="05 // CERTIFICATIONS"
            title="Certifications"
          />
          <button
            onClick={onGoCertifications}
            className="flex items-center gap-2 px-5 py-2.5 font-rajdhani font-bold tracking-wider text-[#00f5ff] border border-[#00f5ff]/40 rounded hover:bg-[#00f5ff]/10 transition-all text-sm"
          >
            <ExternalLink size={14} />
            View All Certifications
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.slice(0, 3).map((c, i) => (
            <CertificationCard key={i} c={c} i={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={onGoCertifications}
            className="inline-flex items-center gap-2 px-8 py-3 font-rajdhani font-bold tracking-wider text-black rounded"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff, #7c3aed)",
              boxShadow: "0 0 30px rgba(0,245,255,0.3)",
            }}
          >
            <ExternalLink size={16} />
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
}

function CertificationsPage({ onGoHome }: { onGoHome: () => void }) {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});

  const handleViewCredential = (index: number, image: string) => {
    setLoadingStates(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      window.open(image, '_blank');
      setLoadingStates(prev => ({ ...prev, [index]: false }));
    }, 2500);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-sm font-jetbrains text-slate-500 hover:text-[#00f5ff] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </button>
          <SectionHeader label="ALL CERTIFICATIONS" title="My Certifications" />
          <p className="font-rajdhani text-slate-400 mt-4 mb-14 text-lg max-w-2xl">
            Professional certifications and courses I have completed to
            enhance my skills in mobile development, web development,
            and programming.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {certificationsData.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 tilt-card"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle, ${c.color}22, transparent)`,
                      border: `1px solid ${c.color}55`,
                      color: c.color,
                    }}
                  >
                    <div className="scale-150">{c.icon}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-orbitron text-xs tracking-widest"
                      style={{ color: `${c.color}88` }}
                    >
                      CERTIFICATE {c.num}
                    </span>
                    <span
                      className="text-xs font-jetbrains px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(0,245,255,0.1)",
                        color: "#00f5ff",
                        border: "1px solid rgba(0,245,255,0.25)",
                      }}
                    >
                      {c.date}
                    </span>
                  </div>
                  <h2 className="font-orbitron font-bold text-2xl text-white">
                    {c.title}
                  </h2>
                  <p className="font-rajdhani text-slate-300 leading-relaxed text-base">
                    {c.details}
                  </p>
                  <div>
                    <p className="text-xs font-jetbrains text-slate-500 tracking-widest mb-2 uppercase">
                      Credential
                    </p>
                    <p className="font-rajdhani font-semibold text-slate-200">
                      {c.credential}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs font-jetbrains text-slate-500">
                      Issued by:
                    </span>
                    <span className="text-xs font-rajdhani font-semibold text-slate-300">
                      {c.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => handleViewCredential(i, c.image)}
                      disabled={loadingStates[i]}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-jetbrains tracking-wider rounded border transition-all hover:bg-[#00f5ff]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ color: "#00f5ff", borderColor: "rgba(0,245,255,0.3)" }}
                    >
                      {loadingStates[i] ? (
                        <>
                          <span className="animate-spin">⟳</span>
                          Loading...
                        </>
                      ) : (
                        <>
                          <ExternalLink size={13} />
                          View Credential
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const categories = [
    {
      label: "Mobile & Frontend",
      icon: <Smartphone size={18} />,
      skills: [
        { name: "Flutter / Dart", level: 80 },
        { name: "Android Studio", level: 70 },
        { name: "React.js", level: 40 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      label: "Backend & Database",
      icon: <Database size={18} />,
      skills: [
        { name: "Node.js", level: 50 },
        { name: "MongoDB", level: 60 },
        { name: "Firebase", level: 65 },
        { name: "Express.js", level: 50 },
      ],
    },
    {
      label: "Languages & Tools",
      icon: <Code2 size={18} />,
      skills: [
        { name: "Core Java / OOP", level: 60 },
        { name: "Python", level: 70 },
        { name: "Git / GitHub", level: 80 },
        { name: "Figma / UI Design", level: 70 },
      ],
    },
  ];

  const badges = [
    "Flutter Development",
    "Android Studio",
    "React.js",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Python",
    "Core Java",
    "OOP",
    "C Language",
    "Git/GitHub",
    "Figma",
    "UI Design",
    "HTML",
    "CSS",
    "Excel",
    "Self Learner",
    "Version Control",
  ];

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="04 // SKILLS" title="Skills" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#00f5ff]"
                  style={{ background: "rgba(0,245,255,0.1)" }}
                >
                  {cat.icon}
                </div>
                <span className="font-orbitron text-xs font-bold tracking-widest text-slate-300 uppercase">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-rajdhani font-medium text-slate-300">
                        {s.name}
                      </span>
                      <span className="text-xs font-jetbrains text-[#00f5ff]">
                        {s.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <motion.div
                        className="skill-bar h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: ci * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {badges.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-3 py-1.5 text-xs font-jetbrains tracking-wider rounded-full cursor-default hover:border-[#00f5ff]/50 hover:text-[#00f5ff] transition-all"
              style={{
                background: "rgba(0,245,255,0.04)",
                border: "1px solid rgba(0,245,255,0.15)",
                color: "#64748b",
              }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    { icon: <Mail size={22} />, label: "Email", value: "sujalpardhi2006@gmail.com", href: "mailto:sujalpardhi2006@gmail.com" },
    { icon: <Phone size={22} />, label: "Phone", value: "+91 9699774716", href: "tel:9699774716" },
    { icon: <Github size={22} />, label: "GitHub", value: "https://github.com/SujalPardhi", href: "https://github.com/SujalPardhi" },
    { icon: <Linkedin size={22} />, label: "LinkedIn", value: "Sujal Pardhi", href: "https://www.linkedin.com/in/sujal-narendra-pardhi-632316338?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="06 // CONTACT"
          title="Get In Touch"
        />
        <div className="mt-14 text-center">
          <p className="font-rajdhani text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Currently open to internships, collaboration, and
            exciting projects. Feel free to reach out — I
            respond fast.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl px-8 py-6 flex flex-col items-center gap-3 tilt-card min-w-[200px]"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#00f5ff]"
                  style={{
                    background: "rgba(0,245,255,0.1)",
                    border: "1px solid rgba(0,245,255,0.3)",
                    boxShadow: "0 0 15px rgba(0,245,255,0.1)",
                  }}
                >
                  {c.icon}
                </div>
                <span className="text-xs font-jetbrains tracking-widest text-slate-500 uppercase">
                  {c.label}
                </span>
                <span className="font-rajdhani font-semibold text-slate-200 text-sm">
                  {c.value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="relative py-10 px-6 border-t"
      style={{ borderColor: "rgba(0,245,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 hex-icon flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #00f5ff22, #7c3aed33)",
              border: "1.5px solid #00f5ff55",
            }}
          >
            <Briefcase size={13} className="text-[#00f5ff]" />
          </div>
          <span className="font-orbitron text-xs font-bold tracking-widest text-slate-500">
            SUJAL N. PARDHI
          </span>
        </div>
        <p className="text-xs font-jetbrains text-slate-600 tracking-widest text-center">
          © 2026 SUJAL N. PARDHI | ANDROID DEVELOPER 
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:sujalpardhi2006@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#00f5ff] transition-colors">
            <Mail size={15} />
          </a>
          <a href="https://github.com/sujalpardhi2006" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#00f5ff] transition-colors">
            <Github size={15} />
          </a>
          <a href="https://www.linkedin.com/in/sujal-pardhi" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#00f5ff] transition-colors">
            <Linkedin size={15} />
          </a>
          <button onClick={downloadResume} className="flex items-center gap-1.5 text-xs font-jetbrains text-slate-600 hover:text-[#00f5ff] transition-colors tracking-wider">
            <Download size={13} />
            RESUME
          </button>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  label: _label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px" style={{ background: "#00f5ff" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 8px #00f5ff" }} />
      </div>
      <h2
        className="font-orbitron font-black text-white"
        style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<"home" | "projects" | "certifications">("home");

  const goProjects = () => {
    setPage("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goCertifications = () => {
    setPage("certifications");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#020817] font-rajdhani">
      <GridBackground />
      <Navbar
        onGoProjects={goProjects}
        onGoHome={goHome}
        page={page}
      />
      <main className="relative z-10">
        {page === "home" ? (
          <>
            <Hero onGoProjects={goProjects} />
            <About />
            <Education />
            <ProjectsPreview onGoProjects={goProjects} />
            <Skills />
            <CertificationsPreview onGoCertifications={goCertifications} />
            <Contact />
          </>
        ) : page === "projects" ? (
          <ProjectsPage onGoHome={goHome} />
        ) : (
          <CertificationsPage onGoHome={goHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}