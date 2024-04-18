const links = [
    {
        id: "accounting-standard",
        name: "IFRS Accounting Standards",
        url: "https://www.ifrs.org/issued-standards/list-of-standards/"
    },
    {
        id: "ministry-of-commerce-and-industry",
        name: "Ministry of Commerce and Industry",
        url: "https://www.moci.gov.qa/en/"
    },
    {
        id: "qatar-financial-centre",
        name: "Qatar Financial Centre",
        url: "https://www.qfc.qa/en"
    },
    {
        id: "qatar-financial-centre-regulatory-authority",
        name: "Qatar Financial Centre Regulatory Authority",
        url: "https://www.qfcra.com/"
    },
    {
        id: "qatar-central-bank",
        name: "Qatar Central Bank",
        url: "https://www.qcb.gov.qa/"
    },
    {
        id: "qatar-financial-markets-authority",
        name: "Qatar Financial Markets Authority",
        url: "https://www.qfma.org.qa/English/Pages/default.aspx"
    },
    {
        id: "qatar-stock-exchange",
        name: "Qatar Stock Exchange",
        url: "https://www.qe.com.qa/"
    }
];


export function getLink(linkId: string) {
    return links.find(({ id }) => id === linkId);
}

export function getLinks() {
    return links.map(({ id, name, url }) => ({ id, name, url }));
}
