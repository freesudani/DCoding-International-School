import React from "react";
import Image1 from "../assets/pexels-lukas-296301.jpg";
import Image2 from "../assets/pexels-max-fischer-5212331.jpg";
import { MdMenuBook, MdSportsKabaddi } from "react-icons/md";

export const ProgramsData = [
  {
    title: "regular curriculum",
    icon: <MdMenuBook />,
    image: Image1,
    description:
      "The regular classes program is instructional in nature. It consist of continuity of movement experiences designed to help the individual gain movement skills and concepts that will enhance his ability to function efficiently and happily in all his life experiences",
  },
  {
    title: "extracurricular activities",
    icon: <MdSportsKabaddi />,
    image: Image2,
    description:
      "extracurricular activities include sports, student government, community service, employment, arts, hobbies, and educational clubs, usually takes place after regular hours or on the weekends",
  },
];
