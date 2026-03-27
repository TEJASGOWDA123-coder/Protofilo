import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Database,
  Brain,
  Sparkles,
  Download,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/lib/projects";

const skills = [
  { name: "Java", icon: Code2, level: 90 },
  { name: "Python", icon: Code2, level: 85 },
  { name: "React", icon: Code2, level: 80 },
  { name: "TypeScript", icon: Code2, level: 75 },
  { name: "MySQL", icon: Database, level: 85 },
  { name: "Machine Learning", icon: Brain, level: 70 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
      <Navbar />

      <main>
        <section id="home" className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"></div>
          <div className="relative mx-auto w-full max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Available for freelance work
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                    Hi, I&apos;m <br />Tejas Gowda
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                    Full-stack developer passionate about building exceptional digital experiences with modern technologies.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
                  >
                    View My Work
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-gray-900 dark:text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  >
                    Get In Touch
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white dark:border-gray-900"></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">5.0 (24 reviews)</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delayMs={200} className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Stats</h3>
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">3+</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Section
          id="about"
          title="About Me"
          subtitle="Passionate developer creating innovative solutions"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I&apos;m a passionate full-stack developer with expertise in Java, Python, and modern web technologies. I love turning complex problems into elegant solutions and building applications that make a difference.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300">3+ years of development experience</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300">Specialized in Java and Machine Learning</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300">Passionate about clean code and best practices</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delayMs={200}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h3>
                <div className="space-y-4">
                  {[
                    "Full-stack web development",
                    "Machine learning solutions",
                    "Database design & optimization",
                    "API development & integration",
                    "Responsive UI/UX design",
                    "Performance optimization"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section
          id="skills"
          title="Technical Skills"
          subtitle="Technologies I work with daily"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <FadeIn key={skill.name} delayMs={idx * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Expertise Level</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Section>

        <Section
          id="projects"
          title="Featured Projects"
          subtitle="Recent work I'm proud of"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((p, idx) => (
              <FadeIn key={p.title} delayMs={idx * 100}>
                <Link href={`/projects/${p.slug}`} className="group block">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Sparkles className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-lg font-semibold">{p.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {p.title}
                        </h3>
                        <div className="flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                          <Sparkles className="h-3 w-3" />
                          Live
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Get In Touch"
          subtitle="Let's discuss your next project"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-blue-100 mb-6">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:tejasgowda943@gmail.com"
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    tejasgowda943@gmail.com
                  </a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delayMs={200}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
                <div className="grid gap-4">
                  <a
                    href="https://github.com/TEJASGOWDA123-coder"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Github className="h-6 w-6 text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Check out my repositories</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/tejas-gowda-a78771306/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Let's connect professionally</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="mx-auto px-4 py-12 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tejas Gowda</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full-stack developer passionate about creating exceptional digital experiences.</p>
                </div>
                <div className="text-right">
                  <a
                    href="#home"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Back to top
                    <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
                  </a>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  © {new Date().getFullYear()} Tejas Gowda. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
