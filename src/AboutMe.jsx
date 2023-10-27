import './About.css';
import Desktop from './imgs/desktop3.png'

const About = () => {
    return (
    <section className='about' id='about'>
        <div className='container'>
          <div className='about-content'>
            <img className='img-about' src={Desktop} alt='Desktop img'/> 
                <div>
                    <h4 className='text-title'>About Me</h4>
                    <p className='text-about'>As a Junior Fullstack Developer, I bring a diverse skill set to the table, including proficiency in HTML, CSS, JavaScript, React, Node.js, PostgresQL, Express, and Tailwind. My strengths lie with creating and maintaining responsive websites that deliver exceptional user experiences. I specialize in designing dynamic and captivating interfaces, employing clean and efficient coding practices, and harnessing the latest development tools and methodologies. Additionally, I am a collaborative team player, thriving in cross-functional environments and contributing to the development of outstanding web applications.</p>
                </div>
          </div>
        </div>
    </section>
    );
};

export default About