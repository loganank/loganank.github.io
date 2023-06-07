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
                This is the example text about Logan Ankarberg. He is a nerdy man
                who eats chips and plays valorant. When not doing that, he is
                tinkering with machine learning models and making new things.
            </p>
        </div>
    </section>
)

export { Hero }