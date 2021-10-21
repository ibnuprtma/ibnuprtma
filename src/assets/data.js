import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Ibnu Pratama",
  title: "Remote Web Developer",
  contactCaption: "Have any questions or just look around ? Either way, you’re in the right spot.",
  social: {
    github: "https://github.com/ibnuprtma",
    instagram: "https://instagram.com/ibnuprtma",
    twitter: "https://twitter.com/ibnuprtma",
    email: "ibnuprtma@gmail.com",
    linkedin: "https://www.linkedin.com/in/ibnuprtma/",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
};
export default data;
