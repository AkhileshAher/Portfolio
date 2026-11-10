
import { useEffect, useState } from 'react';
import avatarImg from '../assets/logo.png';

const SKILLS = [
// Backend
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#E76F00',
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    color: '#6DB33F',
  },
  {
    name: 'Hibernate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
    color: '#59666C',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
  },

// Frontend
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#00D8FF',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572B6',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933',
  },

// Database
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479A1',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248',
  },
  {
    name: 'Redis',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    color: '#DC382D',
  },

// DevOps & Cloud
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ED',
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
    color: '#326CE5',
  },
  {
    name: 'Jenkins',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    color: '#D24939',
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    color: '#FCC624',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#FFFFFF',
  },
];

export default function PortfolioSkillLoader() {
  const radius = 175;
  const [progress, setProgress] = useState(0);

  const size = 220;
  const stroke = 5;
  const circleRadius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * circleRadius;

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let frameId;

    const animate = (now) => {
      const elapsed = now - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (percentage < 100) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-white overflow-hidden">

      {/* Orbit Container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: radius * 2.5,
          height: radius * 2.5,
        }}
      >

        {/* Orbit Ring */}
        <div
          className="absolute rounded-full border border-dashed border-slate-300"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />

        {/* Rotating Skills */}
        <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">

          {SKILLS.map((skill, index) => {
            const angleDeg = (index * 360) / SKILLS.length;
            const angleRad = (angleDeg * Math.PI) / 180;

            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 -ml-7 -mt-7"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Counter Rotation */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center animate-[spin_35s_linear_infinite_reverse] hover:scale-125 transition-transform">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    title={skill.name}
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Avatar + Circular Progress */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          {/* Circular Progress SVG */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 -rotate-90"
          >
            {/* Background Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={circleRadius}
              fill="none"
              stroke="#E9D5FF"
              strokeWidth={stroke}
            />

            {/* Animated Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={circleRadius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                filter: 'drop-shadow(0 0 6px #A855F7)',
              }}
            />

            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Avatar */}
          <div className="w-44 h-44 rounded-full flex items-center justify-center bg-white overflow-hidden shadow-xl">
            <img
              src={avatarImg}
              alt="Developer Avatar"
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Percentage */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
          <span className="text-lg font-bold text-purple-600 tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>

      </div>
    </div>
  );
}
