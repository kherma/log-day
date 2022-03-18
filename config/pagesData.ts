type TPagesData = {
  [key: string]: {
    title: string;
    description: string;
  };
};

export const pagesData: TPagesData = {
  home: {
    title: "HOME",
    description:
      "Welcome do Day logger. App made for tracking day-to-day tasks becouse I hate Breeze.",
  },
  reports: {
    title: "REPORTS",
    description:
      "Reports page helps you to see the bigger picture of your work and how you spend your time. ",
  },
};
