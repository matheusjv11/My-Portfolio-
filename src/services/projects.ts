import { Project } from "@/types/Project";

export const Projects: Array<Project> = [
  {
    title: "GOT Simple Chat",
    description:
      "It is a chat with Game of thrones characters, where the messages are taken from a JSON. No database was used in this project, as its purpose was solely to go deep into Redux and state management concepts. ",
    link: "https://gotsimplechat.vercel.app/",
    github: "https://github.com/matheusjv11/Simple-Chat",
    tech: ["Next/React", "TypeScript", "Redux"],
    banner: "/images/project-gotchat.gif",
  },
  {
    title: "Spotify Playlist Clone",
    description:
      "I developed a simple playlist dashboard from Spotify. I was focused on understanding how audio process worked in a JavaScript enviroment.",
    link: "https://music-playlist-psi.vercel.app/",
    github: "https://github.com/matheusjv11/Spotify-clone",
    tech: ["Vue", "HTML/CSS", "JavaScript"],
    banner: "/images/project-spotify.gif",
  },
  {
    title: "Table Tennis Game",
    description:
      "Focused on learning how to use the Canvas, I started developing a table tennis game. Still in progress, I intend to use WebSocket to integrate players.",
    link: "",
    github: "https://github.com/matheusjv11/table-tennis-show",
    tech: ["Canvas", "HTML/CSS", "TypeScript"],
    banner: "/images/project-tennis.gif",
  },
  {
    title: "Simple Netflix Clone",
    description:
      "In order to learn React, I made this project in a course in the middle of 2020. The goal was just study how the components on React where structured.",
    link: "https://californiaflix.vercel.app/",
    github: "https://github.com/matheusjv11/californiaflix",
    tech: ["React", "HTML/CSS", "JavaScript"],
    banner: "/images/project-netflix.gif",
  },
];
