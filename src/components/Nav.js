import '../css/Nav.css';

const Nav = ({ title }) => (
    <nav>
        <h1>{title}</h1>
        <ul class="navigation">
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
            <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
    </nav>
);

export { Nav };