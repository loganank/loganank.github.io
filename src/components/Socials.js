const Socials = ({ social_links }) => (
    <div class="socials container">
        <div class="position-fixed top-50 end-0 me-2">
            <div class="row">
            <a href={social_links["linkedin"]} target="_blank" rel="noreferrer"
            ><img
                    src="icons/linkedin.png"
                    alt="Linkedin"
                    loading="lazy"
                    class="socicon mb-1"
                /></a>
            </div>
            <div class="row">
            <a href={social_links["github"]} target="_blank" rel="noreferrer"
            ><img
                    src="icons/github.png"
                    alt="Github"
                    loading="lazy"
                    class="socicon"
                /></a>
            </div>
        </div>
    </div>
);

export { Socials };