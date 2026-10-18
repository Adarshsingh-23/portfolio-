function App() {
  return (
    <div>
      <nav>
        <h1>Adarsh</h1>

       <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home">
        <p>Hello, I'm</p>
        <h1>Adarsh Singh</h1>
        <h2>Full-Stack Developer & ML Enthusiast</h2>

        <p>
          I build modern web applications and I'm currently
          exploring Machine Learning and Web3.
        </p>

        <button>View My Projects</button>
      </section>
      
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a BCA graduate passionate about software development,
          Machine Learning and Web3 technologies.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        <p>JavaScript • React • Node.js • MongoDB • Python • C++</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div>
          <h3>Tomato - Food Delivery Web Application</h3>
          <p>
            A full-stack food delivery application built using
            React, Node.js and MongoDB.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Let's build something together.</p>
      </section>
    </div>
  );
}

export default App;