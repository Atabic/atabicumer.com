import { Icons } from "@/components/icons";
import { Aws } from "@/components/ui/svgs/aws";
import { Docker } from "@/components/ui/svgs/docker";
import { Gcp } from "@/components/ui/svgs/gcp";
import { GithubActions } from "@/components/ui/svgs/githubActions";
import { NestJs } from "@/components/ui/svgs/nestjs";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nginx } from "@/components/ui/svgs/nginx";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Playwright } from "@/components/ui/svgs/playwright";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { WebdriverIo } from "@/components/ui/svgs/webdriverio";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Atabic Umer",
  initials: "AU",
  url: "https://atabicumer.com",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "Full-stack engineer (TypeScript, React, Node, AWS) who builds production web apps and the MCP servers and AI plugins that automate the boring parts of engineering work.",
  summary:
    "Most of my recent work is building MCP servers, AI plugins, small backend services that let tools like Claude and Cursor safely read and act on real internal systems. ERP-MCP, below, is the clearest example.\n\nThat sits on top of about six years as a full-stack engineer, currently leading the Live Ops admin dashboard for Merit Incentives, plus past work for clients like Kayak, Avetta, and Curriki. Projects and experience below go into the specifics.\n\nBased in Lahore, Pakistan. Open to remote work.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: NestJs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "AWS", icon: Aws },
    { name: "GCP", icon: Gcp },
    { name: "Docker", icon: Docker },
    { name: "NGINX", icon: Nginx },
    { name: "GitHub Actions", icon: GithubActions },
    { name: "Playwright", icon: Playwright },
    { name: "WebdriverIO", icon: WebdriverIo },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "atabicumer@gmail.com",
    tel: "+923204077095",
    calendly: "https://calendly.com/atabic",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/atabic-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/atabic-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/atabic-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:atabicumer@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Arbisoft",
      href: "https://arbisoft.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Principal Software Engineer",
      logoUrl: "/arbisoft.png",
      start: "December 2025",
      end: "Present",
      description:
        "Lead full-stack development of the Live Ops admin dashboard for a global loyalty and rewards platform (160+ countries) and own its end-to-end release process. Built ERP-MCP, an MCP server exposing internal ERP workflows to LLM tools, and delivered enterprise Okta SAML SSO for compliance reporting. Details on both in Projects below.",
    },
    {
      company: "Arbisoft",
      href: "https://arbisoft.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Senior Software Engineer",
      logoUrl: "/arbisoft.png",
      start: "December 2022",
      end: "December 2025",
      description:
        "Owned the complete frontend architecture (Next.js, React, TypeScript), defining coding standards, component patterns, and release ownership across the product. Managed the full AWS deployment lifecycle (EC2, S3, CodeDeploy) and built GitHub Actions CI/CD to automate testing, merges, and production deployments. Configured NGINX reverse proxy for multi-tenant subdomain routing. Built real-time 1:1 and group chat via StompJS, integrated Firebase Cloud Messaging for push notifications, and established observability with Sentry, Vitest, and Playwright.",
    },
    {
      company: "Arbisoft",
      href: "https://arbisoft.com",
      badges: [],
      location: "Lahore, Pakistan",
      title: "Software Engineer",
      logoUrl: "/arbisoft.png",
      start: "July 2022",
      end: "December 2022",
      description:
        "Shipped releases for Kayak's hotels vertical across distributed teams and put a canary/smoke/sanity test strategy in place that doubled automated coverage. More on this in Projects below.",
    },
    {
      company: "Nextbridge Ltd.",
      badges: [],
      href: "https://nextbridge.com",
      location: "Lahore, Pakistan",
      title: "Software Engineer",
      logoUrl: "/nextbridge.jpeg",
      start: "January 2022",
      end: "July 2022",
      description:
        "Drove frontend quality on the Curriki LMS, coding standards, code reviews, and TDD adoption with Jest and Playwright, and built GitHub Actions pipelines for linting, testing, and staging deployments.",
    },
    {
      company: "Nextbridge Ltd.",
      badges: [],
      href: "https://nextbridge.com",
      location: "Lahore, Pakistan",
      title: "Associate Software Engineer",
      logoUrl: "/nextbridge.jpeg",
      start: "January 2021",
      end: "January 2022",
      description:
        "Converted the LMS to a multi-tenant architecture with ACL-based permissions and migrated the legacy PHP admin panel to React. More on this in Projects below.",
    },
    {
      company: "Xeon Technologies",
      badges: [],
      href: "",
      location: "Lahore, Pakistan",
      title: "Back End Developer",
      logoUrl: "",
      start: "September 2019",
      end: "August 2020",
      description:
        "Designed and shipped production-ready REST APIs (Node.js, Express) connecting web and mobile clients to backend services. Optimized queries across PostgreSQL and MongoDB, cutting response times by roughly 40% under high load. Implemented JWT authentication, role-based access control, and rate limiting. Set up automated API testing (Jest, Supertest), raising coverage from 20% to 75%, and integrated Sentry and New Relic monitoring.",
    },
  ],
  education: [
    {
      school: "University of the Punjab",
      href: "https://pu.edu.pk",
      degree: "Bachelor's Degree, Information Technology (BSIT)",
      logoUrl: "/buildspace.jpg",
      start: "2016",
      end: "2020",
    },
  ],
  aiProjects: [
    {
      title: "ERP-MCP",
      href: "",
      dates: "2025, Present",
      active: true,
      description:
        "Our internal ERP handled project logging, leave requests, and operational reporting through forms that took real time to fill out across 800+ people. I built ERP-MCP, a Model Context Protocol server in Python and FastAPI, that exposes those same workflows as tools an LLM can call, with scoped authentication and endpoints designed to be extended as new workflows come up. Now someone can ask Claude, Cursor, or ChatGPT to file a leave request or pull a report, and the assistant calls the ERP directly. It cut manual form-based work by roughly 60% company-wide. Internal tool, so no public repo, happy to walk through the architecture on a call.",
      technologies: ["Python", "FastAPI", "MCP", "OAuth"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "SPIDER",
      href: "",
      dates: "2025, Present",
      active: true,
      description:
        "A personal AI plugin I built after noticing how much time I lost re-explaining context to coding agents every session. SPIDER wires the agent into the tools and project context I actually use, so it starts a task already knowing the codebase conventions instead of guessing at them.",
      technologies: ["TypeScript", "Node.js", "MCP"],
      links: [],
      image: "",
      video: "",
    },
  ],
  otherProjects: [
    {
      title: "Merit Incentives",
      href: "https://www.meritincentives.com/",
      dates: "2025, Present",
      active: true,
      description:
        "I lead full-stack development on the Live Ops admin dashboard for Merit Incentives, a loyalty and rewards platform running in 160+ countries, a Next.js frontend on a NestJS backend in a microservices architecture. I built a NestJS gateway that proxies a dozen-plus internal services behind one unified API, so the dashboard stopped breaking every time an upstream service changed its contract. Actions on the dashboard publish domain events through a message broker, and other services react to them, so state stays in sync without the frontend polling anything. I own the release process end to end and I'm the engineering point of contact for the client on this one.",
      technologies: ["Next.js", "NestJS", "Microservices", "Message Broker"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Orchid",
      href: "https://www.orchidonline.co/",
      dates: "2022, 2025",
      active: false,
      description:
        "Owned frontend architecture (Next.js, React, TypeScript) for Orchid, defining coding standards and component patterns across the product. Built real-time 1:1 and group chat over StompJS and Firebase Cloud Messaging push notifications for foreground and background delivery, and set up Sentry, Vitest, and Playwright so regressions got caught before users saw them.",
      technologies: ["Next.js", "React", "StompJS", "Firebase"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Kayak",
      href: "https://www.kayak.com/",
      dates: "2022",
      active: false,
      description:
        "Shipped releases for Kayak's hotels vertical, collaborating across distributed teams to define requirements and align delivery timelines. Architected backend services in TypeScript and Node.js and put a proper test strategy in place, canary, smoke, and sanity pipelines, that doubled automated test coverage for the hotels platform. Also tightened up structured logging and error-handling standards, which brought production incident frequency down.",
      technologies: ["TypeScript", "Node.js", "Testing", "Observability"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Avetta",
      href: "https://www.avetta.com/",
      dates: "2023, 2024",
      active: false,
      description:
        "Built enterprise Okta SAML SSO and a batch verification workflow, setup, processing, a summary view, and manual review, for Avetta's compliance reporting, where every step needed to be auditable. The tricky part wasn't the SSO integration itself, it was keeping the frontend and backend API contracts tight enough that a batch of thousands of records couldn't silently drift out of sync during manual review.",
      technologies: ["NestJS", "Okta SAML", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Curriki",
      href: "https://www.curriki.org/",
      dates: "2021, 2022",
      active: false,
      description:
        "Converted Curriki's LMS into a multi-tenant platform with ACL-based permissions, so client data stayed isolated under much higher concurrent usage. Migrated the legacy PHP admin panel over to React, translated Figma designs into production components, and introduced Jest and React Testing Library where there was barely any testing before, taking unit-test coverage from around 10% to 70%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"],
      links: [],
      image: "",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
