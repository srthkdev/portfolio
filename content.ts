export const experiences = [
  {
    company: "Freelance",
    role: "Software Developer",
    range: "2024 - Current",
    description:
      "I work with clients to understand their business needs and provide technical solutions to help them achieve their goals.",
    skills: ["Full Stack Development", "Devops", "AI Agents"],
  },
];

export const Status = {
  none: "none",
  progress: "progress",
  completed: "completed",
} as const;

export const photos = [
  {
    src: "/images/image.jpg",
    alt: "Cracked",
  },
  {
    src: "/images/anothernight.jpg",
    alt: "Another Night",
  },
  {
    src: "/images/light.gif",
    alt: "light",
  },
  {
    src: "/images/dr stone.jpg",
    alt: "Dr. Stone anime",
  },
];

export const bucketList = [
  {
    item: "Run a marathon",
    status: Status.none,
  },
];

export const beliefs = [
  "I believe in the power of technology to change the world.",
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Javascript", "Typescript", "Java", "Python"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "ShadCN UI", "Framer Motion", "Redux", "Zustand", "SWR", "Tanstack", "React Hook Form", "Zod", "Vue.js"]
  },
  {
    category: "DevOps",
    items: [ "Bash" ,"Shell Scripting", "Docker", "Git/Github", "AWS", "Azure", "Vercel", "Cloudflare", "Digital Ocean"]
  },
  {
    category: "Backend",
    items: ["Express.js", "Fastapi", "Flask","Node.js", "Bun", "PostgreSQL", "Prisma", "Drizzle", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Celery", "NeonDB", "Supabase"]
  },
  {
    category: "ML",
    items: ["Scikit-learn", "NumPy", "Pandas", "PyTorch", "Langchain", "AI Agents", "Huggingface", "Transformers", "LlamaIndex", "RAG", ]
  }
];
