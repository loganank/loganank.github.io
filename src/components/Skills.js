import '../css/Skills.css';

const Skills = ({ title }) => (
    <section class="skills" id="skills">
        <h2 class="skill-header">{title}</h2>

        <div class="skills-wrapper">
            <div class="first-set animate__animated animate__pulse">
                <img
                    src="icons/python.png"
                    alt="python icon"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="icons/pytorch.png"
                    alt="pytorch icon"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="icons/java.png"
                    alt="java icon"
                    loading="lazy"
                    class="icon icon-card"
                />
            </div>

            <div class="second-set animate__animated animate__pulse">
                <img
                    src="icons/icons8-javascript.svg"
                    alt=""
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="icons/icons8-react-native.svg"
                    alt=""
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="icons/icons8-git.svg"
                    alt=""
                    loading="lazy"
                    class="icon icon-card"
                />
            </div>
        </div>
    </section>
)

export { Skills };