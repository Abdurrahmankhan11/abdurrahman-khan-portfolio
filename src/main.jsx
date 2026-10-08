import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const email = 'abdurrahmankhan1429@gmail.com';
const github = 'https://github.com/Abdurrahmankhan11';
const linkedin = 'https://linkedin.com/in/abdurrahmankhan11';
const resume = '/Abdurrahman_Khan_Resume.pdf';
const title = 'Software Engineer | Frontend & React Native Developer';
const navigation = ['Home', 'About', 'Experience', 'Projects', 'Research', 'Skills', 'Contact'];
const jobs = [
  {title:'Software Development Intern', dates:'Jan 2026 – Jul 2026', points:[
    'Developed responsive web and mobile interfaces with React.js, React Native, and Tailwind CSS across device sizes.',
    'Integrated 100+ REST API endpoints using Axios, with structured payload handling, loading states, and error handling.',
    'Implemented token-based authentication, protected routes, and RBAC flows; added Firebase Cloud Messaging push alerts.',
    'Built reusable React and React Native components to enable consistent, scalable feature development.'
  ]},
  {title:'Software Development Trainee', dates:'Jun 2025 – Dec 2025', points:[
    'Completed software-development training covering coding exercises, team projects, and assigned development tasks.',
    'Built React.js and React Native interfaces and integrated REST APIs via Axios with structured error-state handling.'
  ]}
];
const projects = [
  {name:'LegalFlow', subtitle:'Advocate & Client Management System', tech:['React.js','Vite','Tailwind CSS','Axios','RBAC','REST APIs'], description:'Role-based legal-tech web application with case management, hearing scheduling, document upload, payment tracking, client records, and API error handling.'},
  {name:'Driverify', subtitle:'Driver Booking Mobile Application', tech:['React Native','REST APIs','Firebase FCM','Token-Based Authentication'], description:'Cross-platform driver-booking application supporting multiple trip types, real-time push notifications, and protected navigation.'},
  {name:'WeMess', subtitle:'Social Media Mobile Application', tech:['React Native','REST APIs','WebSockets','Firebase FCM'], description:'Social media application with feeds, profiles, search, WebSocket real-time chat, notifications, and token-based sessions.'},
  {name:'School Management System', tech:['React.js','Vite','Tailwind CSS','shadcn/ui','ApexCharts','Razorpay API','RBAC'], description:'Role-based dashboards with analytics, protected routes, and Razorpay-based fee payment workflows.'}
];
const skills = {
  'Frontend & Mobile':['React.js','React Native','JavaScript (ES6+)','HTML5','CSS3','Tailwind CSS','Bootstrap','Vite','React Router DOM','shadcn/ui','Context API','Responsive Design','ApexCharts'],
  'APIs, Real-Time & Security':['REST APIs','Axios','WebSockets','Firebase Cloud Messaging','Token-Based Authentication','Protected Routes','RBAC','Razorpay Payment & Subscription APIs'],
  'Backend & Databases':['Python','Django','MySQL','SQL'],
  'Tools':['Git','GitHub','Vercel','Postman','Thunder Client','VS Code','Figma','Canva','npm']
};
const certifications = ['Deloitte Data Analytics Job Simulation — Forage','GenAI Data Analytics Job Simulation — Tata Consultancy Services / Forage','AI-Powered Data Analytics — Geeks of Gurukul','AI for Beginners — HP LIFE','GitHub Foundations — GitHub'];
function External({href, children, ...props}) { return <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>; }
function SocialLinks(){return <div className="social-links"><External href={github}>GitHub</External><External href={linkedin}>LinkedIn</External><a href={`mailto:${email}`}>Email</a></div>}
function Section({id,title,children,className=''}){return <section id={id} className={`section ${className}`} aria-labelledby={`${id}-heading`}><div className="section-label"><h2 id={`${id}-heading`}>{title}</h2></div><div className="section-content">{children}</div></section>}
function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [draftOpened,setDraftOpened]=useState(false);
  useEffect(()=>{const onKey=(e)=>{if(e.key==='Escape')setMenuOpen(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);
  function sendMessage(e){e.preventDefault();const data=new FormData(e.currentTarget);const subject=`Portfolio enquiry from ${data.get('name')}`;const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;window.location.href=`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setDraftOpened(true);}
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><div className="nav-wrap"><a className="brand" href="#home" onClick={()=>setMenuOpen(false)}>Abdurrahman Khan<span className="brand-period">.</span></a><button className="menu-toggle" aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={()=>setMenuOpen(!menuOpen)}><span/><span/><span/></button><nav id="navigation" aria-label="Main navigation" className={menuOpen?'nav open':'nav'}>{navigation.map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}</a>)}<a className="button resume-small" href={resume} download>Resume</a></nav></div></header>
    <main id="main" className="container">
      <section id="home" className="hero" aria-labelledby="hero-heading"><p className="location">Bangalore, Karnataka, India</p><h1 id="hero-heading">Abdurrahman Khan</h1><p className="hero-title">{title}</p><p className="intro">Computer Science Engineering graduate and Software Development Intern with hands-on experience building web and cross-platform mobile applications using React.js, React Native, and JavaScript.</p><div className="hero-actions"><a className="button primary" href="#projects">View Projects</a><a className="button" href={resume} download>Download Resume</a></div><SocialLinks/></section>
      <Section id="about" title="About Me"><div className="about-copy"><p>Computer Science Engineering graduate with experience building web and cross-platform mobile applications using React.js, React Native, and JavaScript.</p><p>Experience includes REST API integration, token-based authentication, RBAC, Firebase Cloud Messaging, and reusable React components.</p></div></Section>
      <Section id="experience" title="Experience"><div className="jobs">{jobs.map(job=><article className="job" key={job.title}><div className="job-heading"><h3>{job.title}</h3><p className="date">{job.dates}</p></div><p className="company">Ethical Intelligence, Bhopal, India</p><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div></Section>
      <Section id="projects" title="Projects"><div className="project-grid">{projects.map(project=><article className="project" key={project.name}><h3>{project.name}</h3>{project.subtitle&&<p className="project-subtitle">{project.subtitle}</p>}<p className="project-description">{project.description}</p><ul className="tags" aria-label={`${project.name} technologies`}>{project.tech.map(tech=><li key={tech}>{tech}</li>)}</ul></article>)}</div></Section>
      <Section id="research" title="Research & Publication"><article className="research"><p className="date">September 2026</p><h3>Requirement-Grounded LLM Agents for Functional Testing of React Applications</h3><p>Designed a controlled study protocol evaluating requirement-grounded LLM agents for functional testing of React applications.</p><ul className="study-details"><li><strong>3</strong> applications</li><li><strong>24</strong> requirements</li><li><strong>50</strong> atomic behaviors</li><li><strong>12</strong> single-fault mutant specifications</li></ul><div className="research-links"><External href="https://doi.org/10.5281/zenodo.23033997">Zenodo</External><External href="https://github.com/Abdurrahmankhan11/requirement-grounded-llm-testing">GitHub</External></div></article></Section>
      <Section id="skills" title="Skills"><div className="skill-groups">{Object.entries(skills).map(([group,items])=><div className="skill-group" key={group}><h3>{group}</h3><ul className="skill-list">{items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></Section>
      <Section id="education" title="Education"><div className="job-heading"><h3>Bachelor of Technology — Computer Science & Engineering</h3><p className="date">2022 – 2026</p></div><p className="education-school">Barkatullah University Institute of Technology, Bhopal</p><p className="cgpa">CGPA: 7.78 / 10</p><p className="coursework"><span>Coursework:</span> Data Structures & Algorithms, DBMS, Software Engineering, Machine Learning, OOP</p></Section>
      <Section id="certifications" title="Certifications"><ul className="certifications">{certifications.map(c=><li key={c}>{c}</li>)}</ul></Section>
      <Section id="contact" title="Contact"><p className="contact-intro">I'm open to frontend, React, React Native, and software development opportunities.</p><div className="contact-grid"><dl className="contact-details"><div><dt>Email</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+919981993064">+91-9981993064</a></dd></div><div><dt>LinkedIn</dt><dd><External href={linkedin}>abdurrahmankhan11</External></dd></div><div><dt>GitHub</dt><dd><External href={github}>Abdurrahmankhan11</External></dd></div></dl><form onSubmit={sendMessage}><div className="form-row"><label>Name<input name="name" autoComplete="name" required maxLength={120}/></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div><label>Message<textarea name="message" rows={5} required maxLength={5000}/></label><p className="form-note">This form opens your email app with a draft. Send it from there.</p><button className="button primary" type="submit">Send Message</button>{draftOpened&&<p role="status" className="form-note">Your email app should open with your draft. If it doesn't, email me directly at <a href={`mailto:${email}`}>{email}</a>.</p>}</form></div></Section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><div><p className="footer-name">Abdurrahman Khan</p><p className="footer-title">{title}</p></div><SocialLinks/></div><p className="copyright">© 2026 Abdurrahman Khan</p></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
