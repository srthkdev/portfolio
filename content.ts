export const experiences = [
  {
    company: "Sidecar",
    role: "Founding AI Engineer",
    range: "Current",
    description:
      "Own the AI harness end to end: what goes into the model's context, which tools it can call, when it retries, the guardrails around it, and the evals that tell us a change actually helped. Build the reranking, classification and extraction pipelines that run in production.",
    skills: ["AI Harnesses", "Evals", "Reranking", "Classification", "Extraction", "Python"],
  },
  {
    company: "Prime Intellect",
    role: "Open Source",
    range: "2025",
    description:
      "Contributed to verifiers, their library for RL environments and evals: a math rubric, judge error handling, evaluation logging and fixes across environment loading and datasets. Built a LegalBench environment for prime-environments, merged through their bounty program.",
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

export type Project = {
  name: string;
  highlight?: string;
  description: string;
  points: string[];
  tech: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "omnisql-mcp",
    highlight: "88 stars",
    description:
      "MCP server that gives Claude Code, Codex and OpenCode access to the databases you already use.",
    points: [
      "Postgres, MySQL, SQLite, SQL Server, Oracle, DuckDB and ClickHouse through native drivers, plus Postgres-compatible engines like Neon, Supabase and CockroachDB.",
      "Reuses saved DBeaver connections, including SSH settings, so agents query with credentials you already manage.",
      "Read-only mode, connection allowlists and per-tool disabling, enforced in the server. One command sets up each client.",
    ],
    tech: ["TypeScript", "MCP", "Node DB drivers"],
    links: [
      { label: "Code", href: "https://github.com/srthkdev/omnisql-mcp" },
      { label: "npm", href: "https://www.npmjs.com/package/omnisql-mcp" },
    ],
  },
  {
    name: "qddot",
    description:
      "Playwright for robot code: a local physics loop that lets coding agents run, check and debug controllers before claiming a task is done.",
    points: [
      "Tasks carry measurable specs as signal temporal logic, with a signed robustness margin and the exact time window that failed.",
      "Records signals and contact events, explains likely causes, and fuzzes runs with seeded perturbations.",
      "On an ALOHA bimanual handover, the same agent passed 3/3 seeds with qddot and 0/3 without it.",
    ],
    tech: ["Python", "MuJoCo", "MCP", "DuckDB"],
    links: [{ label: "Code", href: "https://github.com/srthkdev/qddot" }],
  },
];

export const hackathons: Project[] = [
  {
    name: "SynergySphere",
    highlight: "Winner",
    description: "Project management suite with an AI agent. IITM x Odoo hackathon.",
    points: [
      "Projects, tasks and team chat, with an AI assistant that answers questions about your workspace through a text-to-SQL tool.",
    ],
    tech: ["Next.js", "LangGraph", "OpenAI", "Drizzle", "Neon Postgres"],
    links: [{ label: "Code", href: "https://github.com/srthkdev/SynergySphere" }],
  },
  {
    name: "Mindmap AI",
    highlight: "$2,000",
    description: "Turns complex problems into mind maps you can explore. Modus x Hashnode hackathon.",
    points: [],
    tech: ["Next.js", "Modus"],
    links: [
      { label: "Live", href: "https://mindmapai-modus.vercel.app/" },
      { label: "Code", href: "https://github.com/srthkdev/mindmap-frontend" },
    ],
  },
  {
    name: "Flux",
    highlight: "$1,000",
    description: "AI-native form builder. Agno agents hackathon.",
    points: [
      "Describe a form and agents build it, wire the logic and connect responses to insights, using multi-step tool use and memory.",
    ],
    tech: ["Next.js", "Agno", "Gemini", "Postgres"],
    links: [
      { label: "Live", href: "https://fluxai-agents.vercel.app/" },
      { label: "Code", href: "https://github.com/srthkdev/flux" },
    ],
  },
];

const VF = "https://github.com/PrimeIntellect-ai/verifiers";

export const openSource = [
  {
    repo: "verifiers",
    href: VF,
    note: "Prime Intellect's library for RL environments and evals.",
    prs: [
      { label: "math rubric", href: `${VF}/pull/263` },
      { label: "judge error handling", href: `${VF}/pull/291` },
      { label: "eval logging", href: `${VF}/pull/262` },
      { label: "TUI markup escaping", href: `${VF}/pull/273` },
      { label: "all merged PRs", href: `${VF}/pulls?q=is%3Apr+author%3Asrthkdev+is%3Amerged` },
    ],
  },
  {
    repo: "prime-environments",
    href: "https://github.com/PrimeIntellect-ai/prime-environments",
    note: "A LegalBench environment, merged through their bounty program.",
    prs: [
      { label: "legalbench env", href: "https://github.com/PrimeIntellect-ai/prime-environments/pull/180" },
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
