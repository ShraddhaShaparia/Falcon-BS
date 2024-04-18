import { getLinks } from "../service/links-api";

export const UsefulLinks = () => {

    const links: Array<Link> = getLinks();

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    
    return (
        <div className="container">

            <h1>Useful Links</h1>
            <ul className="link-list">
                {links.map(link => (
                    <li key={link.id} className="usefullink" onClick={() => openInNewTab(link.url)}>
                        <p className="link-name">{link.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )


}

class Link {
    id: string = '';
    name: string = '';
    url: string = '';
}

