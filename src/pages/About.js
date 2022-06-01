import '../assets/styles/about.css'
import AboutImg from '../assets/images/about.jpeg'
import text from '../assets/strings/about.json'

export default function About() {
  return (
    <div id="container">
      <div>
        <img id="main-img" src={AboutImg} alt="Chris Nielson About"/>
      </div>
      <div id="intro">
        <h1><strong>{text.title}</strong></h1>
        <p class="about-p">{text.paragraph1}</p>
        <p class="about-p">{text.paragraph2}</p>
        <p class="about-p">{text.paragraph3}</p>
      </div>
    </div>
  )
}