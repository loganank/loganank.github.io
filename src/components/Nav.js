const Nav = ({ title }) => (
    <nav class="navbar fixed-top container-fluid navbar-expand-lg bg-body-tertiary">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav container align-items-center">
                <span class="navbar-text col-8 text-start text-primary">{title}</span>
                <a class="nav-link col-1 text-center link-primary" href="#about">About</a>
                <a class="nav-link col-1 text-center link-primary" href="#skills">Skills</a>
                <a class="nav-link col-1 text-center link-primary" href="#projects">Projects</a>
                <a class="nav-link col-1 text-center link-primary" href="#contact">Contact</a>
            </div>
        </div>
    </nav>
);

export { Nav }