import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SkillBars from "../components/SkillBars";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <SkillBars />
      <Contact />
      <Faqs />
    </>
  );
};

export default Home;
