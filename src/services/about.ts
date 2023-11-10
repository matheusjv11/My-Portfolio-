import { Expericence } from "@/types/Experience";

export const hardSkills: Array<{
  label: string;
  image: string;
}> = [
  {
    label: "Vue",
    image: "images/skills/vue.png",
  },
  {
    label: "React",
    image: "images/skills/react.png",
  },
  {
    label: "TypeScript",
    image: "images/skills/typescript.png",
  },
  {
    label: "PHP",
    image: "images/skills/php.png",
  },
  {
    label: "JavaScript",
    image: "images/skills/js.png",
  },
  {
    label: "Redux",
    image: "images/skills/redux.png",
  },
  {
    label: "Webpack",
    image: "images/skills/webpack.png",
  },
  {
    label: "Node",
    image: "images/skills/node.png",
  },
  {
    label: "Python",
    image: "images/skills/python.png",
  },
];

export const experiences: Array<Expericence> = [
  {
    company: "Software Factory",
    linkedin: "https://www.linkedin.com/school/uftoficial/",
    resposibilities: [
      "Developing systems from scratch with Django, Angular and React.",
      "Data visualization with Python.",
      "Designing banners and folders that were used in documents and publications.",
    ],
    start: "April 2020",
    end: "March 2021",
    role: "Fullstack Developer",
  },
  {
    company: "Nelogica",
    linkedin: "https://www.linkedin.com/company/nelogica/",
    resposibilities: [
      "Development with PHP, JavaScript, TypeScript, HTML/CSS, Vue and Laravel of internal applications for employees.",
      "Working with different company's teams to finish projects",
      "Versioning and deployment control of applications I work.",
    ],
    start: "March 2021",
    end: "Present",
    role: "Software Developer",
  },
];
