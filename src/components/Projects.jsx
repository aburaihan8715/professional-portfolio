import { SiFirebase, SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "fashion verse",
    type: "fashion learning website",
    image: fashionVerse,
    links: [
      "https://github.com/aburaihan8715/fashionverse-client",
      "https://github.com/aburaihan8715/fashionverse-server",
      "https://fashionverse-ffe6b.web.app/",
    ],
  },
  {
    id: 2,
    name: "taste trove",
    type: "recipe finder website",
    image: tasteTrove,
    links: [
      "https://github.com/aburaihan8715/taste-trove-client",
      "https://github.com/aburaihan8715/taste-trove-server",
      "https://taste-trove.web.app/",
    ],
  },
  {
    id: 3,
    name: "toy topia",
    type: "toy selling website",
    image: toyTopia,
    links: [
      "https://github.com/aburaihan8715/toytopia-client",
      "https://github.com/aburaihan8715/toytopia-server",
      "https://toytopia-client-9e696.web.app/",
    ],
  },
];

import { Link } from "react-router-dom";
import fashionVerse from "../../src/assets/images/fashionVerse/fashion_verse.jpg";
import tasteTrove from "../../src/assets/images/tasteTrove/taste_trove.jpg";
import toyTopia from "../../src/assets/images/toyTopia/toy_topia.jpg";

const Projects = () => {
  return (
    <section id="projects" className="mb-20 scroll-mt-40 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-8 ">
          <h2 className="text-5xl font-bold">My Latest Projects</h2>
          <p className="text-xl">The projects that I have recently completed.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {projects.map((item) => (
            <ProjectsCard key={item.id} item={item}></ProjectsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// ==========project card=========
const ProjectsCard = ({ item }) => {
  return (
    <div data-aos="zoom-in" className="card bg-base-500 image-full transition duration-100 hover:shadow-md hover:shadow-white">
      <figure className="">
        <img className="w-full" src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body justify-center items-center">
        <div className="text-center flex flex-col gap-5">
          <p className="capitalize text-2xl font-semibold">{item.name}</p>
          <h3 className="card-title capitalize font-bold text-3xl">{item.type}</h3>
          <div className="card-actions justify-center">
            <Link to={`/project-details/${item.id}`} className="btn btn-outline btn-primary">
              view details
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <div className="flex gap-2 justify-center">
              <a href={item?.links[0]} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary btn-sm">
                <span className="text-xl text-blue-400">
                  <SiGithub />
                </span>
                <span>client</span>
              </a>

              <a href={item?.links[1]} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary btn-sm">
                <span className="text-xl text-blue-400">
                  <SiGithub />
                </span>
                <span>server</span>
              </a>
            </div>

            <div>
              <a href={item?.links[2]} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary btn-sm ">
                <span className="text-xl text-orange-400">
                  <SiFirebase />
                </span>
                <span>live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
