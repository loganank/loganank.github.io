const Socials = ({ social_links }) => (
    <div class="socials container">
        <div class="d-flex flex-column align-items-end">
            <a href={social_links["linkedin"]} target="_blank" rel="noreferrer"
            ><img
                    src="icons/linkedin.png"
                    alt="Linkedin"
                    loading="lazy"
                    class="socicon mb-2"
                /></a>
            <a href={social_links["github"]} target="_blank" rel="noreferrer"
            ><img
                    src="icons/github.png"
                    alt="Github"
                    loading="lazy"
                    class="socicon"
                /></a>
        </div>
    </div>
);

export { Socials };