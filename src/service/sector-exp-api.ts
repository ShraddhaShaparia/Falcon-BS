const experiences = [
  
  {
    id: "financial-services",
    name: "Financial Services",
  },
  {
    id: "insurance",
    name: "Insurance",
  },
  {
    id: "investment-management",
    name: "Investment Management",
  },
  {
    id: "infrastructure-real-estate",
    name: "Infrastructure & Real Estate",
  },
  {
    id: "it-ites",
    name: "IT & ITES",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
  },
  {
    id: "ngo-npo-trust",
    name: "NGO/ NPO/ Trust",
  },
  {
    id: "professional-services",
    name: "Professional Services",
  },
  {
    id: "engineering-construction",
    name: "Engineering & Construction",
  },
  {
    id: "leisure-tourism-hospitality",
    name: "Leisure, Tourism & Hospitality",
  },
  {
    id: "education",
    name: "Education",
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
  },
];

export function getExperiences() {
  return experiences.map(({ id, name }) => ({ id, name }));
}
