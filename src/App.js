import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { MoreAbout } from './components/MoreAbout';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
import { Socials } from './components/Socials';

function App() {
  return (
    <div className="App">
      <Nav title="Logan Ankarberg"></Nav>
      <About image_path="images/hero.jpg"></About>
      <MoreAbout title="More About Me"></MoreAbout>
      <Skills title="Skills"></Skills>
      <Projects title="Projects"></Projects>
      <ContactMe title={"Contact Me"}></ContactMe>
      <Socials social_links={
        {
          "linkedin": "https://www.linkedin.com/in/logan-ankarberg-a6504b280/",
          "github": "https://github.com/loganank"
        }
      }></Socials>
    </div>
  );
}

export default App;
