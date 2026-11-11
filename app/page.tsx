import Image from "next/image";

const typingSpeed = 30;
const typingDuration = 170;
const sequenceGap = 90;
const welcomeStart = 850;

const techStack = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend Engineering",
    skills: ["React.js", "Next.js", "Vite", "Responsive Web Development"],
  },
  {
    category: "Backend Engineering",
    skills: [
      "Django",
      "REST APIs",
      "Backend Architecture",
      "Authentication & Authorization",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "AI Integration",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQLite", "Django ORM"],
  },
  {
    category: "Development & Infrastructure",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Cloudflare",
      "Render",
      "Cloudflare Workers",
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      "Full-Stack Development",
      "System Design",
      "Software Architecture",
      "API Integration",
      "Testing & Debugging",
      "Technical Team Leadership",
    ],
  },
];

const projects: {
  name: string;
  mark: string;
  image?: string;
  url?: string;
}[] = [
  { name: "Mama's Voice", mark: "MV" },
  {
    name: "Yupighana",
    mark: "YG",
    image: "/yupighana.png",
    url: "https://yupighana.com/",
  },
  {
    name: "Nexa AI",
    mark: "NA",
    image: "/nexa-ai.png",
    url: "https://nexastudio.free.nf/",
  },
];

function typingEnd(text: string, startDelay: number) {
  return startDelay + Math.max(0, Array.from(text).length - 1) * typingSpeed + typingDuration;
}

function renderTypingText(text: string, startDelay: number) {
  return Array.from(text, (character, index) => (
    <span
      className="typing-character"
      key={`${index}-${character}`}
      style={{ animationDelay: `${startDelay + index * typingSpeed}ms` }}
    >
      {character}
    </span>
  ));
}

function SocialIcon({ name }: { name: "GitHub" | "LinkedIn" | "Email" }) {
  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.7.38-1.2.69-1.47-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.14-3-.12-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.11 2.95.71.78 1.14 1.78 1.14 3.01 0 4.3-2.61 5.24-5.1 5.52.4.35.74 1.03.74 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "Email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm9 8.2L20.2 6H3.8l8.2 6.2Zm0 2.5L3 7.8V18h18V7.8l-9 6.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.05 10.8h-2.96v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.26V9h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.21Z" />
    </svg>
  );
}

