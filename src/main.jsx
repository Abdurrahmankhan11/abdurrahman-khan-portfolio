import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const email = 'abdurrahmankhan1429@gmail.com';
const github = 'https://github.com/Abdurrahmankhan11';
const linkedin = 'https://linkedin.com/in/abdurrahmankhan11';
const resume = '/Abdurrahman_Khan_Resume.pdf';
const title = 'Software Engineer · Frontend & React Native Developer';
const navigation = ['About', 'Experience', 'Projects', 'Research', 'Skills', 'Contact'];

const jobs = [
  {
    title: 'Software Development Intern',
    company: 'Ethical Intelligence',
    location: 'Bhopal, India',
    dates: 'Jan 2026 — Jul 2026',
    points: [
      'Built responsive web and mobile interfaces with React, React Native, and Tailwind CSS.',
      'Integrated 100+ REST API endpoints with clear loading, success, and error states.',
      'Implemented token-based authentication, protected routes, role-based access, and Firebase push notifications.',
      'Created reusable components to make feature development more consistent and maintainable.',
    ],
  },
  {
    title: 'Software Development Trainee',
    company: 'Ethical Intelligence',
    location: 'Bhopal, India',
    dates: 'Jun 2025 — Dec 2025',
    points: [
      'Completed hands-on software development training through coding exercises and team projects.',
      'Built React and React Native interfaces and connected them to REST APIs with structured error handling.',
    ],
  },
];

const projects = [
  {
    name: 'LegalFlow',
    subtitle: 'Advocate & client management',
    description:
      'A legal-tech platform that brings case management, hearing schedules, documents, payments, and client records into one role-based workspace.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'RBAC', 'REST APIs'],
    number: '01',
    featured: true,
    liveUrl: 'https://trylegalflow.vercel.app/',
  },
  {
    name: 'Driverify',
    subtitle: 'Driver booking app & web panel',
    description:
      'A cross-platform booking experience for arranging trips, managing authenticated sessions, and receiving real-time push notifications.',
    tech: ['React Native', 'React', 'REST APIs', 'Firebase FCM'],
    number: '02',
    liveUrl: 'https://driverify-delta.vercel.app/',
  },
  {
    name: 'WeMess',
    subtitle: 'Social mobile application',
    description:
      'A social app with profiles, feeds, search, live messaging, and notifications, built around a responsive mobile experience.',
    tech: ['React Native', 'REST APIs', 'WebSockets', 'Firebase FCM'],
    number: '03',
  },
  {
    name: 'School Management System',
    subtitle: 'Dashboards & fee payments',
    description:
      'A role-based school administration experience with analytics dashboards, protected modules, and online fee payment flows.',
    tech: ['React', 'Vite', 'ApexCharts', 'Razorpay', 'RBAC'],
    number: '04',
    liveUrl: 'https://sms-app-green.vercel.app/',
  },
];

const skills = {
  'Frontend & mobile': [
    'React',
    'React Native',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'Vite',
    'React Router',
    'shadcn/ui',
    'Context API',
    'Responsive design',
    'ApexCharts',
  ],
  'APIs & application security': [
    'REST APIs',
    'Axios',
    'WebSockets',
    'Firebase Cloud Messaging',
    'Token-based authentication',
    'Protected routes',
    'Role-based access control',
    'Razorpay APIs',
  ],
  'Backend & data': ['Python', 'Django', 'MySQL', 'SQL'],
  'Tools & collaboration': [
    'Git',
    'GitHub',
    'Vercel',
    'Postman',
    'Thunder Client',
    'VS Code',
    'Figma',
    'Canva',
    'npm',
  ],
};

const certifications = [
  'Deloitte Data Analytics Job Simulation — Forage',
  'GenAI Data Analytics Job Simulation — Tata Consultancy Services / Forage',
  'AI-Powered Data Analytics — Geeks of Gurukul',
  'AI for Beginners — HP LIFE',
  'GitHub Foundations — GitHub',
];

function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      <ExternalLink href={github}>GitHub <span aria-hidden="true">↗</span></ExternalLink>
      <ExternalLink href={linkedin}>LinkedIn <span aria-hidden="true">↗</span></ExternalLink>
      <a href={`mailto:${email}`}>Email <span aria-hidden="true">↗</span></a>
    </div>
  );
}

