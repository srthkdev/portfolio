export const experiences = [
  {
    company: "Sidecar",
    role: "Founding AI Engineer",
    range: "Current",
    description:
      "Own the AI harness end to end: context, tools, retries, guardrails and evals. Build the reranking, classification and extraction pipelines that run in production.",
    skills: ["AI Harnesses", "Evals", "Reranking", "Classification", "Extraction", "Python"],
  },
  {
    company: "Prime Intellect",
    role: "Open Source",
    range: "2025",
    description:
      "Contributions to verifiers, their library for RL environments and evals, and a LegalBench environment for prime-environments, merged through their bounty program.",
    skills: ["RL Environments", "Evals", "Python"],
  },
  {
    company: "Freelance",
    role: "Software Developer",
    range: "2024",
    description:
      "I work with clients to understand their business needs and provide technical solutions to help them achieve their goals.",
    skills: ["Full Stack Development", "Devops", "AI Agents"],
  },
];

export const projects = [
  {
    name: "omnisql-mcp",
    description:
      "MCP server that gives Claude Code, Codex and OpenCode access to your databases: Postgres, MySQL, SQLite, SQL Server, Oracle, DuckDB and ClickHouse. 88 stars on GitHub.",
    tech: ["TypeScript", "MCP"],
    links: [
      { label: "Code", href: "https://github.com/srthkdev/omnisql-mcp" },
      { label: "npm", href: "https://www.npmjs.com/package/omnisql-mcp" },
    ],
  },
  {
    name: "qddot",
    description:
      "Playwright for robot code. Coding agents run their controllers in MuJoCo, check them against signal temporal logic specs and debug failures before calling a task done.",
    tech: ["Python", "MuJoCo", "MCP", "DuckDB"],
    links: [{ label: "Code", href: "https://github.com/srthkdev/qddot" }],
  },
];

export const hackathons = [
  {
    name: "SynergySphere",
    description: "Project management suite with an AI agent. Winner, IITM x Odoo hackathon.",
    tech: ["Next.js", "LangGraph", "OpenAI", "Drizzle", "Neon Postgres"],
    links: [{ label: "Code", href: "https://github.com/srthkdev/SynergySphere" }],
  },
  {
    name: "Mindmap AI",
    description: "AI mind mapping app. Won $2,000 at Modus x Hashnode.",
    tech: ["Next.js", "Modus"],
    links: [
      { label: "Live", href: "https://mindmapai-modus.vercel.app/" },
      { label: "Code", href: "https://github.com/srthkdev/mindmap-frontend" },
    ],
  },
  {
    name: "Flux",
    description:
      "AI-native form builder with agents, multi-step tool use and memory. Won $1,000 at the Agno agents hackathon.",
    tech: ["Next.js", "Agno", "Gemini", "Postgres"],
    links: [
      { label: "Live", href: "https://fluxai-agents.vercel.app/" },
      { label: "Code", href: "https://github.com/srthkdev/flux" },
    ],
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
    category: "AI",
    items: ["Evals", "RL Environments", "Reward Design", "Retrieval", "Reranking", "Classification", "Structured Extraction", "Fine-tuning", "Distillation", "Agent Harnesses", "PyTorch"]
  }
];
