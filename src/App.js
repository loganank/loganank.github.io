import {Nav} from './components/Nav.js';
import {Hero} from './components/Hero.js';
import {MoreAbout} from './components/MoreAbout.js';

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
      
      <section class="skills" id="skills">
        <h2 class="skill-header">My Top Skills</h2>

        <div class="skills-wrapper">
          <div class="first-set animate__animated animate__pulse">
            <img
              src="icons/python.png"
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src="icons/pytorch.png"
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src="icons/java.png"
              alt=""
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

      <section class="projects" id="projects">
        <h2 class="projects-title">Some of my Recent Projects</h2>
        <div class="projects-container">
          <div class="project-container project-card">
            <img
              src="images/expenseTracker.png"
              alt="expense-tracker"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Expense Tracker</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
          <div class="project-container project-card">
            <img
              src="images/netflixClone.png"
              alt="netflic-clone"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Netflix Clone</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
          <div class="project-container project-card">
            <img
              src="images/greenyEarth.png"
              alt="greeny-earth"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Greeny Earth</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2>Get In Touch With Me</h2>
        <div class="contact-form-container">
          <div class="contact-form">
            <form action="https://formspree.io/f/xyylngw" method="POST">
              <div class="form-control">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  class="input-field"
                  required
                />
              </div>
              <div class="form-control">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  class="input-field"
                  required
                />
              </div>
              <div class="form-control">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  class="input-field"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit-btn"
                class="submit-btn"
              />
            </form>
          </div>
        </div>
      </section>

      <div class="socials">
        <a href="#" target="_blank"
          ><img
            src="icons/icons8-twitter-circled.gif"
            alt="Twitter"
            loading="lazy"
            class="socicon"
        /></a>
        <a href="#" target="_blank"
          ><img
            src="icons/icons8-instagram.gif"
            alt="Instagram"
            loading="lazy"
            class="socicon"
        /></a>
        <a href="#" target="_blank"
          ><img
            src="icons/icons8-linkedin-circled.gif"
            alt="Linkedin"
            loading="lazy"
            class="socicon"
        /></a>
        <a href="#" target="_blank"
          ><img src="icons/icons8-github.gif" alt="Github" class="socicon"
        /></a>
      </div>
      <footer>
        <p class="copy">&copy; Copyright 2023</p>
        <p class="copy"> Built by Logan Ankarberg</p>
      </footer>
    </div>
  );
}

export default App;
