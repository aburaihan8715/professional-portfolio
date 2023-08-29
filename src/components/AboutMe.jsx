import personalImage1 from "../../src/assets/images/personal/personal_1.png";
const AboutMe = () => {
  return (
    <section id="about" className="bg-base-200 mb-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="hero sm:min-h-screen ">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="relative">
              <img src={personalImage1} className="sm:max-w-sm rounded contrast-50" />
              <div className="absolute top-4 left-4 -z-10 w-full h-full border border-primary rounded"></div>
            </div>

            <div>
              <h2 className="text-5xl font-bold">About Me</h2>
              <p className="py-6">
                Hi, This is Abu Raihan, I am a fullstack web developer. I have good Knowledge about CSS, SASS,BEM,JavaScript, React js, Bootstrap,
                Tailwind, Firebase, Node js, Express js, MongoDB, React Router, React Hook Form etc
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
