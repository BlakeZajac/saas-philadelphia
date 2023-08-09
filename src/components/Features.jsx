import PropTypes from "prop-types";

const Features = ({ title, body }) => {
  const featureItems = [
    {
      badge: "Progress tracking",
      title: "Stay organised and on top of your tasks",
      body: "Philadelphia empowers teams to monitor task progress effectively. With an intuitive progress tracking feature, visualise the status of each task through interactive progress bars.",
      image: "",
      imagePosition: "left",
      imageAlt: "",
    },

    {
      badge: "To-do list and task management",
      title: "Visualise success and drive productivity with Philadelphia",
      body: "Easily identify bottlenecks, measure team performance, and ensure timely completion of projects. Stay informed and keep projects on track with Philadelphia's progress tracking capabilities.",
      image: "",
      imagePosition: "right",
      imageAlt: "",
    },
  ];

  return (
    <div id="features" className="features">
      <div className="flex flex-col">
        {title && <h4>{title}</h4>}
        {body && <p>{body}</p>}
      </div>

      <div>
        {featureItems.map((item) => (
          <div key={item.badge}>
            <div>
              {item.badge && <div>Badge</div>}

              <div>
                {item.title && <h5>{item.title}</h5>}
                {item.body && <p>{item.body}</p>}
              </div>
            </div>

            <div>
              {item.image && <img src={item.image} alt={item.imageAlt} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Features.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Features;
