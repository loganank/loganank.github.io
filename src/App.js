import {Nav} from './components/Nav.js';
import {Hero} from './components/Hero.js';
import {MoreAbout} from './components/MoreAbout.js';
import {Skills} from './components/Skills.js';
import {Projects} from './components/Projects.js';
import {ContactMe} from './components/ContactMe.js';
import {Socials} from './components/Socials.js';

import 'animate.css';

/*
 * Built by Logan Ankarberg
 * Followed tutorial by Kolade Chris at 
 * https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/#whatisadeveloperportfoliowebsite
 */

function App() {
  return (
    <div className="App">

      <Nav title={"Logan Ankarberg"}></Nav>
      
      <Hero image_path={"images/wfh_1.svg"}></Hero>

      <MoreAbout></MoreAbout>
      
      <Skills title={"My Top Skills"}></Skills>

      <Projects title={"Some of my Recent Projects"}></Projects>

      <ContactMe title={"Get In Contact With Me"}></ContactMe>

      <Socials social_links={
        {
          "instagram": "https://somelink",
          "linkedin": "https://somelink",
          "github": "https://github.com/loganank",
        }
      }></Socials>

      
      <footer>
        <p class="copy">&copy; Copyright 2023</p>
        <p class="copy">Built by Logan Ankarberg</p>
      </footer>
    </div>
  );
}

export default App;
