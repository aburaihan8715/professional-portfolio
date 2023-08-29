import { useParams } from "react-router-dom";
import fashionVerseFull from "../../src/assets/images/fashionVerse/fashion_verse_full.jpg";
import tasteTroveFull from "../../src/assets/images/tasteTrove/taste_trove_full.jpg";
import toyTopiaFull from "../../src/assets/images/toyTopia/toy_topia_full.jpg";

const projectDetailImage = [
  { id: 1, image: fashionVerseFull },
  { id: 2, image: tasteTroveFull },
  { id: 3, image: toyTopiaFull },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const selectedImage = projectDetailImage.find((item) => item.id === +id);

  return (
    <section className="bg-base-200 py-10">
      <div className="w-full sm:max-w-6xl mx-auto flex justify-center">
        <img className="w-full" src={selectedImage?.image} alt="" />
      </div>
    </section>
  );
};

export default ProjectDetails;
