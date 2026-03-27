import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import TypingAnimation from "@/components/TypingAnimation";
import AnimatedProgress from "@/components/AnimatedProgress";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    Code2,
    Database,
    Brain,
    Layers,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const typingWords = [
    "Java Developer",
    "ML Enthusiast",
    "Full-Stack Builder",
    "Problem Solver",
];

const skills = [
    { label: "Java / Spring Boot", value: 88, color: "from-orange-500 to-red-500" },
    { label: "Python / Machine Learning", value: 82, color: "from-blue-500 to-cyan-500" },
    { label: "React / Next.js", value: 78, color: "from-purple-500 to-pink-500" },
    { label: "SQL / Databases", value: 80, color: "from-green-500 to-teal-500" },
    { label: "Docker / DevOps", value: 65, color: "from-sky-500 to-blue-600" },
];

const projects = [
    {
        title: "MedNex Enterprise HMS",
        description:
            "A full-featured Hospital Management System with role-based access control, appointment scheduling, lab management, and digital signatures.",
        tags: ["Next.js", "Spring Boot", "PostgreSQL", "JWT"],
        icon: <Layers className="h-6 w-6" />,
        gradient: "from-blue-600 to-purple-600",
    },
    {
        title: "Smart Appointment Slots",
        description:
            "Intelligent slot management preventing double-booking, featuring a visual time-slot picker and real-time availability updates.",
        tags: ["React", "Node.js", "MongoDB", "WebSocket"],
        icon: <Code2 className="h-6 w-6" />,
        gradient: "from-emerald-500 to-cyan-600",
    },
    {
        title: "ML Analytics Dashboard",
        description:
            "Interactive dashboard for visualising machine-learning model metrics, training curves, and dataset distributions.",
        tags: ["Python", "FastAPI", "Pandas", "Recharts"],
        icon: <Brain className="h-6 w-6" />,
        gradient: "from-violet-600 to-pink-600",
    },
    {
        title: "Portfolio Analytics",
        description:
            "Real-time visitor analytics for this portfolio, tracking page views, engagement, and interaction patterns without third-party cookies.",
        tags: ["Next.js", "Turso", "TypeScript", "Chart.js"],
        icon: <Database className="h-6 w-6" />,
        gradient: "from-amber-500 to-orange-600",
    },
];

const timelineItems = [
    {
        id: "bms",
        title: "B.E. Computer Science",
        company: "BMS College of Engineering",
        location: "Bengaluru, IN",
        period: "2021 – 2025",
        type: "education" as const,
        description: [
            "Specialised in Software Engineering and Artificial Intelligence.",
            "Final-year project: intelligent appointment slot management system.",
            "CGPA: 8.3 / 10",
        ],
    },
    {
        id: "internship",
        title: "Software Development Intern",
        company: "TechCorp Solutions",
        location: "Bengaluru, IN",
        period: "Jun – Sep 2024",
        type: "work" as const,
        description: [
            "Built REST APIs with Spring Boot and integrated them with a React frontend.",
            "Reduced average API response time by 30 % through query optimisation.",
            "Collaborated in an Agile team using Jira and GitHub Flow.",
        ],
    },
];

/* ─────────────────── PAGE ─────────────────── */

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* ── HERO ── */}
            <section
                id="home"
                className="relative overflow-hidden px-4 py-28 sm:px-6 sm:py-36"
            >
                {/* Background blobs */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="anim-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
                    <div className="anim-blob-slow absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/10" />
                </div>

                <div className="mx-auto w-full max-w-6xl">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                            Available for opportunities
                        </span>
                    </FadeIn>

                    <FadeIn delayMs={100}>
                        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
                            <span className="block text-gray-900 dark:text-white">
                                Hi, I&apos;m{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Tejas Gowda
                                </span>
                            </span>
                            <span className="mt-2 block text-3xl font-bold text-gray-600 dark:text-gray-400 md:text-4xl">
                                <TypingAnimation words={typingWords} />
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delayMs={200}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            I build robust backend systems with Java & Spring Boot and craft
                            intelligent ML solutions with Python. Passionate about clean
                            architecture, meaningful UX, and shipping things that actually
                            work.
                        </p>
                    </FadeIn>

                    <FadeIn delayMs={300}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            >
                                View My Work
                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <a
                                href="mailto:tejasgowda@example.com"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:scale-105 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delayMs={400}>
                        <div className="mt-8 flex items-center gap-4">
                            {[
                                { href: "https://github.com", icon: <Github className="h-5 w-5" />, label: "GitHub" },
                                { href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                                { href: "mailto:tejasgowda@example.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
                            ].map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:scale-110 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <Section
                id="projects"
                title="Featured Projects"
                subtitle="Things I've built — ranging from enterprise systems to ML-powered dashboards."
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project, i) => (
                        <FadeIn key={project.title} delayMs={i * 100}>
                            <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
                                <div
                                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                                >
                                    {project.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* ── SKILLS ── */}
            <Section
                id="skills"
                title="Skills & Expertise"
                subtitle="Technologies I work with regularly and continuously improve."
            >
                <div className="mx-auto max-w-2xl space-y-6">
                    {skills.map((skill, i) => (
                        <FadeIn key={skill.label} delayMs={i * 80}>
                            <AnimatedProgress
                                label={skill.label}
                                value={skill.value}
                                color={skill.color}
                                height={10}
                            />
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* ── EXPERIENCE / EDUCATION ── */}
            <Section
                id="experience"
                title="Experience & Education"
                subtitle="My journey so far — click any card to learn more."
            >
                <Timeline items={timelineItems} />
            </Section>

            {/* ── CONTACT ── */}
            <Section id="contact" title="Get In Touch" subtitle="I'd love to hear from you.">
                <FadeIn>
                    <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <ContactForm />
                    </div>
                </FadeIn>
            </Section>

            {/* ── FOOTER ── */}
            <footer className="border-t border-gray-200 bg-white/80 py-8 text-center dark:border-gray-800 dark:bg-gray-950/80">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Tejas Gowda · Built with Next.js &amp; ❤️
                </p>
            </footer>
        </div>
    );
}
