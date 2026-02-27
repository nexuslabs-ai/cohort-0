# AI-Native Designer Cohort — Full Curriculum

Design it. Build it. Ship it. All with AI as your engine.

---

## At a Glance

**4 weeks. 12 sessions. From designer to Design Engineer.**

| | Focus | What You'll Learn | Tools | You'll Ship |
|---|-------|-------------------|-------|-------------|
| [**Week 1**](#week-1-ai-foundations--first-ship) | AI Foundations + First Ship | How AI tools work, how to connect them to your design tools | Claude, Cursor, V0, Bolt, Figma MCP, GitHub MCP | Your first live app |
| [**Week 2**](#week-2-prompting-frontend-and-git) | Prompting, Frontend, and Git | How to talk to AI effectively, how frontend code works, how to save and share your work | Rules files, shadcn/ui, Git, GitHub | Pull requests in a real codebase |
| [**Week 3**](#week-3-design-to-code--capstone-start) | Design-to-Code + Capstone Start | How to turn Figma designs into real code, how to work in existing projects | Figma Dev Mode, component architecture | Capstone frontend + coded components |
| [**Week 4**](#week-4-backend-capstone--demo-day) | Backend + Capstone + Demo Day | How your UI talks to a server, how to connect to an AI API | Vercel AI SDK, Claude API | A working AI chat app |

### Day-by-Day

| Day | Date | Session | What It Covers | Link |
|-----|------|---------|----------------|------|
| 1 | Sat Feb 28 | AI Landscape | Map out the AI tool ecosystem — Claude, GPT, open source models, AI editors (Cursor), AI terminals (Claude Code), and AI builders (V0, Bolt). Learn the mental models: context windows, hallucination, and when to reach for which tool. No coding yet — just building the right mental framework. | [Go to Day 1](#day-1--ai-landscape-sat-feb-28) |
| 2 | Sun Mar 1 | MCP + Setup | Connect AI to your real tools using MCP (Model Context Protocol). Set up Figma MCP so AI reads your designs, GitHub MCP so AI sees your code, and verify every tool from pre-work is installed. Hands-on troubleshooting to make sure nobody is stuck on Day 3. | [Go to Day 2](#day-2--mcp--setup-verification-sun-mar-1) |
| 3 | Wed Mar 4 | Ship Your First App | Your first live URL. Use an AI builder to create a simple app, iterate on it at least 3 times, push it to GitHub, deploy it on Vercel, and share it with real people. You collect feedback and bring learnings to Day 4. The full loop: idea to live product in one session. | [Go to Day 3](#day-3--ship-your-first-app-wed-mar-4) |
| 4 | Sat Mar 7 | Prompting + Rules | The session that separates this cohort from every other "designers learn to code" program. Learn structured prompting (context, intent, constraints, iteration), rules files (CLAUDE.md — a brand guide for your code), skills (reusable prompt workflows like /deploy), and subagents (how AI splits big tasks). Start every prompt with "make it responsive and accessible." | [Go to Day 4](#day-4--prompting--skills--rules--subagents-sat-mar-7) |
| 5 | Sun Mar 8 | Frontend Basics | Frontend code explained through design vocabulary. HTML is structure, CSS/Tailwind is style (like design tokens), React is behavior, Next.js is the framework. Deep dive into Tailwind (spacing, typography, color, responsive breakpoints) and React components mapped to Figma concepts (variants = props, interactions = state). Intro to shadcn/ui for pre-built accessible components. | [Go to Day 5](#day-5--frontend-basics-sun-mar-8) |
| 6 | Wed Mar 11 | Git + GitHub | Learn the full collaboration workflow by doing it repeatedly: clone a repo, create a branch, make a change, commit, push, open a Pull Request. Practice writing clear PR descriptions that engineers will actually read. By the end, Git feels like saving a file — not a scary terminal thing. AI handles the commands for you. | [Go to Day 6](#day-6--git--github-wed-mar-11) |
| 7 | Sat Mar 14 | Design with AI + Capstone | Master the Figma-to-code pipeline: design with code in mind (Tailwind spacing, real breakpoints, all interactive states), give your designs to AI (screenshots, descriptions, Dev Mode), and review AI's output against your Figma side-by-side. Then start the capstone: design a full AI chat interface in Figma with all states — chat layout, message bubbles, streaming, empty, error, and mobile. | [Go to Day 7](#day-7--design-with-ai--introduce-capstone-sat-mar-14) |
| 8 | Sun Mar 15 | Code with AI + Codebases | Two parts. First: the real-world skill — clone a project you've never seen, use AI to understand it, find the right component, make a visual change, and raise a PR. This is how you'll fix frontend bugs at work. Second: start building your capstone frontend from the Figma design — chat layout, message components, responsive sidebar. Static UI, no AI connection yet. | [Go to Day 8](#day-8--code-with-ai--existing-codebases-sun-mar-15) |
| 9 | Wed Mar 18 | Figma Components in Code | Take 5-8 components from your capstone Figma (message bubbles, chat input, sidebar nav, conversation list, loading indicator, error message, empty state, avatar) and build each one in code. Screenshot the Figma, prompt AI, check responsiveness and hover/focus states, compare against the design, iterate. Every component goes directly into your capstone project. | [Go to Day 9](#day-9--build-figma-components-in-code-wed-mar-18) |
| 10 | Sat Mar 21 | Backend Exposure | Demystify how your UI talks to an AI API. The backend is just a middleman: UI sends a message to a server, server sends it to Claude, Claude streams a response back. Live code-along: create an API route in Next.js, set up the API key with environment variables, send a test message, add streaming, handle errors. You don't memorize this — you understand the flow so AI can write it for you. | [Go to Day 10](#day-10--backend-exposure-sat-mar-21) |
| 11 | Sun Mar 22 | Connect Frontend to Backend | Everything comes together. Wire your capstone frontend (Days 8-9) to the backend (Day 10): chat input calls the API, AI responses stream into message bubbles, loading/error states work, messages auto-scroll, and the whole thing deploys to Vercel with a live URL. By the end, you have a working AI chat app anyone can use. When you get stuck, AI is your debugger. | [Go to Day 11](#day-11--connect-frontend-to-backend-sun-mar-22) |
| 12 | Wed Mar 25 | Demo Day + Graduation | Present your capstone (2-3 min each): show your live URL, walk through features, share one thing you're proud of and one thing that was hard. Cohort reflection on growth, workflow changes, and surprises. Post-cohort self-assessment to measure against Day 1. Commit to the 30-day shipping challenge: ship one thing at your company using what you learned. | [Go to Day 12](#day-12--demo-day--graduation-wed-mar-25) |

### Tools You'll Use

| Category | Tools |
|----------|-------|
| AI | [Claude](https://claude.ai), [Cursor](https://cursor.com), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [V0](https://v0.dev), [Bolt](https://bolt.new) |
| Development | [VS Code](https://code.visualstudio.com), [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) |
| Backend & Deploy | [Vercel](https://vercel.com), [Vercel AI SDK](https://sdk.vercel.ai), [GitHub](https://github.com) |
| Cohort | [Discord](https://discord.com), [Zoom](https://zoom.us), [Notion](https://notion.so) |

More details in the [Tool Stack](#tool-stack) and [Resources](#resources) sections.

---

## Objective

Turn designers into Design Engineers. Give you the tools, workflows, and confidence to go from designing interfaces to actually building and shipping them — with AI doing the heavy lifting.

## Who This Is For

Product designers in fast-moving teams who:
- Want to go beyond static design tools
- Work closely with frontend engineers
- Want to own parts of the UI, not just the mockups

**Before this cohort:** You design screens. You hand them off. You wait.
**After this cohort:** You design, build, and ship. You fix bugs. You raise PRs. You own features end-to-end.

### Prerequisites

- You know Figma
- You have a laptop with a browser
- You're willing to ship something imperfect and improve it later

### Philosophy

1. **Ship on day 1.** You deploy a live app by session 3 — not after weeks of theory.
2. **AI-first.** Every session uses AI as the main tool. You're not learning to code — you're learning to build with AI.
3. **Learn by doing.** Every week ends with something live on the internet.
4. **AI is your partner.** After this cohort, AI becomes your teacher, debugger, and guide for anything new.

---

## Cohort Structure

- **Duration:** 4 weeks
- **Sessions:** 12 total, 3 per week
- **Schedule:** Sat & Sun (12-2pm) learning + demos, Wed (9-11pm) hands-on building
- **Start date:** February 28, 2026
- **Tools:** Discord (community & help), Zoom (live sessions), Notion (resources & assessments)
- **Assessment:** Self-assessment before and after to measure your growth

### Weekly Rhythm

| Day | Type | What Happens |
|-----|------|--------------|
| Saturday | Learn | New concepts, mental models, live demos |
| Sunday | Learn | Deeper skills, hands-on demos |
| Wednesday | Build | Apply what you learned — you ship something |

---

## Pre-Work (before Day 1)

Get these set up before the first session so we can jump straight into learning.

### Tools to Install

- [ ] VS Code (code editor) or Cursor (AI code editor)
- [ ] Claude Code (AI terminal)
- [ ] Node.js (needed to run projects locally)
- [ ] Git (version control)
- [ ] GitHub account
- [ ] Vercel account (connected to GitHub)
- [ ] Figma (if not already installed)
- [ ] Claude Pro or API access

### MCP Setup (video guides provided)

MCP lets AI read your design files and code directly. Way better than copy-pasting screenshots.

- [ ] Figma MCP — AI reads your Figma files
- [ ] GitHub MCP — AI sees your codebase
- [ ] Notion MCP (optional) — AI reads your docs

### Self-Assessment

Rate your confidence (1-5) on each. You'll do this again on Day 12 to see how far you've come.

- [ ] Cloning a repo from GitHub
- [ ] Making changes to frontend code
- [ ] Deploying a site to a live URL
- [ ] Raising a pull request
- [ ] Using AI to write code
- [ ] Debugging an error in code
- [ ] Understanding how a React component works
- [ ] Navigating a codebase you didn't write

---

## Week 1: AI Foundations + First Ship

**Goal:** Understand how AI tools work, get everything connected, and ship your first live app.

---

### Day 1 — AI Landscape (Sat Feb 28)

*What are the different AI tools, and when do you use each one?*

#### What You'll Learn

**The big AI models:**

| Model | Made By | Best For |
|-------|---------|----------|
| **Claude** | Anthropic | Deep reasoning, great code quality — our primary AI for this cohort |
| **GPT** | OpenAI | Broad knowledge, fast, widely used |
| **Open source** (Llama, Mistral) | Meta, Mistral AI | Free and customizable |

**Two things to know about AI:**
- **Context window** — How much AI can "see" at once. More context = better results. This is why we connect AI to your tools instead of copy-pasting.
- **Hallucination** — AI sometimes makes things up. Always review what it gives you. This is normal — it's why we iterate.

**What AI is great at:** Writing code from your descriptions, explaining code, fixing bugs, generating variations, brainstorming ideas.

**What AI struggles with:** Pixel-perfect accuracy on the first try, understanding your business context (unless you tell it), and sometimes math.

**The three types of AI coding tools:**

| Type | Tools | What It Does |
|------|-------|-------------|
| **AI editors** | Cursor | AI lives inside your code editor. You describe what you want, it writes the code. |
| **AI terminals** | Claude Code | AI in your terminal. It reads your whole project, edits files, and runs commands. Great for bigger tasks. |
| **AI builders** | V0, Bolt, Lovable | You describe a UI or app, it generates the whole thing. Best for quick prototypes. |

**When to use what:**
- Need a quick component? V0
- Want a full prototype fast? Bolt or Lovable
- Working on a real project? Cursor or Claude Code
- Learning something new? Claude chat

#### Day 1 Milestone

- You can explain what AI coding tools are and how they differ
- You know when to reach for which tool

---

### Day 2 — MCP + Setup Verification (Sun Mar 1)

*How AI connects to your tools — and making sure everything works.*

#### What You'll Learn

**MCP (Model Context Protocol)** is what lets AI talk directly to your tools. Instead of screenshotting your Figma and pasting it into a chat, MCP lets AI read your Figma files, your code, and your docs on its own. Better context in = better output out.

**Two types:**

| Type | How It Works | Example |
|------|-------------|---------|
| **Remote** | AI connects to a cloud service | Figma MCP, Notion MCP |
| **Local** | AI connects to tools on your machine | GitHub MCP |

**What you'll connect:**

| Connection | What It Does |
|-----------|-------------|
| **Figma MCP** | AI reads your designs — components, tokens, layouts |
| **GitHub MCP** | AI sees your code, PRs, and issues |
| **Notion MCP** | AI reads your docs |

**Session flow:**
1. Verify everything from pre-work is installed (15 min)
2. Learn how MCP works (30 min)
3. Hands-on: verify your connections work (45 min)
4. Troubleshooting and Q&A (30 min)

#### Day 2 Milestone

- All tools installed and working
- At least one MCP connection verified
- You understand why giving AI more context makes it better

---

### Day 3 — Ship Your First App (Wed Mar 4)

*Build something and put it on the internet. Your first live URL.*

#### What You'll Build

A simple app — a to-do list, a utility, anything. The point isn't to build something complex. The point is to go from nothing to a live URL.

**The workflow:**
1. Tell AI what you want to build
2. Iterate on what it gives you (at least 3 rounds)
3. Push to GitHub
4. Deploy on Vercel
5. Share your live URL

#### Homework (before Day 4)

**Publish something live and get feedback.** Share your app with friends, family, or colleagues. Pay attention to:
- What confused them?
- What did they try to do that didn't work?
- What did they say about it?

Write up your learnings and insights and share them with the cohort.

#### Day 3 Milestone

- You have a live URL that anyone can visit
- You iterated at least 3 times after the first version
- You shared it with real people and collected feedback

---

## Week 2: Prompting, Frontend, and Git

**Goal:** Learn to talk to AI effectively, understand how frontend code works, and start using Git.

---

### Day 4 — Prompting + Skills + Rules + Subagents (Sat Mar 7)

*This is the session that makes this cohort different from every other "designers learn to code" program.*

#### Start: Day 3 Feedback Discussion (10 min)

What did people say when they used your app? This is the ship-feedback-iterate loop you'll use for everything.

#### What You'll Learn

**How to prompt AI for code — the most important skill in this cohort:**

Bad prompt: "Make a navbar"

Good prompt: "Build a responsive navigation bar for a portfolio site. Logo on the left, 4 nav links centered, dark mode toggle on the right. Use Tailwind CSS. On mobile, collapse into a hamburger menu. Make it sticky with a backdrop blur. Make it responsive and accessible."

**The pattern:** Context (what's the project) -> Intent (what do you want) -> Constraints (how should it work) -> Iteration (refine it)

**Key habits:**
- Tell AI about the whole project, not just one component
- Always say "make it responsive and accessible" — this becomes automatic
- Your first prompt is a starting point. You'll always iterate.
- Reference what already exists: "match the style of the hero section"

**Rules files — a brand guide for your code:**
Every AI tool lets you set project-level instructions. In Claude Code, it's a file called `CLAUDE.md`. It tells AI your tech stack, naming conventions, and patterns. Set it up once, and every prompt automatically follows your standards.

**Skills — reusable workflows:**
Instead of typing a long prompt every time, save it as a command like `/deploy` or `/review-code`.

**Subagents — how AI handles big tasks:**
When you ask AI to build something complex, it can split the work into parts — one part researches, another writes code, another tests. Knowing this helps you ask for things in a way AI can handle well.

#### Day 4 Milestone

- You can write clear, detailed prompts that get great results
- You understand rules files, skills, and subagents
- "Responsive and accessible" is in every prompt

---

### Day 5 — Frontend Basics (Sun Mar 8)

*How frontend code works — explained in design terms. This isn't a computer science lecture.*

#### What You'll Learn

**The mental model — it's simpler than you think:**
- **HTML** = structure (what things are — a heading, a button, a list)
- **CSS / Tailwind** = style (how things look — colors, spacing, fonts)
- **React** = behavior (how things respond — clicks, toggles, form input)
- **Next.js** = the framework that holds it all together (pages, routing, deployment)

**Tailwind CSS — this will feel familiar:**

Tailwind works like design tokens. Instead of writing traditional CSS, you use short class names:

| What You Know | Tailwind | Example |
|---------------|----------|---------|
| Padding | `p-4`, `px-6` | Same spacing scale you use in Figma |
| Font size | `text-sm`, `text-lg` | Typography scale |
| Color | `bg-blue-500`, `text-gray-900` | Color system |
| Layout | `flex`, `grid`, `gap-4` | Flexbox and grid |
| Responsive | `md:flex-row`, `lg:text-xl` | Different styles at different screen sizes |

**React components — just like Figma components:**

| In Figma | In React |
|----------|----------|
| Component | Component |
| Variants | Props |
| Interactions | State |
| Instance | Usage |

A Button in React can have `size="large"`, `variant="primary"`, `disabled={true}` — just like Figma variants.

**shadcn/ui — pre-built components you'll use a lot:**
Ready-made, accessible UI components built with Tailwind. Instead of building a dialog from scratch, you install one that already handles keyboard navigation and accessibility. Then you style it however you want.

**What you don't need to worry about:**
- How Node.js works internally
- TypeScript details
- Package manager internals
- If something breaks with a missing package, just tell AI to fix it

#### Day 5 Milestone

- You understand how Tailwind maps to your design thinking
- You can explain React components using Figma terms
- You know where files go in a project

---

### Day 6 — Git + GitHub (Wed Mar 11)

*How to save your work, share it, and deploy. You'll learn by doing, not memorizing.*

#### What You'll Learn

**Git** saves snapshots of your code. If something breaks, you can go back to a version that worked.

**GitHub** is where your code lives online. It's also how you deploy — push to GitHub, and Vercel automatically puts it live.

**The commands that matter:**

| Command | What It Does | Think of It As |
|---------|-------------|----------------|
| `git add .` | Stage your changes | "I want to save these files" |
| `git commit -m "message"` | Save a snapshot | "Save my game" |
| `git push` | Upload to GitHub | "Sync to the cloud" |
| `git pull` | Download changes | "Get the latest version" |
| `git branch feature-name` | Create a branch | "Make a copy so I don't break the original" |
| `git checkout branch-name` | Switch branches | "Switch to a different copy" |

**You don't need to memorize these.** AI handles Git for you. In Claude Code, just say "commit my changes" or "create a branch for the new feature."

#### Exercise

1. Clone a repo
2. Create a branch
3. Make a change
4. Commit and push
5. Open a Pull Request
6. Repeat until it feels natural

#### Writing Good PRs

When you raise a PR at your company, engineers will read it. Make it easy for them:

**Good:** "Updated hero section padding and font sizes to match new Figma specs. Check on mobile (375px) and desktop (1440px)."

**Bad:** "Updated styles"

#### Day 6 Milestone

- You've gone through the full clone-branch-change-commit-push-PR flow multiple times
- You can write a clear PR description
- Git doesn't scare you anymore

---

## Week 3: Design-to-Code + Capstone Start

**Goal:** Master turning Figma designs into real code. Start building your capstone project.

---

### Day 7 — Design with AI + Introduce Capstone (Sat Mar 14)

*The core workflow: Figma design -> AI -> live code. Plus: your capstone starts here.*

#### The Design-to-Code Pipeline

```
Design in Figma -> Tell AI what to build -> Review and iterate -> Deploy
```

**Design with code in mind:**
- Use Tailwind's spacing scale (multiples of 4px — you probably already do this)
- Pick web-safe or Google Fonts
- Design at real breakpoints: mobile (375px), tablet (768px), desktop (1440px)
- Think about states: default, hover, focus, loading, empty, error

**How to give your designs to AI:**
- Screenshot your Figma and paste it directly into Claude or Cursor — "build this"
- Use Figma Dev Mode when you need exact values
- Describe what you want, not pixel measurements — "a card with image, title, description, and CTA" beats "a box that's 340px wide with 16px padding"

**How to review AI's output:**
- Put Figma and browser side by side
- Check spacing, type, colors, responsiveness, and interactive states
- Give specific feedback: "padding is too large on mobile" not "it looks wrong"

#### Capstone Project: Build a ChatGPT/Claude-like Interface

Your capstone for the rest of the cohort: **design, build, and ship your own AI chat interface.**

**Today's task:** Design the full UI in Figma.

What to design:
- Chat layout (sidebar, message area, input field)
- Message bubbles (user messages vs AI responses)
- Loading/streaming state (AI is typing)
- Empty state (no messages yet)
- Input area with send button
- Error state
- Mobile version

This Figma file is your blueprint for everything you build in Days 8-11.

#### Day 7 Milestone

- You understand the Figma-to-code workflow
- Your capstone UI is designed in Figma with all key states
- You're designing with responsiveness and accessibility in mind

---

### Day 8 — Code with AI + Existing Codebases (Sun Mar 15)

*Build the capstone frontend. Learn to work in code you didn't write — the skill that matters most at your job.*

#### Part 1: Working in Existing Projects

At work, you won't build everything from scratch. You'll open a project with hundreds of files you've never seen. This is where AI really shines.

**Exercise:**

1. Clone the sample project we provide (a real Next.js app)
2. Ask AI: "Explain this codebase. What does each folder do?"
3. Find a specific component
4. Make a visual change to match a Figma spec
5. Raise a PR

**This is how you'll fix frontend bugs at your company.** Clone the repo. Ask AI where to find the right component. Make the change. Push. PR. Done.

#### Part 2: Build the Capstone Frontend

Take your Figma design from Day 7 and start building:
- Chat layout (sidebar, messages, input)
- Message components (user and AI bubbles)
- Static version for now — no AI connection yet
- Responsive layout (sidebar collapses on mobile)

#### Day 8 Milestone

- You navigated and changed code in a project you didn't write
- Your capstone frontend shell is built
- You used AI to understand unfamiliar code

---

### Day 9 — Build Figma Components in Code (Wed Mar 18)

*Take your Figma components and make them real. Everything goes into your capstone.*

#### What You'll Build

Pick 5-8 components from your capstone Figma design and build them in code:

1. Message bubble (user + AI variants)
2. Chat input with send button
3. Sidebar nav item
4. Conversation list item
5. Loading/streaming indicator
6. Error message
7. Empty state
8. Avatar

**For each one:**
1. Screenshot or describe the Figma component
2. Ask AI to build it
3. Make sure it's responsive and handles hover/focus states
4. Compare against Figma and iterate
5. Put it in your project's components folder

These aren't random exercises — every component feeds directly into your capstone.

#### Day 9 Milestone

- 5+ components built in code
- They match your Figma designs
- They're responsive and well-organized in your project

---

## Week 4: Backend, Capstone + Demo Day

**Goal:** Connect your UI to a real AI, finish the capstone, and present your work.

---

### Day 10 — Backend Exposure (Sat Mar 21)

*Just enough backend to make your capstone work. Your superpower is still the frontend.*

#### What You'll Learn

**How your UI talks to AI — it's simpler than it sounds:**

When you type a message in ChatGPT and hit send:
1. Your UI sends the message to a server
2. The server sends it to the AI
3. The AI responds, streaming text back
4. Your UI shows the response in real time

That's it. The backend is just the middleman.

**You don't need a separate server.** Next.js lets you write the backend code in the same project as your frontend.

**Environment variables** keep your API keys secret. They go in a `.env` file that never gets uploaded.

**Vercel AI SDK** handles the hard parts — streaming responses, error handling, all of it.

#### Live Code-Along

Everyone follows along as we build the capstone backend together:
1. Create the API route that talks to Claude
2. Set up the API key
3. Send a test message
4. Add streaming (text appears word by word)
5. Handle errors

**You don't need to memorize any of this.** AI will write this code for you. You just need to understand the flow.

#### Day 10 Milestone

- You understand how your UI talks to the AI
- You followed along building the backend
- You can explain the flow, even if you can't write it from memory

---

### Day 11 — Connect Frontend to Backend (Sun Mar 22)

*Everything comes together. Connect your UI to the AI and deploy.*

#### What You'll Build

Wire up the frontend (Days 8-9) to the backend (Day 10):

1. **Chat input works** — type a message, it calls your API
2. **AI responses appear** — streaming text in the AI message bubble
3. **States work** — loading, success, error all handled
4. **Messages stack** — conversation flows naturally, auto-scrolls
5. **Deploy to Vercel** — add your API key, push, get a live URL

#### Everyone Ships

By the end of this session, you should have:
- A live URL anyone can visit
- A working AI chat interface
- Real AI responses streaming in
- Error handling
- Works on mobile

This is your capstone. This is what you present on Day 12.

**When you get stuck**, AI is your debugging partner. Paste the error, explain what you expected, and ask for help. This is the most important skill — using AI to unblock yourself.

#### Day 11 Milestone

- Frontend connected to backend
- AI responses streaming in real time
- All states working
- Deployed with a live URL
- Tested on mobile

---

### Day 12 — Demo Day + Graduation (Wed Mar 25)

*Show your work. See how far you've come.*

#### Demo Day

**Capstone Demos (60 min)**

Each person presents (2-3 min):
- Show your live URL
- Walk through the key features
- One thing you're proud of
- One thing that was hard

Everyone gives feedback — what stood out, what could be better.

**Cohort Reflection (30 min)**

- How has this changed your daily workflow?
- How have you grown as a designer?
- Has anyone used this at work yet?
- What surprised you?

**What's Next (20 min)**

- Resources for continued learning
- 30-day challenge: ship one thing at your company using what you learned

**Post-Cohort Assessment (10 min)**

Take the same self-assessment from Day 1. Compare your before and after.

#### Day 12 Milestone

- You presented your capstone
- You got feedback from your peers
- You completed the post-cohort assessment
- You committed to the 30-day shipping challenge

---

## Tool Stack

### AI Tools

| Tool | What It Does | When to Use It |
|------|-------------|----------------|
| [Cursor](https://www.cursor.com) | AI code editor | Your main development environment |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | AI terminal | Bigger tasks, debugging, multi-file changes |
| [Claude](https://claude.ai) | AI chat | Learning, planning, brainstorming |
| [V0](https://v0.dev) | AI UI generator | Quick component prototyping |
| [Bolt](https://bolt.new) | AI app builder | Rapid full app prototypes |

### Development

| Tool | What It Does |
|------|-------------|
| [VS Code](https://code.visualstudio.com) | Code editor |
| [Next.js](https://nextjs.org) | The framework everything runs on |
| [Tailwind CSS](https://tailwindcss.com) | Styling (works like design tokens) |
| [shadcn/ui](https://ui.shadcn.com) | Pre-built accessible components |

### Backend & Deployment

| Tool | What It Does |
|------|-------------|
| [Vercel](https://vercel.com) | Hosting and deployment |
| [Vercel AI SDK](https://sdk.vercel.ai) | Makes streaming AI responses easy |
| [GitHub](https://github.com) | Where your code lives, how you deploy |

---

## Resources

| Resource | Type | When |
|----------|------|------|
| [Anthropic Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering) | Docs | Day 4 |
| [Tailwind CSS Docs](https://tailwindcss.com/docs) | Reference | Day 5+ |
| [shadcn/ui](https://ui.shadcn.com) | Components | Day 5+ |
| [Next.js Learn](https://nextjs.org/learn) | Tutorial | Day 5+ |
| [MCP Documentation](https://modelcontextprotocol.io) | Docs | Day 2 |
| [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code) | Docs | Day 1-2 |
| [Vercel AI SDK](https://sdk.vercel.ai/docs) | Docs | Day 10-11 |
| [GitHub Skills](https://skills.github.com) | Tutorial | Day 6 |
| [Oh Shit, Git!?!](https://ohshitgit.com) | Reference | When things go wrong |

---

## What You'll Be Able to Do

| Goal | How You'll Know |
|------|----------------|
| Move faster | You can go from Figma change to live URL in under 30 minutes |
| Prototype in code | You have a deployed capstone with a live URL |
| Fix UI bugs | You've navigated and changed code in a project you didn't write |
| Own features | You've built components and features on your own using AI |
| Keep learning | You can use AI to debug, learn, and unblock yourself on anything new |