export default function Home() {
  const welcome = "WELCOME TO MY PORTFOLIO";
  const greeting = "Hi, I'm";
  const name = "DANIEL CATO.";
  const role = "SOFTWARE DEVELOPER & AI DEVELOPER.";
  const introduction =
    "With 3 years of hands-on experience, I build modern web applications, intelligent AI-powered systems, and machine learning solutions that solve real-world problems.";
  const approach =
    "From engineering application architecture to integrating AI and leading development teams, I turn ideas into functional, scalable products.";

  const welcomeEnd = typingEnd(welcome, welcomeStart);
  const greetingStart = welcomeEnd + sequenceGap;
  const greetingEnd = typingEnd(greeting, greetingStart);
  const nameStart = greetingEnd + sequenceGap;
  const nameEnd = typingEnd(name, nameStart);
  const roleStart = nameEnd + sequenceGap;
  const roleEnd = typingEnd(role, roleStart);
  const introductionStart = roleEnd + sequenceGap;
  const introductionEnd = typingEnd(introduction, introductionStart);
  const approachStart = introductionEnd + sequenceGap;
  const buttonsDelay = typingEnd(approach, approachStart) + 160;
  const socialDelay = buttonsDelay + 650;
  const portraitDelay = socialDelay + 550;

  return (
    <main className="portfolio" id="home">
      <header className="site-header entrance" style={{ animationDelay: "0ms" }}>
        <a className="wordmark" href="#home" aria-label="Daniel Cato home">
          DC
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="sun-icon" aria-hidden="true">☼</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow" aria-label={welcome}>
            <span className="eyebrow-rule" aria-hidden="true" />
            <span aria-hidden="true">
              {renderTypingText(welcome, welcomeStart)}
            </span>
          </p>

          <h1 id="hero-title" aria-label={`${greeting} ${name}`}>
            <span className="greeting" aria-hidden="true">
              {renderTypingText(greeting, greetingStart)}
            </span>
            <span className="hero-name" aria-hidden="true">
              {renderTypingText(name, nameStart)}
            </span>
          </h1>

          <p className="hero-role" aria-label={role}>
            <span aria-hidden="true">{renderTypingText(role, roleStart)}</span>
          </p>
          <p className="hero-description" aria-label={introduction}>
            <span aria-hidden="true">
              {renderTypingText(introduction, introductionStart)}
            </span>
          </p>
          <p className="hero-description" aria-label={approach}>
            <span aria-hidden="true">
              {renderTypingText(approach, approachStart)}
            </span>
          </p>

          <div
            className="button-group entrance"
            style={{ animationDelay: `${buttonsDelay}ms` }}
          >
            <a className="hero-button button-primary" href="#about">
              About me <span aria-hidden="true">→</span>
            </a>
            <a
              className="hero-button button-secondary"
              href="#projects"
            >
              Projects <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>

        <aside
          className="social-links entrance"
          aria-label="Social media"
          style={{ animationDelay: `${socialDelay}ms` }}
        >
          <a href="https://github.com/Dancato32" aria-label="GitHub">
            <SocialIcon name="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-cato-a62b452b4/"
            aria-label="LinkedIn"
          >
            <SocialIcon name="LinkedIn" />
          </a>
          <a href="mailto:danielcato038@gamil.com" aria-label="Email Daniel">
            <SocialIcon name="Email" />
          </a>
        </aside>

        <div
          className="portrait entrance"
          style={{ animationDelay: `${portraitDelay}ms` }}
        >
          <Image
            src="/daniel-cato-portrait.jpeg"
            alt="Daniel Cato"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
        </div>

      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-heading">
          <p className="about-eyebrow">ABOUT ME</p>
          <h2 id="about-title">Building software with purpose.</h2>
          <p className="about-summary">
            Engineer, team lead, and lifelong learner focused on turning
            complex ideas into useful products.
          </p>
        </div>
        <div className="about-content">
          <p>
            I am a Software Developer with three years of experience designing,
            developing, and maintaining software applications, with a strong
            focus on web development, machine learning, and AI integration. I
            specialize in building functional, scalable web applications and
            integrating intelligent AI-powered systems to solve real-world
            problems and improve business operations.
          </p>
          <p>
            My technical expertise spans Python, JavaScript, React, Next.js,
            Django, and PyTorch, with experience in machine learning, AI
            integration, API development, and version control.
          </p>
          <p>
            I have served as a Team Lead on multiple technology projects,
            including Nexa AI and AI Study Suite, AI-powered educational
            solutions designed to enhance student learning at Paradise School.
            I also led the development of YUPI, a multi-vendor e-commerce
            platform tailored to the Ghanaian market. Additionally, I
            independently developed Mama&apos;s Voice, an AI-assisted maternal
            and child assessment platform, taking ownership of its frontend,
            backend, database architecture, API integrations, and AI-driven
            assessment logic. My experience spans the entire software
            development lifecycle, from conceptualization and system
            architecture to development, integration, testing, and deployment.
          </p>
          <p>
            I am currently pursuing a Bachelor of Science in Computer Science
            at the University of Ghana, where I am further strengthening my
            understanding of computer science fundamentals, algorithms,
            computational theory, and emerging technologies. Beyond writing
            code, I am passionate about engineering practical solutions,
            exploring emerging technologies, and transforming complex ideas
            into products that create meaningful value for individuals and
            businesses. My long-term interests include artificial intelligence,
            machine learning, intelligent systems, and advanced software
            engineering.
          </p>
          <div className="about-skills" aria-label="Technology stack">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skill-categories">
              {techStack.map(({ category, skills }) => (
                <section className="skill-category" key={category}>
                  <h4>{category}</h4>
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="projects-heading">
          <div>
            <p className="about-eyebrow">SELECTED WORK</p>
            <h2 id="projects-title">Projects</h2>
          </div>
          <p>A few things I&apos;ve been building.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className={`project-art project-art-${index + 1}`}>
                  {project.image ? (
                    <Image
                      className="project-image"
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  ) : (
                    <>
                      <span className="project-art-mark" aria-hidden="true">
                        {project.mark}
                      </span>
                      <span className="project-art-orbit" aria-hidden="true" />
                    </>
                  )}
                </div>
                <div className="project-card-caption">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.name}</h3>
                  {project.url && (
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <article className="project-card" key={project.name}>
                {project.url ? (
                  <a
                    className="project-card-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name} (opens in a new tab)`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy">
          <p className="about-eyebrow">GET IN TOUCH</p>
          <h2 id="contact-title">Let&apos;s make something meaningful.</h2>
          <p>
            Have a project in mind or want to talk about technology? Find me
            on LinkedIn or GitHub.
          </p>
        </div>
        <div className="contact-links" aria-label="Contact links">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/daniel-cato-a62b452b4/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/Dancato32"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-link" href="mailto:danielcato038@gamil.com">
            <span>Email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" aria-label="Back to top">
          DC
        </a>
        <span>© Daniel Cato</span>
      </footer>
    </main>
  );
}
