export const workData = [
    {
        title: "Ingram Micro",
        subtitle: "Software Engineer",
        location: "Chennai",
        time: "Jun 2023 - Present",
        phTime: "Jun 23 - Present",
        description: `Develop and maintain the ITAD application, managing extensive order processing by wearing multiple hats in development, production support and QA`,
        link: "",
    },
    {
        title: "UST Global",
        subtitle: "Software Intern",
        location: "Remote",
        time: "Jun 2022 - July 2022",
        phTime: "Jun 22 - July 22",
        description: `Extracted License Plate text from drone footages of parking lot using
        YOLOv5, PaddleOCR and DeepSort with 90% accuracy. Worked on Object Detection and Tracking Models. Using StreamLit and NGROK for an end-to-end solution.`,
        link: "",
    },
    {
        title: "UST Global",
        subtitle: "Software Intern",
        location: "Remote",
        time: "Jun 2021 - July 2021",
        phTime: "Jun 21 - July 21",
        description: `Researched across Advanced Human Pose Estimation models (OpenPose, wrnchAI, PoseNet,
            MoveNet) and Yoga pose datasets. Developed and Optimized the Neural Network for detecting 85+ yoga poses with more than 75%
            accuracy in real-time.`,
        link: "",
    },
];

export const educationData = [
    {
        title: "Indian Institute of Technology, Palakkad",
        subtitle: "BTech. (Hons) in Computer Science and Engineering",
        location: "GPA - 9.43 ",
        time: "2019 - 2023",
        phTime: "2019 - 2023",
    },
    {
        title: "ISC Grade 12",
        subtitle: "St. Thomas Residential School",
        time: "2019",
        location: "Score - 99%",
        phTime: "2019",
        description: `Secured State Rank 3`,
        link: "",
    },
];

export const ResearchData = [
    {
        title: "Reinforcement Learning in Finance",
        subtitle: "with Ishwar Govind and Dr. Chandra Shekar Lakshminarayanan",
        time: "Dec 2024",
        phTime: "Dec 24",
        description: `Explores challenges in portfolio management with deep reinforcement learning, focusing on baseline comparisons and policy evaluation. Using a synthetic market based on the BEKK model, it highlights varying agent performance and showcases alignment with maximum Sharpe Ratio optimal policies for agents excelling in the simulated environment.`,
        link: "/Portfolio_RL.pdf",
    },
];


export const UnderGradProjectsData = [
    {
        title: "Reinforcement Learning in Finance",
        subtitle: "Under Dr. Chandra Shekar Lakshminarayanan (IIT Madras)",
        time: "Aug 2022 - Present",
        phTime: "Aug 22 - Present",
        description: `Researched on Risk-Sensitive Actor-Critic (RAC) and Transformer-based Proximal Policy Optimization (PPO) agents for optimal portfolio management.`,
        link: "https://drive.google.com/file/d/1k8_ZApo1j3HCwiLGyFcKw-6ddkOAi4bp/view",
    },
    {
        title: "Android Malware Detection",
        subtitle: "Under Dr. Vivek Chaturvedi (IIT Palakkad)",
        time: "Jan 2022 - May 2022",
        phTime: "Jan 22 - May 22",
        description: `Research project attempting to provide a better solution to detecting Android malware with low computation cost by using Graph Neural
      Network Models and Explainable AI`,
        link: "https://github.com/JerryJohnThomas/OELP_code",
    },
    {
        title: "PlexShare App",
        subtitle: "Under Ramaswamy Krishnan-Chittur, Microsoft",
        time: "Aug 2022 - Dec 2022",
        phTime: "Aug 22 - Dec 22",
        description: `Developed the whiteboard module of the Plexshare
        App - a lab session monitoring application, leading a team of 6. Used MVVM architecture and explored other design
        patterns in C#.`,
        link: "https://github.com/JerryJohnThomas/PlexShare",
    },
    {
        title: "Petrichor Website",
        // subtitle: "Under Ramaswamy Krishnan-Chittur, Microsoft",
        time: "Nov 2021 - Dec 2021",
        phTime: "Nov 21 - Dec 21",
        description: `Led the development of the Petrichor website, serving as the official platform for our college's Techno Cultural Fest. Explored various creative code on the frontend for smooth UX`,
        link: "https://petrichor22.netlify.app/",
    },
    {
        title: "Project Management System of Innovation Lab",
        subtitle: "Dr. Albert Sunny ",
        time: "Jan 2021 - Jun 2021",
        phTime: "Jan 21 - Jun 21",
        description: `Made a Robust Project Management
      System (Website) for easy handling of projects by everyone in the institute.`,
        link: "",
    },
];

