import "./home.css";

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
          <div class="container-4">
            <h2>Projects</h2>
            <div class="project">
              <img
                className="img-1"
                src="images\E-commerce image.avif"
                alt=""
              />
              <img
                className="img-1"
                src="images\Expence tracker img.jpeg"
                alt=""
              />
              <img className="img-1" src="images\Food Recipe img.jpeg" alt="" />
              <img
                className="img-1"
                src="images\Landing page img.webp"
                alt=""
              />
              <img className="img-1" src="images\pick bazar-2.jpeg" alt="" />
            </div>
            {/* <div class="project">
              <h3>Project 2</h3>
              <p>Description of Project 2...</p>
              <a href="#">View Project</a>
            </div> */}
          </div>
        </section>

        <section id="contact" class="section">
          <div class="container">
            <h2>Contact Me</h2>
            <p>Email: john@example.com</p>
            <p>Phone: 123-456-7890</p>
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
