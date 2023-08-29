import { Typewriter } from "react-simple-typewriter";
import personalImage1 from "../../src/assets/images/personal/personal_1.png";
const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-20">
      <div className="w-full sm:max-w-6xl mx-auto">
        <div className="hero h-auto sm:min-h-screen">
          <div className="gap-10 hero-content flex-col lg:flex-row-reverse lg:gap-10">
            <div className="flex-1 flex justify-center">
              <img src={personalImage1} className="w-full sm:max-w-md rounded-full shadow-lg shadow-primary opacity-75" />
            </div>

            <div className="flex-1">
              <p className="uppercase text-xl mb-4">welcome to my world</p>
              <h1 className="text-2xl sm:text-5xl font-bold mb-8 sm:leading-snug">
                <span className="whitespace-nowrap">Hi, I’m Abu Raihan</span>
                <br />
                <span className="text-rose-500 whitespace-nowrap">
                  <Typewriter
                    words={["Full stack", "Backend", "Frontend"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                <br />
                <span className="text-rose-500">Developer</span>
                <br />
                <span> based in BD</span>
              </h1>

              <a href="https://drive.google.com/file/d/1hUgu5Q5hMynQQHTTK8_SdShK8-8HSx1D/view?export=download" className="btn btn-primary">
                download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
