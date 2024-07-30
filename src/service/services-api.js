import { IconEnumeration } from "../components/common/IconUtils";

const categories = [
  {
    name: "Accounting and Book keeping",
    id: "accounting-and-book-keeping",
    icon: IconEnumeration.accounting,
    description:
      "Includes IFRS Compliant Accounting of transactions for your business",
    imgSrc: "/images/ourServices/accounting and book keeping.jpg",
  },
  {
    name: "Accounting Consulting",
    id: "accounting-consulting",
    icon: IconEnumeration.AccountingConsulting,
    description:
      "Includes advise on various complex accounting matters and discussion with your auditors to have mutually agreed conclusion",
    imgSrc: "/images/ourServices/accounting consulting.jpg",
  },
  {
    name: "Financial Modelling and Management Reporting",
    id: "financial-modelling-and-management-reporting",
    icon: IconEnumeration.financialModelling,
    description:
      "Includes excel based and Power BI based insightful reports and insights",
    imgSrc:
      "/images/ourServices/financial modelling and management reporting.jpg",
  },
  {
    name: "Outsourcing",
    id: "outsourcing",
    icon: IconEnumeration.outsourcing,
    description:
      "Includes various functions of your business outsourced from our offsite locations to obtain quality output at significantly reduced cost",
    imgSrc: "/images/ourServices/outsourcing.jpg",
  },

  {
    name: "Financial Systems Implementation",
    id: "financial-systems-implementation",
    icon: IconEnumeration.financialSystems,
    description:
      "Includes identifying, shortlisting, implementing, transition and shadowing the new accounting system for your business",
    imgSrc: "/images/ourServices/Financial system implementation.jpg",
  },
  {
    name: "Tax and regulatory support",
    id: "tax-and-regulatory-support",
    icon: IconEnumeration.tax,
    description: "Includes Tax return filing services for GTA and QFC",
    imgSrc: "/images/ourServices/tax and regulatory support.jpg",
  },
  {
    name: "HR services",
    id: "payroll",
    icon: IconEnumeration.hr,
    description:
      "Includes talent acquisition, monthly payroll processing, training and HR recording keeping",
    imgSrc: "/images/ourServices/HR services.png",
  },

  {
    name: "IFRS 16 Services",
    id: "ifrs-16-services",
    icon: IconEnumeration.ifrs16,
    description:
      "Includes full model development as per IFRS 16 for your leases",
    imgSrc: "/images/ourServices/IFRS Services.jpg",
  },
  {
    name: "IFRS Training",
    id: "ifrs-training",
    icon: IconEnumeration.IFRSTraining,
    description: "Includes training your employees on various IFRS standards",
    imgSrc: "/images/ourServices/IFRS Training.jpg",
  },
  {
    name: "Customer Administration and Relationship Management",
    id: "customer-administration-and-relationship",
    icon: IconEnumeration.CustomerRelationship,
    description:
      "Includes managing your customers and their queries and complaints",
    imgSrc: "/images/ourServices/customer admin and relationship.jpg",
  },
  {
    name: "Financial Statements Preparation and Translation",
    id: "financial-statements-preparation-and-translation",
    icon: IconEnumeration.financialStatesments,
    description:
      "Includes IFRS financials, and managing your auditors to get audit done",
    imgSrc:
      "/images/ourServices/financial statements preparation and translation.jpg",
  },
  {
    name: "Data Mining",
    id: "data-mining",
    icon: IconEnumeration.DataMining,
    description:
      "Includes Cleansing, processing, analyzing, presenting meaning insights to make your business decision",
    imgSrc: "/images/ourServices/data mining.jpg",
  },
  {
    name: "Internal Audits & Process Audits",
    id: "internal-audits-&-process-audits",
    icon: IconEnumeration.DataMining,
    description:
      "Includes various process audits and presenting findings to the senior management",
    imgSrc: "/images/ourServices/internal audit.jpg",
  },

  {
    name: "Stock Audits",
    id: "stock-audits",
    icon: IconEnumeration.DataMining,
    description:
      "Includes physical inspection of stock of branches, warehouses, consolidations and reporting",
    imgSrc: "/images/ourServices/stock audit.jpg",
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
  return categories.map(({ name, id, imgSrc, description }) => ({
    name,
    id,
    imgSrc,
    description,
  }));
}