export const projectsData = [
    {
        oneWord: "AI Flappy Bird",
        title: "Flappy Bird via NEAT",
        link: "https://romantic-bhaskara-dc0b13.netlify.app/",
        pic: "images/flappy.png",
        description:
            "Flappy Bird trained using NEAT version of Genetic Algo, where each generation consists of neural networks. The Flappy Bird is not broken, but you have do something to make it work :'), that is related to the initial learning of the Bird.",
        goto: "flappybird",
        tags: ["NEAT", "Genetic"],
    },
    {
        oneWord: "AI 2048",
        title: "2048 via Heuristics",
        link: "https://inspiring-easley-8e7bf9.netlify.app/",
        // pic: "images/2048.png",
        pic: "images/2048_hd_gray.png",
        description:
            "The Classical 2048 game, you can play this as well as make the AI play it for you at different speeds, you can take over at any time. Done using Look Ahead Heuristics and home grown secret formula",
        goto: "2048",
        tags: ["Heurstics", "Classic"],
    },
    {
        oneWord: "Adversarial RL",
        title: "Procedural Content Generation via Adversarial Reinforcement Learning",
        link: "https://proceduralcontentgeneration.netlify.app/",
        pic: "images/procedural1.png",
        description:
            "Procedural Content Generation via Adversarial Reinforcement Learning, both the platform generator and the player are RL agents trying to figure out how things work. More Details in the Site. ",
        goto: "advRL",
        tags: ["RL", "Generation"],
    },
    {
        oneWord: "30 pieces",
        title: "30 pieces",
        link: "https://jerryjohnthomas.github.io/30pieces",
        pic: "images/30pieces1.png",
        description:
            "Attempt at make any image from 30 triangles using variaous techniques, started with a Genetic Dashboard and experimenting with different things",
        goto: "30pieces",
        tags: ["triangles", "Image", "Replica"],
    },
    {
        oneWord: "Searcher",
        title: "Word Searcher via Genetic Algo",
        link: "https://flamboyant-noyce-415776.netlify.app/",
        pic: "images/Shakespear1.png",
        description: "Arrives at a word using Genetic Algo, one of the very first examples by the Coding Train, that inspired me.",
        goto: "searcher",
        tags: ["Genetic", "Inspo"],
    },
    {
        oneWord: "Sine Wave ",
        title: "Sine Wave simulation ",
        link: "https://epic-lamarr-9b2fd1.netlify.app/",
        pic: "images/sine4_blueinverted.png",
        description: "Sine Wave using threejs, inspired from twitter and coding train",
        goto: "sine",
        tags: ["3D", "sinewave", "threejs"],
    },
    {
        oneWord: "RN Animation",
        title: "React Native Animation Series - Medium",
        link: "https://medium.com/@jerryjohnthomas/list/react-native-animations-bebaf1e64d4c",
        pic: "images/RN_Animations.jpeg",
        description: "Medium Series on how to do awesome animations in React Native for mobile Applications, with code and demo",
        goto: "RNAnimations",
        tags: ["RN", "Animation", "Medium"],
    },
    {
        oneWord: "RL Series",
        title: "Reinforcement Learning Series - Medium ",
        link: "https://medium.com/@jerryjohnthomas/list/reinforcement-learning-series-season-1-6fc57525318e",
        pic: "images/RL.jpeg",
        description: "Reinforcement Learning Series on Medium",
        goto: "RLseries",
        tags: ["RL", "Medium"],
    },
];
