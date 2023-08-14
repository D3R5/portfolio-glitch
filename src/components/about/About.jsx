import './About.css'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

function About() {
  return (
    <div>
      <Nav />
      <div className='me'>
        <h1>⚠️ I'm Diego, a Full-stack developer</h1>
        <br />
        <div>I consider myself a creative, curious and technology enthusiast person. Throughout my studies, I have dabbled in two areas related to technology: Mechatronic Civil Engineering and Electrical Civil Engineering at the University of Talca in Chile, although I have not completed them yet. Both academically and professionally, I have always moved in this field, and also, my family also works in the area of technology. Therefore, I can say that I have grown immersed in this world.
          <br />
          <br />

          Over the years, I have realized that my true passion is programming. That is why I decided to embark on a study tour through  "SoyHenry bootcamp", where I have acquired and strengthened my previous knowledge and gained a broader vision and better mastery of the field of development. I would like to highlight that the teamwork that I have developed at Soy Henry has allowed me to improve both my technical skills and soft skills.
          <br />
          <br />

          I am excited about what the future holds in the field of programming and how I will be able to contribute to the development of innovative technological solutions. I feel motivated to continue learning and growing in this exciting and dynamic field.</div>
      </div>
      <div className='interests'>
        <span>I also enjoy</span>
        <ul>
          <li>🗯️ Sports 🥋</li>
          <li>🗯️ Food 🌭</li>
          <li>🗯️ Coffe ☕</li>
          <li>🗯️ Animals 🐶</li>
          <li>🗯️ Music 🎸</li>
          <li>🗯️ Videogames 🎮</li>
          <li>🗯️ Movies 🎬</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default About


