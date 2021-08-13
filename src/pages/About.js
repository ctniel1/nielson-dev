import '../assets/styles/about.css'
import AboutImg from '../assets/images/about.jpeg'

export default function About() {
  return (
    <div id="container">
      <div>
        <img id="main-img" src={AboutImg} alt="Chris Nielson About"/>
      </div>
      <div id="intro">
        <p class="about-p"><strong>Hi, I'm Chris!</strong></p>
        <p class="about-p">I began learning web development 5 years ago. Since that time, my educational and occupational pursuits have led me to become well-experienced in multiple frontend frameworks such as React and Vue. In my job positions, I've also utilized different types of backend systems such as Wordpress, Drupal, and NodeJS (using both SQL and noSQL databases).</p>
        <p class="about-p">While web development has been my primary job position for the past several years, it has not prevented me from branching out in my free time. My curiosity has led to dabbling in Mobile Development (published my first app on the Google Play store) and Video Game Development (developed an application that created synthetic data to train a machine learning algorithm).</p>
        <p class="about-p">When I'm not staring at a computer screen, my wife and I are often spending time together playing games, exploring the outdoors, and visiting with friends and family. I'm a big sports guy and love to follow basketball and football.</p>
      </div>
    </div>
  )
}