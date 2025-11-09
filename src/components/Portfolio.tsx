import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SiteNav from './SiteNav';

type CommunityServiceItem = {
  title: string;
  organization: string;
  year: string;
  description: string | React.ReactNode;
  type: string;
  image?: string;
  imageAlt?: string;
};

const Portfolio = () => {
  // Scroll to anchor on hash change (works for navigation from any page)
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) {
        const el = document.getElementById(window.location.hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: "AlertNow",
      year: "2024 - Present",
      category: "Gun Threat Detection",
      subtitle: "Patent Pending & IEEE Conference Publication",
      description: (<>I developed a low-cost, real-time gunshot and firearm detection system leveraging multi-modal deep learning models (CNN, YOLOv8) that notifies authorities in real-time to enhance school safety; currently evaluating its commercial viability. This award-winning research was presented at 2025 IEEE Integrated STEM Education Conference held at Princeton University. The AlertNow research paper is published in IEEE <i>Xplore</i>.</>),
      tech: ["Python", "Raspberry Pi", "Machine Learning", "YOLOv8", "CNN", "PyTorch", "TensorFlow", "PyQt"],
      publication: "https://ieeexplore.ieee.org/document/11147316",
      source: "https://github.com/adicooks/AlertNow/tree/main",
      video: "https://www.youtube.com/watch?v=3eWp4HoJ_eY",
      image: "/images/Adi-dvsf-2025-pic.jpg",
      imageAlt: "Alert Now firearm and gunshot detection system"
    },
    {
      title: "Data Analyst Intern",
      year: "Feb 2025 - Present",
      category: "Gun Violence Prevention",
      subtitle: "Penn Injury Science Center",
      description: "Philadelphia faces acute challenges with firearm violence, disproportionately affecting youth of color in vulnerable communities, both as victims and as perpetrators.Through my PISC internship with the Penn Community Violence Prevention Program, I visit West Philadelphia communities, including local high schools, with PISC social workers to identify and connect with individuals at highest risk. Under the guidance of my mentor, I also analyze shooting incidents to uncover demographic, spatial, and temporal patterns, generating actionable insights for violence prevention strategies and timely public health interventions. I've submitted abstract of this work to the 'The Society for Advancement of Violence and Injury Research' (SAVIR) 2026 conference and preparing the manuscript for publication in a peer reviewed journal.",
      tech: ["Statistical Data Analysis", "Cummunity Engagement", "Teamwork"],
      publication: "ToDo",
      source: "ToDo",
      image: "/images/PISC.webp",
      imageLink: "https://www.penninjuryscience.org/", // Makes this image clickable
      imageAlt: "Penn Injury Science Center"
    },
    {
      title: "Software Developer Intern ",
      year: "Aug 2024 - July 2025",
      category: "Neuroimaging Research",
      subtitle: "University of Pennsylvania Perelman School of Medicine",
      description: "During my internship, I collaborated with researchers at the Center for Biomedical Image Computing and Analytics (CBICA), which develops advanced computational methods to transform biomedical images into diagnostic and predictive tools for personalized medicine. I focused on designing and developing an AI-powered mobile app for NiChart, a large and diverse collection of MRI images, to enable early detection of aging and neurodegenerative diseases through imaging biomarkers. The app is now in beta testing for clinical integration.",
      tech: ["Swift", "Python", "AWS", "Xcode", "Problem Solving"],
      publication: "ToDo",
      source: "ToDo",
      image: "/images/Perelman_School_of_Medicine.webp",
      imageLink: "https://www.med.upenn.edu/", // Makes this image clickable
      imageAlt: "Perelman School of Medicine"
    },
    {
      title: "SeniorConnect",
      year: "2022-2023",
      category: "Senior Alert System",
      subtitle: "National JSHS Finalist & JEI Publication",
      description: "I developed a low-cost, wearable, real-time alert system connecting seniors with cognitive disabilities to their caregivers via a custom mobile app. The system integrates an IoT device, programmed using Python and AWS cloud services, to send instant notifications to a Swift-built iOS app on caregivers' smartphones upon activation by the senior. SeniorConnect was beta tested with seniors and caregivers. This prototype earned top awards at ISEF-affliated and JSHS national science competitions. This research has since been published in the Journal of Emerging Investigators (JEI).",
      tech: ["Internet of Things", "AWS", "Python", "Swift"],
      publication: "https://emerginginvestigators.org/articles/25-015",
      source: "https://github.com/adicooks/SeniorConnect",
      image: "/images/Adi Coriell seniorconnect.png",
      imageAlt: "Senior Connect wearable device"
    }
  ];

  const additionalProjects = [
    {
      title: "AK Soles",
      description: (
        <>
          I founded a limited-edition sneaker reselling business that leverages cloud computing, social media analytics, and data-driven forecasting to predict demand and maximize revenue. By building a nationwide network of retail/wholesale partners and cultivating a 3K+ Discord community following, this business has now generated ~$450K in revenue.
          <br /><br />
          I published a sneaker resale analysis paper using my proprietary sales data. The paper provides aspiring entrepreneurs with actionable insights and a roadmap for navigating inconsistent pricing and limited transparency to build successful businesses.
        </>
      ),
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      publication: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5382169",
      website: "https://adicooks.com/",
      discord: "https://discord.com/users/adi#1234",
      youtube: "https://www.youtube.com/@AdiCooks",
      category: "Sneaker Reselling Platform",
      year: "2020-Present",
      subtitle: "Founder",
      media: {
        images: [
          { src: "/images/Adi-shoe-best.jpeg", alt: "AK Soles dashboard" },
          { src: "/images/Business.jpg", alt: "AK Soles business" }
        ],
        video: {
          src: "/videos/adi-shoe.MOV",
          type: "video/mp4"
        }
      }
    },
    {
      title: "LaunchX Enterpreneurship Bootcamp",
      description: "During my month at LaunchX, a residential entrepreneurship program at NC State, I led the development of InvestEd, a financial education app for teens. I built the app using Swift while learning business and entrepreneurship skills firsthand. The program wrapped up with our team pitching to investors in a Shark Tank-style format.",
      tech: ["React", "Firebase", "Tailwind CSS", "CodeMirror"],

      category: "Summer Program",
      year: "2023",
      subtitle: "Financial Education App",
      image: "/images/invest-ed.jpg",
      imageAlt: "invest ED financial education app"
    }
  ];

  const communityService: CommunityServiceItem[] = [
    {
      title: "For Kids By Kids",
      organization: "Co Founder & Lead Instructor",
      year: "2023-Present",
      description: "I co-founded For Kids By Kids, an organization where we created peer-led coding camps to teach students Scratch, Python, and AI fundamentals. We have taught more than 120 elementary and middle school students through free, in-person sessions at local public libraries. Designed to ignite curiosity in technology, these high-demand camps introduce students to foundational coding, problem-solving, and creative thinking skills.",
      type: "Summer Fun & Learning",
      image: "/images/Adi-helping-kids.jpg",
      imageAlt: "CodeForAll coding interface"
    },
    {
      title: "Hindi Teaching Assistant",
      organization: "HindiUSA",
      year: "2022-Present",
      description: "After graduating from HindiUSA, I now volunteer as a teaching assistant at their Cherry Hill, NJ chapter. I support 15+ middle and high school students annually in developing their Hindi language skills and cultural knowledge. My role includes assignment review, language reinforcement, and guiding students through cultural programs and competitions. This experience allows me to give back to the organization that shaped my language skills while serving as a mentor to younger learners.",
      type: "Youth Volunteer",
      image: "/images/Adi-hindi-YV.jpg",
      imageAlt: "Adi representing HindiUSA"
    },
    {
      title: "Student Ambassador to India",
      organization: "HindiUSA",
      year: "2023-2024",
      description: "Selected as one of 13 HindiUSA Student Ambassadors from over 400 applicants, I participated in a fully-funded cultural immersion visit to India. During this two-week journey, I engaged with senior government officials, collaborated with local students, and shared insights about Hindi education in the US. This unique experience provided me with valuable perspectives on India's educational system and cultural heritage.",
      type: "International Cultural Exchange Program",
      image: "/images/hindi-COLLAGE.jpg",
      imageAlt: "Adi representing HindiUSA"
    },
    {
      title: "Civic Engagement Intern",
      organization: "Ali Leadership Institute",
      year: "2024",
      description: "During this internship, I led Moorestown Meals, a food drive that delivered 200+ meals to families in need, and presented a comprehensive civic engagement plan to a panel of activists, policymakers, and local community leaders.",
      type: "Leadership",
      image: "/images/Adi-Ali-leadership-2024.png",
      imageAlt: "Ali leadership"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter text-white antialiased">
      {/* Top Navigation Bar */}
      <nav className="w-full px-8 md:px-16 py-5 bg-background z-50 sticky top-0 text-white border-b border-border">
        <SiteNav />
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center section-padding">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 fade-in items-center ml-0">
          <div className="space-y-8 text-left">
            <h1 className="text-8xl md:text-7xl font-bold tracking-tight leading-tight font-serif">
              Hey! I'm Adi
            </h1>
            <div>
              <span className="block text-lg md:text-xl font-medium mt-2 text-[#bee3f8] font-serif tracking-normal">
                Researcher&nbsp;|&nbsp;Entrepreneur&nbsp;|&nbsp;Teacher
              </span>
            </div>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-normal text-left">
              High school senior passionate about technology, research, and entrepreneurship. I love building solutions for real-world problems.
            </p>
            <div className="w-full flex justify-start gap-4 mt-6">
              <a
                href="#about"
                className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors"
              >
                About Me
              </a>
              <a
                href="https://adicooks.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors"
              >
                Adi through Wii Sports
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/A-A-fav.jpg"
              alt="Aditya Khurana standing confidently with a slight smile, wearing a casual outfit. The background is softly blurred, focusing on Aditya."
              className="object-contain w-full h-auto max-w-[280px] md:max-w-[350px] lg:max-w-[400px] opacity-90 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 section-padding">
        <div className="w-full max-w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 fade-in items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">About</h3>
              <h2 className="text-3xl md:text-4xl font-bold font-sans">Building Piece by Piece</h2>
            </div>
            <div className="space-y-6 text-base md:text-lg leading-relaxed font-normal text-left text-white">
              <p>
                I enjoy learning and building things.
                <br/><br/>
                During Covid-19, I picked up sneaker reselling. What started with one pair expanded to thousands of pairs sold and partnerships formed with stores across the country.
                I ended up starting a Discord community and YouTube channel to connect with other sneakerheads like myself, which grew to over 3,000 members.
              </p>
              <p>
              Through my sneaker ventures, I discovered my love of technology. I first started building small scripts and monitors to help benefit my community. I soon thought beyond sneakers. I built a tool to help seniors with cognitive disabilties connect with their caregivers. Then, I built a patent pending machine-learning based gunshot system to enhance school safety. This work led me to the Penn Injury Science Center, where I have been interning at for nearly a year. I am using computer science and statistical tools to help find patterns in gun-violence to help violence ridden communities in the West Philadelphia area.
               <br/><br/>
               Sharing knowledge is another passion of mine. I've taught Python and AI/MLprogramming to over 120 younger students, hoping to spark in them the same excitement I felt when I first discovered coding.
              <br/><br/>
              When I'm not working on projects, you'll find me playing chess, shooting hoops, and watching sports.
              </p>
            </div>
          </div>
          <div className="flex justify-right items-start">
            <div className="w-full max-w-xl mt-16">
              <img
                src="/images/sneakercon.jpg"
                alt="Sneakercon"
                className="object-cover w-full h-72 rounded mb-4"
                style={{ aspectRatio: '2/1' }}
              />
              <div className="grid grid-cols-3 gap-3">
                <div className="relative w-full h-56 overflow-hidden rounded-lg bg-black group">
                  <img
                    src="/images/Adi-senior-connect-poster.jpg"
                    alt="Adi at a senior connect event, presenting and engaging with the audience"
                    className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="relative w-full h-56 overflow-hidden rounded-lg bg-black">
                  <img
                    src="/images/adi-piano.jpg"
                    alt="Adi playing a grand piano on stage, hands on the keys, with a spotlight highlighting a calm and passionate performance, audience seats and stage curtains in the background"
                    className="absolute inset-0 w-full h-full object-contain p-2"
                  />
                </div>
                <div className="relative w-full h-56 overflow-hidden rounded-lg bg-black group">
                  <img
                    src="/images/codingcamp.jpg"
                    alt="Adi teaching a group of young students at a coding camp, smiling and engaged, with laptops and a classroom setting creating a collaborative and enthusiastic atmosphere"
                    className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="research" className="py-16 section-padding">
        <div className="w-full max-w-full px-4 mx-auto fade-in">
          <div className="space-y-2 mb-12">
            <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">RESEARCH</h3>
          </div>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* First Column - Title and Metadata */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24 space-y-2">
                      <div className="space-y-2">
                        <span className="text text-muted-foreground font-medium block font-sans text-sm">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground leading-tight tracking-tight font-sans">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground font-medium block">
                          {project.year}
                        </span>
                      </div>
                      <span className="text-base font-medium block" style={{ color: '#bee3f8' }}>
                        {project.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Second Column - Description and Tech */}
                  <div className="md:col-span-6 space-y-6">
                    <p className="text-base tracking-normal text-left">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[hsl(var(--project-tech))] text-xs px-2 py-1 rounded font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.publication && project.publication !== 'ToDo' && (
                        <a
                          href={project.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors"
                        >
                          View Publication
                        </a>
                      )}
                      {/* View Video box specifically for AlertNow (links to gallery by default) */}
                      {project.title === 'AlertNow' && (
                        <a
                          href="https://www.youtube.com/watch?v=3eWp4HoJ_eY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors"
                        >
                          View Video
                        </a>
                      )}
                      {project.source && project.source !== 'ToDo' && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors"
                        >
                          {project.source.includes('github.com') ? 'View Code' : 'View Source'}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Third Column - Image */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24">
                     {/* {project.image && (
                        <div className="overflow-hidden rounded-lg border border-border">
                          <img
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            className="w-full h-auto object-cover transition-transform hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                              e.currentTarget.alt = 'Project preview';
                            }}
                          />
                        </div>
                      )} */}
                      {project.image && (
  <div className="overflow-hidden rounded-lg border border-border">
    {project.imageLink ? (
      <a href={project.imageLink} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-auto object-cover transition-transform hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
            e.currentTarget.alt = 'Project preview';
          }}
        />
      </a>
    ) : (
      <img
        src={project.image}
        alt={project.imageAlt || project.title}
        className="w-full h-auto object-cover"
        onError={(e) => {
          e.currentTarget.src = '/placeholder.svg';
          e.currentTarget.alt = 'Project preview';
        }}
      />
    )}
  </div>
)}
                    </div>
                  </div>
                </div>

                {/* Divider between items */}
                {index < featuredProjects.length - 1 && (
                  <hr className="border-t border-[hsl(var(--border))] opacity-30 my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section id="entrepreneurship" className="py-16 section-padding">
        <div className="w-full max-w-full px-4 mx-auto fade-in">
          <div className="space-y-2 mb-12">
            <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">Entrepreneurship</h3>
          </div>
          <div className="space-y-12">
            {additionalProjects.map((project, index) => (
              <div key={index} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* First Column - Title and Metadata */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24 space-y-2">
                      <div className="space-y-2">
                        <span className="text text-muted-foreground font block">
                          {project.category || 'Project'}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground leading-tight tracking-tight font-sans">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground font-medium block">
                          {project.year || ''}
                        </span>
                      </div>
                      {project.subtitle && (
                        <span className="text-base font-medium block" style={{ color: '#bee3f8' }}>
                          {project.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Second Column - Description and Tech */}
                  <div className="md:col-span-6 space-y-6">
                    <p className="text-base tracking-normal text-left font-inter">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[hsl(var(--project-tech))] text-xs px-2 py-1 rounded font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.website && project.website !== '#' && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Website
                        </a>
                      )}
                      {project.discord && project.discord !== '#' && (
                        <a
                          href={project.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors flex items-center gap-2"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.957 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418z"/>
                          </svg>
                          Community
                        </a>
                      )}
                      {project.youtube && project.youtube !== '#' && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors flex items-center gap-2"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          YouTube
                        </a>
                      )}
                      {project.publication && project.publication !== '#' && (
                        <a
                          href={project.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded border border-[hsl(var(--border))] text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))] transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Publication
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Third Column - Media */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24 space-y-4">
                      {project.media ? (
                        <>
                          {/* Image Collage */}
                          <div className="grid grid-cols-2 gap-2">
                            {project.media.images.map((img, idx) => (
                              <div key={idx} className="overflow-hidden rounded-lg border border-border">
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="w-full h-auto object-cover aspect-square"
                                  onError={(e) => {
                                    e.currentTarget.src = '/placeholder.svg';
                                    e.currentTarget.alt = 'Project preview';
                                  }}
                                />
                              </div>
                            ))}
                          </div>

                          {/* Video */}
                          <div className="overflow-hidden rounded-lg border border-border">
                            <video
                              className="w-full h-auto"
                              controls
                              preload="metadata"
                            >
                              <source src={project.media.video.src} type={project.media.video.type} />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </>
                      ) : project.image ? (
                        <div className="overflow-hidden rounded-lg border border-border">
                          <img
                            src={project.image}
                            alt={project.imageAlt || project.title}
                            className="w-full h-auto object-cover transition-transform hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                              e.currentTarget.alt = 'Project preview';
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Divider between items */}
                {index < additionalProjects.length - 1 && (
                  <hr className="border-t border-[hsl(var(--border))] opacity-30 my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section id="community" className="py-16 section-padding">
        <div className="w-full max-w-full px-4 mx-auto fade-in">
          <div className="space-y-2 mb-12">
            <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">COMMUNITY SERVICE</h3>
          </div>
          <div className="space-y-12">
            {communityService.map((achievement, index) => (
              <div key={index} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* First Column - Title and Metadata */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24 space-y-2">
                      <div className="space-y-2">
                        <span className="text text-muted-foreground font-medium block font-sans text-sm tracking-normal">
                          {achievement.type}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground leading-tight tracking-tight font-sans">
                          {achievement.title}
                        </h3>
                        <span className="text-xs text-muted-foreground font-medium block">
                          {achievement.year}
                        </span>
                      </div>
                      <span className="text-base font-medium block" style={{ color: '#bee3f8' }}>
                        {achievement.organization}
                      </span>
                    </div>
                  </div>

                  {/* Second Column - Description */}
                  <div className="md:col-span-6 space-y-6">
                    {/*<p className="text-base text-muted-foreground leading-relaxed">*/}
                    <p className="text-base tracking-normal text-left font-inter">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Third Column - Image */}
                  <div className="md:col-span-3">
                    <div className="sticky top-24">
                      {achievement.image && (
                        <div className="overflow-hidden rounded-lg border border-border">
                          <img
                            src={achievement.image}
                            alt={achievement.imageAlt || achievement.title}
                            className="w-full h-auto object-cover transition-transform hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                              e.currentTarget.alt = 'Project preview';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider between items */}
                {index < communityService.length - 1 && (
                  <hr className="border-t border-[hsl(var(--border))] opacity-30 my-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section (same as Achievements, just relabel for menu) */}
      <section id="awards" className="py-16 section-padding">
        <div className="w-full max-w-5xl space-y-16 fade-in text-left ml-0">
          <div className="space-y-2">
            <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">Awards</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Recognition & Honors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 1 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">1st Place, Math & Computer Science</h3>
              <p className="text-xs text-muted-foreground">NJ Academy of Science STEM Competition</p>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">1st Place in category among 20 high school students in State of NJ</p>
              <p className="text-xs text-muted-foreground italic">Invited to National Association of Academies of Science - 2026 AJAS Conference</p>
            </div>
            {/* 2 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">2nd Place, Computer Science</h3>
              <p className="text-xs text-muted-foreground">Delaware Valley Science Fair (ISEF affiliated)</p>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">2nd Place in Computer Science Category</p>
              <p className="text-xs text-muted-foreground italic">Regional science fair</p>
            </div>
            {/* 3 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Most Outstanding Exhibit in STEM Award</h3>
              <p className="text-xs text-muted-foreground">The Yale Science & Engineering Association</p>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">Recognized for excellence in STEM research and presentation</p>
              <p className="text-xs text-muted-foreground italic">Special award</p>
            </div>
            {/* 4 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">2nd Place, Computer Science</h3>
              <p className="text-xs text-muted-foreground">Coriell Institute Science Fair</p>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">2nd Place in Computer Science Category</p>
              <p className="text-xs text-muted-foreground italic">Regional science fair</p>
            </div>
            {/* 5 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Congressional App Challenge: 2nd Place - 2023, 3rd Place - 2024</h3>
              <p className="text-xs text-muted-foreground">Awarded by Senator Andy Kim</p>
              <p className="text-xs text-muted-foreground">2023 & 2024</p>
              <p className="text-muted-foreground text-base">Recognized for app development and innovation in consecutive years</p>
              <p className="text-xs text-muted-foreground italic">Congressional district award</p>
            </div>
            {/* 6 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Best in Engineering, Mathematics, and Computer Science</h3>
              <p className="text-xs text-muted-foreground">Coriell Science Fair</p>
              <p className="text-xs text-muted-foreground">2023 & 2024</p>
              <p className="text-muted-foreground text-base">Best project in Engineering, Mathematics, and Computer Science Category</p>
              <p className="text-xs text-muted-foreground italic">Regional science fair</p>
            </div>
            {/* 7 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">1st Place, Annual High School Programming Contest</h3>
              <p className="text-xs text-muted-foreground">Widener University</p>
              <p className="text-xs text-muted-foreground">2024</p>
              <p className="text-muted-foreground text-base">1st Place among 50 teams.</p>
              <p className="text-xs text-muted-foreground italic">Programming competition</p>
            </div>
            {/* 8 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Top 5, Engineering & Technology</h3>
              <p className="text-xs text-muted-foreground">NJ Southern JSHS</p>
              <p className="text-xs text-muted-foreground">2023</p>
              <p className="text-muted-foreground text-base">Among Top 5 in Engineering & Technology Category</p>
              <p className="text-xs text-muted-foreground italic">Statewide research symposium</p>
            </div>
            {/* 9 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Finalist, Engineering & Technology</h3>
              <p className="text-xs text-muted-foreground">National JSHS</p>
              <p className="text-xs text-muted-foreground">2023</p>
              <p className="text-muted-foreground text-base">Finalist in Engineering & Technology Category. Among Top 3% (227/8000) of students who competed internationally</p>
              <p className="text-xs text-muted-foreground italic">International research symposium</p>
            </div>
             {/* 10 */}
             <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">2nd Place, Advanced Piano</h3>
              <p className="text-xs text-muted-foreground">Carnegie Hall, New York</p>
              <p className="text-xs text-muted-foreground">2021, 2023, 2024</p>
              <p className="text-muted-foreground text-base">Crescendo International Music Competition</p>
              <p className="text-xs text-muted-foreground italic">Three times winner of Crescendo International Music Competition</p>
            </div>
            {/* 11 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">Honoree Award</h3>
              <p className="text-xs text-muted-foreground">Department of State</p>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">New Jersey State Governor's Volunteerism Award</p>
              <p className="text-xs text-muted-foreground italic">Service Through STEM</p>
            </div>
            {/* 12 */}
            <div className="grid gap-2 p-6 border border-border rounded-xl bg-card h-full">
              <h3 className="text-lg font-bold font-sans">New Jersey Seal of Biliteracy for Hindi</h3>
              <p className="text-xs text-muted-foreground">2025</p>
              <p className="text-muted-foreground text-base">Demonstrated competence in Hindi: speaking, reading, and writing</p>

            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="connect" className="py-16 section-padding">
        <div className="w-full max-w-xl space-y-8 fade-in mx-auto text-center">
          <div className="space-y-2">
            <h3 className="text-s uppercase tracking-widest text-muted-foreground font-medium font-sans">Connect</h3>
            <h2 className="text-3xl md:text-3xl font-bold font-sans">Always happy to chat</h2>
          </div>
          <div className="space-y-4 text-base">
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="mailto:theadikhurana@gmail.com"
                className="text-foreground hover:text-link-hover transition-colors font-medium"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/adi-khurana1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-link-hover transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/adicooks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-link-hover transition-colors font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="w-full max-w-6xl mx-auto pr-8">
          <p className="text-right text-xs text-muted-foreground font-sans font-medium">© 2025 Aditya Khurana.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
