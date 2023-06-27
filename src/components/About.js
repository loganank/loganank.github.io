const About = ({ image_path }) => (
    <div class="hero mt-5 container" id="about">
        <div class="row">
            <div class="mt-3 col-6">
                <div class="card">
                    <img
                        src={image_path}
                        alt="hero-img"
                        loading="lazy"
                        class="hero-img card-img-top"
                    />
                    <div class="card-body">
                        <div class="card-text text-secondary">My sister and I at Medieval Times.</div>
                    </div>
                </div>
            </div>
            <div class="col-6 my-auto">
                <div class="card">
                    <div class="card-body">
                        <h2 class="bio-title card-title text-primary">About Me</h2>
                        <p class="bio-text card-text text-secondary">
                            Hello, my name is Logan Ankarberg and I created this website
                            to highlight some of my skills and projects that I've done.
                            I've also created links to my socials so that you can contact
                            me if you're interested in hiring me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export { About }