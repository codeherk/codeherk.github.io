import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ExperienceEvent from "../components/experience-event"
import AdditionalEvent from "../components/additional-event"
import {experience, additional_experience} from "./experience.json"
import image from "../assets/self.jpg";
import styles from "./index.module.scss"

const experiences = experience.map((xp) => 
  <div className="event" key={xp.id}>
    <ExperienceEvent time_period={xp.time_period} company={xp.company} position={xp.position} location={xp.location} description={xp.description}></ExperienceEvent>
  </div>
);

const additional_experiences = additional_experience.map((xp) => 
  <div className="additional-event" key={xp.id}>
    <AdditionalEvent time_period={xp.time_period} title={xp.title} description={xp.description}></AdditionalEvent>
  </div>
);

// console.log(experience);
export default function Home() {
  return (
    <Layout>
      <SEO
        title="Byron Jenkins | Former boxer that codes and creates content."
        description="Former boxer that codes and creates content."
        image="/self-img.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <div className={styles.jumbotron}>
          <div className={styles.bio}>
            <h1>I'm Byron Jenkins, a former boxer that codes and <Link to="/blogs">creates content.</Link></h1>
          </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={`${styles.meImg} ${styles.hvr}`}>
          <img src={image} alt=""/>
        </div>
        <div className={styles.aboutMe}>
          {/* <h2>About Me</h2> */}
          <p>Naturally, I was engaged with the sport and lifestyle of boxing due to my father being a trainer/cornerman/cutman for 40+ years. 
            Although Boxing was my first passion, I always questioned, "Is this the path I chose or inherited?"</p>
          <p>Actively using my family's computer and AOL dialup, I endlessly questioned the functionality of computers. 
            My mother literally used the computer as a tool for bribing me to go to & do good in school. 
            As my curiosity for technology grew, my investment in boxing shifted. I was interested in technology; however, the schools I attended did not offer any programming courses. I took it upon myself and got a head start by learning via Google and coding sites like Codecademy.com. I then 
            pursued and obtained my Bachelors of Science in Computer Science from Temple University.
          </p> 
          <p> I currently use social media platforms to deliver educational content about Computer Science. 
            My goal is to reach and encourage the minority community as we are underrepresented in STEM.
          </p>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className={styles.educationSection}>
        <div className={styles.school}>
          <h2>Education</h2>
          <p>Computer Science B.S.</p>
          <p>Temple University</p>
          <p>Philadelphia, PA</p>
        </div>
        <div className={styles.completedCourses}>
          <h2>Completed Courses</h2>
          <p>Operating Systems</p>
          <p>Data Structures and Algorithms</p>
          <p>Secure Software Development</p>
          <p>Microservice Architecture</p>
        </div>
        <div className={styles.completedCourses}>
          <p>Mobile Computing Technologies</p>
          <p>Principles of Database Systems</p>
          <p>Software Design</p>
          <p>Projects In Computer Science</p>
        </div>
      </div>
      <div className={styles.experienceSection}>
        <h2>Work Experience</h2>
          { experiences }
        <div className={styles.shape1}></div>
      </div>
      <div className={styles.relatedSection}>
        <h2>Related Experience</h2>
          { additional_experiences }
      </div>
      {/* <div className="arrow-up"></div> */}
    </Layout>
  )
  
}