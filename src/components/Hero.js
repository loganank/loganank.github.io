import '../css/Hero.css';

const Hero = ({ image_path }) => (
    <section class="hero" id="about">
        <img
            src={image_path}
            alt="hero-img"
            loading="lazy"
            class="hero-img"
        />
        <div class="bio animate__animated animate__shakeX">
            <h2 class="bio-title">About Me</h2>
            <p class="bio-text">
                Hello, my name is Logan Ankarberg and I created this website
                to highlight some of my skills and projects that I've done.
                I've also created links to my socials so that you can contact
                me if you're interested in hiring me.
            </p>
        </div>
    </section>
)

export { Hero }