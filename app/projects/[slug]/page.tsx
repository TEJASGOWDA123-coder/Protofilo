import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Sparkles, Code2, Rocket } from "lucide-react";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
      <div className="px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mt-12 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-gradient">
                      {project.title}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((t, idx) => (
                      <FadeIn key={t} delayMs={idx * 100}>
                        <span
                          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 hover:shadow-lg"
                        >
                          <Tag className="h-3 w-3 group-hover:rotate-12 transition-transform" />
                          {t}
                        </span>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delayMs={300}>
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02]">
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center transform transition-transform group-hover:scale-110">
                        <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 animate-pulse">
                          <Rocket className="h-10 w-10" />
                        </div>
                        <p className="text-2xl font-bold">Project Preview</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-white/60 animate-pulse"></div>
                        <div className="h-2 w-2 rounded-full bg-white/40 animate-pulse delay-75"></div>
                        <div className="h-2 w-2 rounded-full bg-white/20 animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
                      Project Details
                    </h2>
                    <div className="space-y-4">
                      {project.details.map((d, idx) => (
                        <FadeIn key={idx} delayMs={400 + idx * 100}>
                          <div
                            className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:scale-[1.01]"
                          >
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Code2 className="h-3 w-3 text-white" />
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{d}</p>
                            </div>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delayMs={500}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Tag className="h-3 w-3 text-white" />
                    </div>
                    Project Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group">
                      <Calendar className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                        <p className="font-medium text-gray-900 dark:text-white">2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Tag className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                        <p className="font-medium text-gray-900 dark:text-white">Web Development</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <Github className="h-5 w-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Source</p>
                        <p className="font-medium text-gray-900 dark:text-white">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delayMs={600}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-2xl transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-6 w-6 animate-pulse" />
                    <h3 className="text-lg font-semibold">Want to see more?</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Check out my other projects or get in touch to discuss collaboration opportunities.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/#projects"
                      className="group block w-full text-center bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/30 transition-all hover:scale-105"
                    >
                      View All Projects
                    </Link>
                    <Link
                      href="#contact"
                      className="group block w-full text-center bg-white text-blue-600 rounded-xl px-4 py-3 hover:bg-gray-100 transition-all hover:scale-105 font-medium"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
