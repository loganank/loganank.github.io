const Skills = ({ title }) => (
    <div class="skills container" id="skills">
        <h2 class="skills-title m-3 text-primary">{title}</h2>
        <div class="row">
            <div class="col-2 offset-3 mb-3">
                <div class="card">
                    <img
                        src="icons/python.png"
                        alt="python icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>

            <div class="col-2 mb-3">
                <div class="card">
                    <img
                        src="icons/pytorch.png"
                        alt="pytorch icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>

            <div class="col-2 mb-3">
                <div class="card">
                    <img
                        src="icons/java.png"
                        alt="java icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-2 offset-3">
                <div class="card">
                    <img
                        src="icons/javascript.png"
                        alt="javascript icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>
            <div class="col-2">
                <div class="card">
                    <img
                        src="icons/react-native.png"
                        alt="react native icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>
            <div class="col-2">
                <div class="card">
                    <img
                        src="icons/git.png"
                        alt="git icon"
                        loading="lazy"
                        class="icon icon-card img-fluid p-3"
                    />
                </div>
            </div>
        </div>
    </div>
);

export { Skills }