import personalImage1 from "../../src/assets/images/personal/personal_1.png";
const AboutMe = () => {
  return (
    <section id="about" className="bg-base-200 mb-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="hero sm:min-h-screen ">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <div data-aos="zoom-in" className="relative">
              <img src={personalImage1} className="sm:max-w-sm rounded contrast-50" />
              <div className="absolute top-4 left-4 -z-10 w-full h-full border border-primary rounded"></div>
            </div>

            <div>
              <h2 className="text-5xl font-bold">About Me</h2>
              <p className="py-6">
                Hi, This is Abu Raihan a dedicated MERN stack developer with a passion for crafting web applications that combine functionality and
                aesthetics. I specialize in building robust web applications using the MERN stack, leveraging my proficiency in MongoDB, Express js,
                React js, and Node js. I am deeply passionate about web development and constantly seek opportunities to expand my knowledge. In my
                free time, I contribute to open-source projects and experiment with new technologies. I am a collaborative team player who values
                effective communication. I enjoy collaborating with designers, product managers, and fellow developers to bring projects to life. I am
                always open to new opportunities and collaborations. If you would like to discuss a project, explore potential partnerships, or simply
                connect, feel free to reach out.
              </p>
              <a href="#contact" className="btn btn-primary">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
