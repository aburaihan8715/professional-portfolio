import SkillBar from "react-skillbars";

const skills = [
  {
    type: "HTML",
    level: 100,
    color: {
      bar: "#3498db",
      title: { text: "#fff", background: "#2980b9" },
    },
  },
  {
    type: "CSS",
    level: 90,
    color: {
      bar: "#4288d0",
      title: { text: "#fff", background: "#124e8c" },
    },
  },
  {
    type: "Javascript",
    level: 88,
    color: {
      bar: "#2c3e50",
      title: { text: "#fff", background: "#2c3e50" },
    },
  },
  {
    type: "React js",
    level: 85,
    color: {
      bar: "#5a68a5",
      title: { text: "#fff", background: "#46465e" },
    },
  },
  {
    type: "Node js",
    level: 75,
    color: {
      bar: "#525252",
      title: { text: "#fff", background: "#333333" },
    },
  },
  {
    type: "Express js",
    level: 86,
    color: {
      bar: "#999",
      title: { text: "#111", background: "#fff" },
    },
  },
  {
    type: "MySQL",
    level: 20,
    color: {
      bar: "#C60A15",
      title: { text: "#fff", background: "#C60A15" },
    },
  },
  {
    type: "TypeScript",
    level: 60,
    color: {
      bar: "#2ecc71",
      title: { text: "#fff", background: "#27ae60" },
    },
  },
  {
    type: "Next js",
    level: 50,
    color: {
      bar: "#2ecc71",
      title: { text: "#fff", background: "#27ae60" },
    },
  },
  {
    type: "Redux",
    level: 80,
    color: {
      bar: "#2ecc71",
      title: { text: "#fff", background: "#27ae60" },
    },
  },
];

// const colors = {
//   bar: "#3498db",
//   title: {
//     text: "#fff",
//     background: "#2980b9",
//   },
// };
const SkillBars = () => {
  return (
    <div className="bg-base-200 py-20 px-2">
      <div className="text-center mb-10">
        <p>--- Acquired ---</p>
        <h3 className="text-4xl">Skills</h3>
      </div>
      <div className="max-w-4xl mx-auto">
        <SkillBar skills={skills} height={20} animationDelay={500} />
      </div>
    </div>
  );
};

export default SkillBars;
