import '../css/Socials.css';

const Socials = ({ social_links }) => (
    <div class="socials">
        <a href={social_links["instagram"]} target="_blank" rel="noreferrer"
        ><img
                src="icons/instagram.png"
                alt="Instagram"
                loading="lazy"
                class="socicon"
            /></a>
        <a href={social_links["linkedin"]} target="_blank" rel="noreferrer"
        ><img
                src="icons/linkedin.png"
                alt="Linkedin"
                loading="lazy"
                class="socicon"
            /></a>
        <a href={social_links["github"]} target="_blank" rel="noreferrer"
        ><img
                src="icons/github.png"
                alt="Github"
                loading="lazy"
                class="socicon"
            /></a>
    </div>
);

export { Socials };