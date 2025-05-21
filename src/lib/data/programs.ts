import { title } from "process";

export const programsByCity = {
  reno: [
    {
      id: "casino-&-hospitality-program",
      title: "Casino & Hospitality Program",
      location: "Reno",
      duration: "3 months",
      category: "Hospitality",
      image: "/image/reno.jpg",
    },
    {
      id: "outdoor-reacreation-internship",
      title: "Outdoor Recreation Internship",
      location: "Reno",
      duration: "3 months",
      category: "Tourism",
      image: "/image/reno.jpg",
    },
    {
      id: "tech-startup-experience",
      title: "Tech Startup Experience",
      location: "Reno",
      duration: "3 months",
      category: "Professional",
      image: "/image/reno.jpg",
    },
  ],
  "las-vegas": [
    {
      id: "resort-&-casino-managment",
      title: "Resort & Casino Managment",
      location: "Las Vegas ",
      duration: "3 months",
      category: "Hospitality",
      image: "/image/lasvegas.jpg",
    },
    {
      id: "entertainment-industry-program",
      title: "Entertainment Industry Program",
      location: "Las Vegas",
      duration: "3 months",
      category: "Entertainment",
      image: "/image/lasvegas.jpg",
    },
    {
      id: "event-planning-experience",
      title: "Event Planning Experience",
      location: "Las Vegas",
      duration: "3 months",
      category: "Professional",
      image: "/image/lasvegas.jpg",
    },
  ],
  "lake-tahoe": [
    {
      id: "ski-resort-program",
      title: "Ski Resort Program",
      location: "Lake Tahoe ",
      duration: "3 months",
      category: "Seasonal",
      image: "/image/lake-tahoe.jpg",
    },
    {
      id: "summer-recreation-staff",
      title: "Summer Recreation Staff",
      location: "Lake Tahoe",
      duration: "3 months",
      category: "Seasonal",
      image: "/image/lake-tahoe.jpg",
    },
    {
      id: "hospitality-&-tourism",
      title: "Hospitality & Tourism",
      location: "Lake Tahoe",
      duration: "3 months",
      category: "Hospitality",
      image: "/image/lake-tahoe.jpg",
    },
  ],
  "atlantic-city": [
    {
      id: "casino-operations-program",
      title: "Casino Operations Program",
      location: "Atlantic City ",
      duration: "3 months",
      category: "Hospitality",
      image: "/image/atlantic.jpg",
    },
    {
      id: "boardwalk-&-tourism-experience",
      title: "Boardwalk & Tourism Experience",
      location: "Atlantic City ",
      duration: "3 months",
      category: "Seasonal",
      image: "/image/atlantic.jpg",
    },
    {
      id: "casino-operations-program",
      title: "Casino Operations Program",
      location: "Atlantic City ",
      duration: "3 months",
      category: "Professional",
      image: "/image/atlantic.jpg",
    },
  ],
};

export const allPrograms = Object.entries(programsByCity).flatMap(
  ([city, programs]) =>
    programs.map((program) => ({
      ...program,
      citySlug: city,
    }))
);

export const allCategories = Array.from(
  new Set(allPrograms.map((program) => program.location))
);

export const programCategoriesData = [
  {
    id: "hospitality",
    name: "Hospitality & Casino",
    description:
      "Work in hotels, resorts, casinos, and restaurants while developing customer service skills",
    programs: allPrograms.filter((p) => p.category === "Hospitality"),
  },
  {
    id: "seasonal",
    name: "Seasonal Work",
    description:
      "Experience seasonal opportunities in tourism, recreation, and entertainment",
    programs: allPrograms.filter((p) => p.category === "Seasonal"),
  },
  {
    id: "professional",
    name: "Professional Development",
    description:
      "Gain career experience in business, technology, and management roles",
    programs: allPrograms.filter(
      (p) =>
        p.category === "Professional" ||
        p.category === "Entertainment" ||
        p.category === "Tourism"
    ),
  },
];
