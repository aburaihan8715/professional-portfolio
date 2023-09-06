const Faqs = () => {
  return (
    <div className="py-20 bg-base-200">
      <div className="text-center mb-10">
        <p>--- FAQs ---</p>
        <h3 className="text-4xl">Why</h3>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        {/* 01 */}
        <div className="collapse collapse-plus border border-gray-700 rounded">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <h3 className="collapse-title text-xl font-medium">Full-Stack Proficiency</h3>
          <div className="collapse-content">
            <p>
              Being proficient in the MERN stack means I can handle both the front-end and back-end development of web applications. This versatility
              can be strength for your company to streamline your development teams, reduce dependencies, and create a cohesive, efficient development
              process.
            </p>
          </div>
        </div>
        {/* 02 */}
        <div className="collapse collapse-plus border border-gray-700 rounded">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">React Expertise</div>
          <div className="collapse-content">
            <p>
              React is one of the most popular front-end JavaScript libraries for building user interfaces. I am expertise in React signifies that I
              can create interactive and responsive web applications, providing a seamless user experience. If your company seek React developers to
              enhance online presence and engage users effectively, you might consider my expertise.
            </p>
          </div>
        </div>
        {/* 03 */}
        <div className="collapse collapse-plus border border-gray-700 rounded">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Scalability and Performance</div>
          <div className="collapse-content">
            <p>
              MERN stack is known for its scalability and performance capabilities. Your company may hire me to optimize existing web applications or
              build new ones that can handle a growing user base and provide fast response times, ensuring a positive user experience and potentially
              increasing revenue.
            </p>
          </div>
        </div>
        {/* 04 */}
        <div className="collapse collapse-plus border border-gray-700 rounded">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Database Management</div>
          <div className="collapse-content">
            <p>
              MongoDB, a NoSQL database used in the MERN stack, offers flexibility and scalability for handling diverse data types. My skills in
              MongoDB and database management are valuable for companies dealing with large volumes of data, making me an asset for projects that
              require efficient data storage and retrieval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
