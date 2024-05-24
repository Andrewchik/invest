console.log("Loaded EN");

export default {
  pages: {
    home: {},
  },
  layouts: {
    root: {
      topLine: {
        description:
          "Reaching clients’ full potential through exceptional legal services",
        pages: {
          for_legal_advisers: "For legal advisers",
          locations: "Locations",
          newsletter: "Newsletter",
        },
      },
      header: {
        expertise: "Expertise",
        industries: "Industries",
        people: "People",
        news: "News",
        about_us: "About us",
        contact_us: "Contact us",
        careers: "Careers",
      },
    },
  },
} as const;
