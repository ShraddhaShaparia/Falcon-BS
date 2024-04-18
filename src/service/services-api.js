import { IconEnumeration } from "../components/common/IconUtils";

const categories = [
  {
    name: "Accounting and Book keeping",
    id: "accounting-and-book-keeping",
    sessions: [
      {
        name: "3D Printing with Metal",
        id: "3d-printing-metal",
        desc: "See the latest in metal 3D printing technologies, from desktop machines (you need a really big desk!) to those designed for machine shops creating high-end and high-volume pieces.",
        speaker: {
          name: "Geoff Leffler",
          title: "Fabrication Specialist",
          org: "KinetEco Inc.",
          bio: "Geoff Leffler has metal in his veins. Starting out in traditional steel and aluminum fabrication, he's become obsessed with new technologies that can create finished metal parts quickly and affordably.",
        },
      },
      {
        name: "Homebuilding and 3D Printing",
        id: "homebuilding-and-3d-printing",
        desc: "A new house in 24 hours—can this be our practical solution for making affordable housing for all? See what has been done in this very vertical industry, and discuss how it will grow and be truly affordable—both for those living in the homes, and for the builders that create them.",
        speaker: {
          name: "Griffin Snow",
          title: "Urban Planner",
          org: "KinetEco Inc.",
          bio: "Griffin Snow has been driven to find ways to make efficient, affordable housing for all ever since he was a kid living on the streets with his single dad.",
        },
      },
    ],
    icon: IconEnumeration.accounting,
    description:
      "Includes IFRS Compliant Accounting of transactions for your business",
  },
  {
    name: "Tax and regulatory support",
    id: "tax-and-regulatory-support",
    sessions: [],
    icon: IconEnumeration.tax,
    description: "Includes Tax return filing services for GTA and QFC",
  },
  {
    name: "Financial Modelling and Management Reporting",
    id: "financial-modelling-and-management-reporting",
    sessions: [],
    icon: IconEnumeration.financialModelling,
    description:
      "Includes excel based and Power BI based insightful reports and insights",
  },
  {
    name: "Outsourcing",
    id: "outsourcing",
    sessions: [],
    icon: IconEnumeration.outsourcing,
    description:
      "Includes various functions of your business outsourced from our offsite locations to obtain quality output at significantly reduced cost",
  },
  {
    name: "Financial Systems Implementation",
    id: "financial-systems-implementation",
    sessions: [],
    icon: IconEnumeration.financialSystems,
    description:
      "Includes identifying, shortlisting, implementing, transition and shadowing the new accounting system for your business",
  },
  {
    name: "HR services",
    id: "payroll",
    sessions: [],
    icon: IconEnumeration.hr,
    description:
      "Includes talent acquisition, monthly payroll processing, training and HR recording keeping",
  },

  {
    name: "IFRS 16 Services",
    id: "ifrs-16-services",
    sessions: [],
    icon: IconEnumeration.ifrs16,
    description:
      "Includes full model development as per IFRS 16 for your leases",
  },
  {
    name: "IFRS Training",
    id: "ifrs-training",
    sessions: [],
    icon: IconEnumeration.IFRSTraining,
    description: "Includes training your employees on various IFRS standards",
  },
  {
    name: "Accounting Consulting",
    id: "accounting-consulting",
    sessions: [],
    icon: IconEnumeration.AccountingConsulting,
    description:
      "Includes advise on various complex accounting matters and discussion with your auditors to have mutually agreed conclusion",
  },
  {
    name: "Customer Administration and Relationship Management",
    id: "customer-administration-and-relationship",
    sessions: [],
    icon: IconEnumeration.CustomerRelationship,
    description: "Includes managing your customers and their queries and complaints",
  },
  {
    name: "Financial Statements Preparation and Translation",
    id: "financial-statements-preparation-and-translation",
    sessions: [],
    icon: IconEnumeration.financialStatesments,
    description:
      "Includes IFRS financials, and managing your auditors to get audit done",
  },
  {
    name: "Data Mining",
    id: "data-mining",
    sessions: [],
    icon: IconEnumeration.DataMining,
    description:
      "Includes Cleansing, processing, analyzing, presenting meaning insights to make your business decision",
  },
  {
    name: "And Many More..",
    id: "many-more",
    sessions: [],
    icon: IconEnumeration.More,
    description: "Many more services..",
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id, icon }) => ({ name, id, icon }));
}
