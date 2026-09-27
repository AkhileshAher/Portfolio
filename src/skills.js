const devicon = (name, file = `${name}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}`;

const skill = (name, icon = null) => ({ name, icon });

export const skillGroups = [
  {
    name: "Frontend",
    detail: "Interfaces & experiences",
    skills: [
      skill("HTML", devicon("html5")),
      skill("CSS", devicon("css3")),
      skill("JavaScript", devicon("javascript")),
      skill("Tailwind CSS", devicon("tailwindcss")),
      skill("Bootstrap", devicon("bootstrap")),
      skill("Sass", devicon("sass")),
      skill("React", devicon("react")),
      skill("Redux", devicon("redux")),
    ],
  },
  {
    name: "Backend",
    detail: "APIs, messaging & data",
    skills: [
      skill("Spring Boot", devicon("spring")),
      skill("Spring", devicon("spring")),
      skill("Node.js", devicon("nodejs")),
      skill("Express.js", devicon("express")),
      skill("Kafka", devicon("apachekafka")),
      skill("RabbitMQ", devicon("rabbitmq")),
      skill("Redis", devicon("redis")),
      skill("Nginx", devicon("nginx")),
      skill("MongoDB", devicon("mongodb")),
      skill("PostgreSQL", devicon("postgresql")),
      skill("MySQL", devicon("mysql")),
    ],
  },
  {
    name: "Programming languages",
    detail: "The fundamentals",
    skills: [
      skill("Java", devicon("java")),
      skill("JavaScript", devicon("javascript")),
      skill("Shell scripting", devicon("bash")),
    ],
  },
  {
    name: "Version control & DevOps",
    detail: "Build, ship, automate",
    skills: [
      skill("Git", devicon("git")),
      skill("GitHub", devicon("github")),
      skill("Docker", devicon("docker")),
      skill("Kubernetes", devicon("kubernetes")),
      skill("GitHub Actions", devicon("githubactions")),
      skill("Jenkins", devicon("jenkins")),
      skill("Terraform", devicon("terraform")),
      skill("AWS", devicon("amazonwebservices", "amazonwebservices-original-wordmark.svg")),
    ],
  },
  {
    name: "Tools & platforms",
    detail: "Daily development toolkit",
    skills: [
      skill("IntelliJ IDEA", devicon("intellij")),
      skill("VS Code", devicon("vscode")),
      skill("Eclipse", devicon("eclipse")),
      skill("Figma", devicon("figma")),
      skill("Cursor"),
      skill("Antigravity"),
    ],
  },
  {
    name: "Operating systems",
    detail: "The environments I work in",
    skills: [skill("Linux", devicon("linux")), skill("macOS"), skill("Windows")],
  },
  {
    name: "System design & distributed systems",
    detail: "Designing for scale",
    skills: [
      skill("System design"),
      skill("Distributed systems"),
      skill("Microservices"),
      skill("Kafka", devicon("apachekafka")),
      skill("RabbitMQ", devicon("rabbitmq")),
      skill("Redis", devicon("redis")),
      skill("Nginx", devicon("nginx")),
    ],
  },
];

export const allSkills = [
  ...new Map(skillGroups.flatMap((group) => group.skills).map((item) => [item.name, item])).values(),
];
