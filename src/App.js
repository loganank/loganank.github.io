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
 * Followed tutorial by Kolade Chris and then made necessary customizations at 
 * https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/#whatisadeveloperportfoliowebsite
 */

function App() {
  return (
    <div className="App">

      <Nav title={"Logan Ankarberg"}></Nav>
      
      <Hero image_path={"images/hero.jpg"}></Hero>

      <MoreAbout></MoreAbout>
      
      <Skills title={"My Top Skills"}></Skills>

      <Projects title={"Some of my Recent Projects"}></Projects>

      <ContactMe title={"Get In Contact With Me"}></ContactMe>

      <Socials social_links={
        {
          "linkedin": "https://www.linkedin.com/in/logan-ankarberg-a6504b280",
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
