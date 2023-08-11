import PropTypes from "prop-types";
import { Badge, Button, Container, Section } from "./index";
import { featuresImage01, featuresImage02 } from "../img/features/index";

const Features = ({ title, body }) => {
  const featureItems = [
    {
      badge: "Progress tracking",
      title: "Stay organised and on top of your tasks",
      body: "Philadelphia empowers teams to monitor task progress effectively. With an intuitive progress tracking feature, visualise the status of each task through interactive progress bars.",
      image: featuresImage01,
      imagePosition: "left",
      imageAlt: "",
    },

    {
      badge: "To-do list and task management",
      title: "Visualise success and drive productivity with Philadelphia",
      body: "Easily identify bottlenecks, measure team performance, and ensure timely completion of projects. Stay informed and keep projects on track with Philadelphia's progress tracking capabilities.",
      image: featuresImage02,
      imagePosition: "right",
      imageAlt: "",
      isLast: true,
    },
  ];

  return (
    <Section id="features" className="features">
      <Container className="py-8">
        <div className="flex flex-col py-16 max-w-[800px] text-center mx-auto">
          {title && <h3 className="pb-6">{title}</h3>}
          {body && <p className="text-gray-700">{body}</p>}
        </div>

        {featureItems.map((item) => (
          <div
            key={item.badge}
            className={`flex flex-col gap-8 lg:gap-12 ${
              item.imagePosition === "left"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } ${item.isLast ? "pb-0" : "pb-12"}`}
          >
            <div className="flex flex-col flex-1 gap-y-4 justify-center">
              {item.badge && <Badge>{item.badge}</Badge>}

              <div className="pb-4 lg:max-w-[700px]">
                {item.title && <h5>{item.title}</h5>}
                {item.body && <p className="text-gray-700">{item.body}</p>}
              </div>

              <Button href="#">Learn More</Button>
            </div>

            <div className="flex flex-1 items-start justify-center bg-linear-gradient-light rounded-3xl max-h-[600px] overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="object-cover h-[800px]"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

Features.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Features;