function Section({ id, number, title: sectionTitle, children, className = '' }) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-label">
        <span>{number} / {sectionTitle}</span>
      </div>
      <div className="section-content">
        <h2 id={`${id}-heading`}>{sectionTitle}</h2>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  function sendMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${data.get('name')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            Abdurrahman Khan<span className="brand-period">.</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <nav
            id="navigation"
            aria-label="Main navigation"
            className={menuOpen ? 'nav open' : 'nav'}
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a className="button resume-small" href={resume} download>Resume <span aria-hidden="true">↓</span></a>
          </nav>
        </div>
      </header>

      <main id="main" className="container">
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> BANGALORE, INDIA</p>
            <h1 id="hero-heading">Web &amp; mobile development with <span>React, React Native &amp; JavaScript.</span></h1>
            <p className="hero-title">{title}</p>
            <p className="intro">
              I’m a Computer Science Engineering graduate with hands-on
              experience building responsive web applications and cross-platform
              mobile apps. I work across React, React Native, and JavaScript,
              connecting thoughtful interfaces to reliable APIs.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href={resume} download>Download resume <span aria-hidden="true">↓</span></a>
            </div>
            <SocialLinks />
          </div>
          <aside className="hero-card" aria-label="A few details about my work">
            <div className="hero-card-top">
              <span className="card-overline">PROFILE SNAPSHOT</span>
              <span className="card-mark" aria-hidden="true">AK</span>
            </div>
            <div className="hero-card-main">
              <p className="card-kicker">AREAS OF EXPERIENCE</p>
              <p className="card-statement">Frontend engineering.<br />Cross-platform mobile.</p>
            </div>
            <div className="hero-facts" aria-label="Professional highlights">
              <div><strong>100+</strong><span>REST API endpoints integrated</span></div>
              <div><strong>Web + mobile</strong><span>Responsive product development</span></div>
            </div>
            <div className="hero-card-bottom">
              <span>REACT</span><span>REACT NATIVE</span><span>JAVASCRIPT</span>
            </div>
          </aside>
        </section>

        <Section id="about" number="01" title="About me">
          <p className="section-lead">
            I build user-facing applications with a practical understanding of
            the integrations and workflows behind them.
          </p>
          <div className="about-copy">
            <p>
              My experience includes developing responsive web applications
              and cross-platform mobile apps with React, React Native, and
              JavaScript.
            </p>
            <p>
              I’ve integrated 100+ REST API endpoints and worked with
              authentication, role-based access, real-time chat, and mobile
              push notifications. I value maintainable components, thoughtful
              collaboration, and user experiences that feel clear and reliable.
            </p>
          </div>
          <div className="proof-points">
            <div><strong>100+</strong><span>REST API endpoints integrated</span></div>
            <div><strong>Web + mobile</strong><span>Responsive, cross-platform applications</span></div>
            <div><strong>Application flows</strong><span>Authentication, access, and notifications</span></div>
          </div>
        </Section>

        <Section id="experience" number="02" title="Experience">
          <p className="section-lead">Learning by shipping, collaborating, and improving the details.</p>
          <div className="jobs">
            {jobs.map((job) => (
              <article className="job" key={job.title}>
                <div className="job-date">{job.dates}</div>
                <div className="job-body">
                  <div className="job-heading">
                    <h3>{job.title}</h3>
                    <span className="job-location">{job.location}</span>
                  </div>
                  <p className="company">{job.company}</p>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" number="03" title="Selected projects">
          <p className="section-lead">A selection of products and experiences I’ve worked on.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project${project.featured ? ' project-featured' : ''}`}
                key={project.name}
              >
                <div className="project-meta">
                  <span>{project.subtitle}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.liveUrl && (
                  <ExternalLink className="project-link" href={project.liveUrl}>
                    View live project <span aria-hidden="true">↗</span>
                  </ExternalLink>
                )}
                <ul className="tags" aria-label={`${project.name} technologies`}>
                  {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" number="04" title="Research & publication">
          <p className="section-lead">Careful experiments for more dependable AI-assisted testing.</p>
          <article className="research">
            <div className="research-heading">
              <div>
                <p className="research-type">INDEPENDENT RESEARCH · SEPTEMBER 2026</p>
                <h3>Requirement-Grounded LLM Agents for Functional Testing of React Applications</h3>
              </div>
              <span className="research-symbol" aria-hidden="true">R&amp;D</span>
            </div>
            <p>
              A controlled study protocol exploring how requirement-grounded
              LLM agents can test React applications. The study defines a
              measurable evaluation across applications, requirements,
              observable behaviors, and single-fault specifications.
            </p>
            <ul className="study-details">
              <li><strong>3</strong> applications</li>
              <li><strong>24</strong> requirements</li>
              <li><strong>50</strong> atomic behaviors</li>
              <li><strong>12</strong> single-fault specifications</li>
            </ul>
            <div className="research-links">
              <ExternalLink href="https://doi.org/10.5281/zenodo.23033997">Read on Zenodo <span aria-hidden="true">↗</span></ExternalLink>
              <ExternalLink href="https://github.com/Abdurrahmankhan11/requirement-grounded-llm-testing">View the repository <span aria-hidden="true">↗</span></ExternalLink>
            </div>
          </article>
        </Section>

        <Section id="skills" number="05" title="Tools of the trade">
          <p className="section-lead">A practical toolkit for shaping complete digital experiences.</p>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <ul className="skill-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" number="06" title="Education" className="education-section">
          <div className="education-card">
            <span className="education-dates">2022 — 2026</span>
            <h3>B.Tech, Computer Science &amp; Engineering</h3>
            <p>Barkatullah University Institute of Technology, Bhopal</p>
            <p className="cgpa">CGPA: 7.78 / 10</p>
            <div className="education-note">
              <span>FOUNDATIONS</span>
              <p>Data structures &amp; algorithms · DBMS · Software engineering · Machine learning · Object-oriented programming</p>
            </div>
          </div>
        </Section>

        <Section id="certifications" number="07" title="Certifications">
          <ul className="certifications">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </Section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-copy">
            <p className="eyebrow">08 / GET IN TOUCH</p>
            <h2 id="contact-heading">Have a good project in mind? <span>Let’s make it happen.</span></h2>
            <p>
              I’m open to software development opportunities across frontend,
              React, and React Native. Tell me what you’re building.
            </p>
            <a className="contact-email" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
          </div>
          <form className="contact-form" onSubmit={sendMessage}>
            <div className="form-row">
              <label>Name<input name="name" autoComplete="name" required maxLength={120} /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
            </div>
            <label>Message<textarea name="message" rows={4} required maxLength={5000} /></label>
            <div className="form-bottom">
              <p className="form-note">Opens your email app with a ready-to-send draft.</p>
              <button className="button primary" type="submit">Write to me <span aria-hidden="true">↗</span></button>
            </div>
            {draftOpened && (
              <p role="status" className="form-note form-status">
                Your email app should open with your draft. If it doesn’t, email{' '}
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">Abdurrahman Khan<span className="brand-period">.</span></a>
          <p>{title}</p>
          <SocialLinks />
          <span className="copyright">© {new Date().getFullYear()} Abdurrahman Khan</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>,
);
