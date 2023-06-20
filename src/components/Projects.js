import '../css/Projects.css';

const Projects = ({ title }) => (
    <section class="projects" id="projects">
        <h2 class="projects-title">{title}</h2>
        <div class="projects-container">
            <div class="project-container project-card">
                <img
                    src="images/scavengerHunt.png"
                    alt="scavenger-hunt"
                    loading="lazy"
                    class="project-pic"
                />
                <h3 class="project-title">Scavenger Hunt</h3>
                <p class="project-details">
                    Using React Native, I created a scanvenger hunt around the Boise State
                    University Campus. The user must take a picture of every location that
                    is hinted at to complete the scavenger hunt. For Android and iPhone.
                </p>
                <a href="https://github.com/loganank/CS402-Final-Project-ARScavengerHunt" 
                  target="_blank" class="project-link">Check it Out</a>
            </div>
            <div class="project-container project-card">
                <img
                    src="images/websiteBuilder.png"
                    alt="website-builder"
                    loading="lazy"
                    class="project-pic"
                />
                <h3 class="project-title">Website Builder</h3>
                <p class="project-details">
                    This is a website will take an input of skills and text and other
                    media to create an html page that the user can download. The goal
                    of this is to create a simple way for developers to make a website
                    to show off their skills (It didn't create this website).
                </p>
                <a href="https://github.com/loganank/WebsiteCreator"
                  target="_blank" class="project-link">Check it Out</a>
            </div>
            <div class="project-container project-card">
                <img
                    src="images/textClassification.png"
                    alt="text-classification"
                    loading="lazy"
                    class="project-pic"
                />
                <h3 class="project-title">Text Classification</h3>
                <p class="project-details">
                    This react app takes text input and a machine learning model
                    classifies it as suicidal, depressed, or neither, and tells the
                    user it's prediction. The model was created using pytorch and
                    fine-tuning a BERT model.
                </p>
                <a href="https://github.com/loganank/nlp_final_project" 
                  target="_blank" class="project-link">Check it Out</a>
            </div>
        </div>
    </section>
);

export { Projects };