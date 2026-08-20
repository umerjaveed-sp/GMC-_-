import React from "react";

import UserContext from "./UserContext";
import first from "../assets/home/universties/1.png";
import second from "../assets/home/universties/2.png";
import third from "../assets/home/universties/3.png";
import fourth from "../assets/home/universties/4.png";
import fifth from "../assets/home/universties/5.png";
import sixth from "../assets/home/universties/6.png";
import seventh from "../assets/home/universties/7.png";
import eighth from "../assets/home/universties/8.png";
import ninth from "../assets/home/universties/9.png";
import tenth from "../assets/home/universties/10.png";
import eleventh from "../assets/home/universties/11.png";
import twelfth from "../assets/home/universties/12.png";
const UserContextProvider = ({ children }) => {
  const universitiesData = [
    {
      id: 1,
      name: "University of Cambridge",
      description:
        "A collegiate research university in Cambridge, United Kingdom. Founded in 1209.",
      image: first,
      location: "Cambridge, UK",
      country: "UK",
    },
    {
      id: 2,
      name: "University of Oxford",
      description:
        "A collegiate research university in Oxford, England. It is the oldest university in the English-speaking world.",
      image: second,
      location: "Oxford, UK",
      country: "UK",
    },
    {
      id: 3,
      name: "Harvard University",
      description:
        "A private Ivy League research university in Cambridge, Massachusetts. Established in 1636.",
      image: third,
      location: "Cambridge, USA",
      country: "USA",
    },
    {
      id: 4,
      name: "Stanford University",
      description:
        "A private research university in Stanford, California. Founded in 1885.",
      image: fourth,
      location: "Stanford, USA",
      country: "USA",
    },
    {
      id: 5,
      name: "Murdoch University",
      description:
        "A public university in Perth, Western Australia. Named after Sir Walter Murdoch.",
      image: fifth,
      location: "Perth, Australia",
      country: "Australia",
    },
    {
      id: 6,
      name: "University of Regina",
      description:
        "A public research university in Regina, Saskatchewan, Canada. Commemorating 50 years of academic excellence.",
      image: sixth,
      location: "Regina, Canada",
      country: "Canada",
    },
    {
      id: 7,
      name: "University of Melbourne",
      description:
        "A public research university in Melbourne, Australia. Founded in 1853.",
      image: seventh,
      location: "Melbourne, Australia",
      country: "Australia",
    },
    {
      id: 8,
      name: "National University of Singapore",
      description:
        "A public research university in Singapore. Founded in 1905.",
      image: eighth,
      location: "Singapore",
      country: "Singapore",
    },
    {
      id: 9,
      name: "University of Toronto",
      description:
        "A public research university in Toronto, Canada. Founded in 1827.",
      image: ninth,
      location: "Toronto, Canada",
      country: "Canada",
    },
    {
      id: 10,
      name: "University of Sydney",
      description:
        "A public research university in Sydney, Australia. Founded in 1850.",
      image: tenth,
      location: "Sydney, Australia",
      country: "Australia",
    },
    {
      id: 11,
      name: "University of Edinburgh",
      description:
        "A public research university in Edinburgh, Scotland. Founded in 1582.",
      image: eleventh,
      location: "Edinburgh, UK",
      country: "UK",
    },
    {
      id: 12,
      name: "University of Chicago",
      description:
        "A private research university in Chicago, Illinois. Founded in 1890.",
      image: twelfth,
      location: "Chicago, USA",
      country: "USA",
    },
    {
      id: 13,
      name: "University of British Columbia",
      description:
        "A public research university in Vancouver, Canada. Founded in 1908.",
      image: first,
      location: "Vancouver, Canada",
      country: "Canada",
    },
    {
      id: 14,
      name: "University of Manchester",
      description:
        "A public research university in Manchester, England. Founded in 1824.",
      image: second,
      location: "Manchester, UK",
      country: "UK",
    },
    {
      id: 15,
      name: "University of California, Berkeley",
      description:
        "A public research university in Berkeley, California. Founded in 1868.",
      image: third,
      location: "Berkeley, USA",
      country: "USA",
    },
    {
      id: 16,
      name: "University of Queensland",
      description:
        "A public research university in Brisbane, Australia. Founded in 1909.",
      image: fourth,
      location: "Brisbane, Australia",
      country: "Australia",
    },
    {
      id: 17,
      name: "University of Amsterdam",
      description:
        "A public research university in Amsterdam, Netherlands. Founded in 1632.",
      image: fifth,
      location: "Amsterdam, Europe",
      country: "Europe",
    },
    {
      id: 18,
      name: "University of Zurich",
      description:
        "A public research university in Zurich, Switzerland. Founded in 1833.",
      image: sixth,
      location: "Zurich, Europe",
      country: "Europe",
    },
    {
      id: 19,
      name: "University of Copenhagen",
      description:
        "A public research university in Copenhagen, Denmark. Founded in 1479.",
      image: seventh,
      location: "Copenhagen, Europe",
      country: "Europe",
    },
    {
      id: 20,
      name: "University of Helsinki",
      description:
        "A public research university in Helsinki, Finland. Founded in 1640.",
      image: eighth,
      location: "Helsinki, Europe",
      country: "Europe",
    },
    {
      id: 21,
      name: "University of Oslo",
      description:
        "A public research university in Oslo, Norway. Founded in 1811.",
      image: ninth,
      location: "Oslo, Europe",
      country: "Europe",
    },
    {
      id: 22,
      name: "University of Vienna",
      description:
        "A public research university in Vienna, Austria. Founded in 1365.",
      image: tenth,
      location: "Vienna, Europe",
      country: "Europe",
    },
    {
      id: 23,
      name: "University of Montreal",
      description:
        "A public research university in Montreal, Canada. Founded in 1878.",
      image: eleventh,
      location: "Montreal, Canada",
      country: "Canada",
    },
    {
      id: 24,
      name: "University of Birmingham",
      description:
        "A public research university in Birmingham, England. Founded in 1900.",
      image: twelfth,
      location: "Birmingham, UK",
      country: "UK",
    },
    {
      id: 25,
      name: "University of Glasgow",
      description:
        "A public research university in Glasgow, Scotland. Founded in 1451.",
      image: first,
      location: "Glasgow, UK",
      country: "UK",
    },
    {
      id: 26,
      name: "University of Washington",
      description:
        "A public research university in Seattle, Washington. Founded in 1861.",
      image: second,
      location: "Seattle, USA",
      country: "USA",
    },
    {
      id: 27,
      name: "University of Adelaide",
      description:
        "A public research university in Adelaide, Australia. Founded in 1874.",
      image: third,
      location: "Adelaide, Australia",
      country: "Australia",
    },
    {
      id: 28,
      name: "University of Alberta",
      description:
        "A public research university in Edmonton, Canada. Founded in 1908.",
      image: fourth,
      location: "Edmonton, Canada",
      country: "Canada",
    },
    {
      id: 29,
      name: "University of Leuven",
      description:
        "A public research university in Leuven, Belgium. Founded in 1425.",
      image: fifth,
      location: "Leuven, Europe",
      country: "Europe",
    },
    {
      id: 30,
      name: "University of Sheffield",
      description:
        "A public research university in Sheffield, England. Founded in 1905.",
      image: sixth,
      location: "Sheffield, UK",
      country: "UK",
    },
  ];

  const supportStudentsData = [
    {
      id: 1,
      icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
      title: "Financial Aid",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "forward",
    },
    {
      id: 2,
      icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
      title: "Student Success",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "forward",
    },
    {
      id: 3,
      icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
      title: "Wander & Learn",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "forward",
    },
    {
      id: 4,
      icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
      title: "Skill Building",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "backward",
    },
    {
      id: 5,
      icon: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      title: "Journey Abroad",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "backward",
    },
    {
      id: 6,
      icon: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525",
      title: "Global Explorer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      features: [
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
        "Lorem ipsum dolor, sit amet consectetur",
      ],
      cta: "Start Preparing Now",
      category: "backward",
    },
  ];

  return (
    <UserContext.Provider value={{ universitiesData, supportStudentsData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
