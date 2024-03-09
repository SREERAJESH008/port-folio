import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <body>
        <header>
          <div class="container-1">
            <h1>Sree Rajesh</h1>
            <nav>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="about" class="section">
          <div class="container-2">
            <h2 className="container-3">About Me</h2>
            <p className="words">
              Hello there! I'm Sree Rajesh, a passionate full-stack developer
              with a love for crafting elegant solutions to complex problems.
              With a solid foundation in both frontend and backend technologies,
              I thrive on the creative process of turning ideas into reality
              through code. My journey in the world of development began with a
              fascination for technology and a desire to build things that make
              a difference. Over the years, I've honed my skills in languages
              such as HTML, CSS, JavaScript, and a variety of frameworks and
              libraries including React.js on the frontend, and Node.js,
              Express.js, and Django on the backend. What excites me most about
              being a developer is the opportunity to continuously learn and
              adapt to new technologies. Whether it's diving into the latest
              frontend framework or exploring innovative approaches to database
              design, I'm always eager to expand my knowledge and stay ahead of
              the curve. In addition to technical expertise, I bring a strong
              commitment to collaboration and problem-solving to every project I
              undertake. I thrive in dynamic environments where teamwork and
              creativity are valued, and I'm always eager to contribute my
              skills and ideas to help bring projects to life. Outside of
              coding, you can often find me exploring the great outdoors,
              tinkering with electronics, or diving into a good book. I believe
              in the power of balance and finding inspiration in all aspects of
              life, whether it's in nature, art, or the ever-evolving world of
              technology. I'm excited about the opportunity to connect,
              collaborate, and create meaningful experiences through code. Let's
              build something amazing together!
            </p>
          </div>
        </section>

        <section id="projects" class="section">
          {/* <div class="container-4"> */}
          <h2>Projects</h2>
          <div class="project">
            <div class="example">
              <img
                src="images\Food Recipe img.jpeg"
                width="400"
                height="270"
                alt="E-commerce"
              />

              <div class="content">
                <a
                  href="https://magenta-rabanadas-353b57.netlify.app"
                  target="_blank"
                >
                  <div class="text">Food Recipe</div>
                </a>
              </div>
            </div>
            <div class="example">
              <a href="https://magenta-rabanadas-353b57.netlify.app"></a>
              <img
                src="images\Expence tracker img.jpeg"
                width="400"
                height="270"
                alt="E-commerce"
              />
              <div class="content">
                <a
                  href="https://magenta-rabanadas-353b57.netlify.app"
                  target="_blank"
                >
                  <div class="text">Expence Tracker</div>
                </a>
              </div>
            </div>
            <div class="example">
              <img
                src="images\E-commerce image.avif"
                width="400"
                height="270"
                alt="E-commerce"
              />
              <div class="content">
                <div class="text">E-Commerce</div>
              </div>
            </div>

            <div class="example">
              <img
                src="images\Landing page img.webp"
                width="400"
                height="270"
                alt="E-commerce"
              />
              <div class="content">
                <div class="text">Landing Page</div>
              </div>
            </div>

            <div class="example">
              <img
                src="images\pick bazar-2.jpeg"
                width="400"
                height="270"
                alt="E-commerce"
              />
              <div class="content">
                <div class="text">Pick Bazar</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="section">
          <div class="container">
            <h2>Contact Me</h2>
            <p>Email: sreerajesh008@gmail.com</p>
            <p>Phone: +91 9074352422</p>
            <div className="container-4">
              <a href="https://github.com/SREERAJESH008">GitHub</a>
              <a href="https://www.linkedin.com/in/sree-rajesh-s-1848s28/">
                Linked In
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div class="container-5">
            <p>&copy; 2024 Sree Rajesh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Home;
