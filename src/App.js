import './App.css';
import { Nav } from './components/Nav';
import { About } from './components/About';
import { MoreAbout } from './components/MoreAbout';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Nav title="Logan Ankarberg"></Nav>
      <About image_path="images/hero.jpg"></About>
      <MoreAbout title="More About Me"></MoreAbout>
      <Skills title="Skills"></Skills>
      <Projects title="Projects"></Projects>
      <ContactMe title={"Contact Me"}></ContactMe>
    </div>
  );
}

export default App;
