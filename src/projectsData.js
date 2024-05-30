// flappy
// 2048
// procedural gen
// 30 pieces

// shakespeare
// https://flamboyant-noyce-415776.netlify.app/
// sineway
// https://epic-lamarr-9b2fd1.netlify.app/

// medium series
// RN Animation series


// src/data.js
const projectsData = [
    {
      oneWord: "AI Flappy Bird",
      title: "Flappy Bird via NEAT",
      link: "https://romantic-bhaskara-dc0b13.netlify.app/",
      pic: "images/flappy.png",
      description: "Flappy Bird trained using NEAT version of Genetic Algo, where each generation consists of neural networks. The Flappy Bird is not broken, but you have do something to make it work :'), that is related to the initial learning of the Bird.",
      goto: "flappybird",
      tags: ["NEAT","Genetic"],
    },
    {
      oneWord: "AI 2048",
      title: "2048 via Heuristics",
      link: "https://inspiring-easley-8e7bf9.netlify.app/",
      // pic: "images/2048.png",
      pic: "images/2048_hd_gray.png",
      description: "The Classical 2048 game, you can play this as well as make the AI play it for you at different speeds, you can take over at any time. Done using Look Ahead Heuristics and home grown secret formula",
      goto: "2048",
      tags: ["Heurstics","Classic"],
    },
    {
      oneWord: "Adversarial RL",
      title: "Procedural Content Generation via Adversarial Reinforcement Learning",
      link: "https://proceduralcontentgeneration.netlify.app/",
      pic: "images/procedural1.png",
      description: "Procedural Content Generation via Adversarial Reinforcement Learning, both the platform generator and the player are RL agents trying to figure out how things work. More Details in the Site. ",
      goto: "advRL",
      tags: ["RL","Generation"],

    },
    {
      oneWord: "30 pieces",
      title: "30 pieces",
      link: "https://jerryjohnthomas.github.io/30pieces",
      pic: "images/30pieces1.png",
      description: "Attempt at make any image from 30 triangles using variaous techniques, started with a Genetic Dashboard and experimenting with different things",
      goto:"30pieces",
      tags: ["triangles","Image","Replica"],
    },
    {
      oneWord: "Searcher",
      title: "Word Searcher via Genetic Algo",
      link: "https://flamboyant-noyce-415776.netlify.app/",
      pic: "images/Shakespear1.png",
      description: "Arrives at a word using Genetic Algo, one of the very first examples by the Coding Train, that inspired me.",
      goto:"searcher",
      tags: ["Genetic","Inspo"],
    },
    {
      oneWord: "Sine Wave ",
      title: "Sine Wave simulation ",
      link: "https://epic-lamarr-9b2fd1.netlify.app/",
      pic: "images/sine4_blueinverted.png",
      description: "Sine Wave using threejs, inspired from twitter and coding train",
      goto:"sine",
      tags: ["3D","sinewave","threejs"],
    },
    {
      oneWord: "RN Animation",
      title: "React Native Animation Series - Medium",
      link: "https://medium.com/@jerryjohnthomas/list/react-native-animations-bebaf1e64d4c",
      pic: "images/RN_Animations.jpeg",
      description: "Medium Series on how to do awesome animations in React Native for mobile Applications, with code and demo",
      goto:"RNAnimations",
      tags: ["RN","Animation","Medium"],
    },
    {
      oneWord: "RL Series",
      title: "Reinforcement Learning Series - Medium ",
      link: "https://medium.com/@jerryjohnthomas/list/reinforcement-learning-series-season-1-6fc57525318e",
      pic: "images/RL.jpeg",
      description: "Reinforcement Learning Series on Medium",
      goto:"RLseries",
      tags: ["RL","Medium"],

    },

  ];
  
  export default projectsData;
  