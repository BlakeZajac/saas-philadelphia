import PropTypes from "prop-types";
import { Section, Container, PricingCard } from "./index";

const Pricing = ({ title, body, highlightedWord }) => {
  const PricingItems = [
    {
      title: "Free",
      price: "$0",
      description: "Stay organised, on us!",

      benefits: [
        "Task lists: Create and manage tasks effortlessly.",
        "Collaboration: Share lists and tasks with your team.",
        "Deadline reminders: Stay on track with timely notifications.",
      ],
    },

    {
      title: "Basic",
      price: "$12",
      description: "Enhanced features suited for all teams",
      isFeatured: true,

      benefits: [
        "Unlimited task lists: Organise your projects without limitations.",
        "Collaboration plus: Enjoy advanced collaboration tools for smoother teamwork.",
        "Custom labels: Tailor your labels to suit your workflow.",
      ],
    },

    {
      title: "Business",
      price: "$24",
      description: "Power up your productivity",

      benefits: [
        "Everything in Basic",
        "Advanced collaboration: Delegate tasks, set permissions, and collaborate seamlessly.",
        "Priority support: Get fast, personalised assistance whenever you need it.",
        "Analytics and insights: Gain valuable insights into your team's productivity.",
      ],
    },
  ];

  return (
    <Section id="pricing" className="pricing">
      <Container className="bg-radial-gradient-dark flex flex-col items-center justify-center rounded-3xl overflow-hidden px-4 py-12 md:p-16 mt-8">
        <div className="text-center text-white max-w-[700px] mx-auto px-4 sm:px-0 pb-10 lg:pb-16">
          {title && (
            <h2 className="pb-6 lg:pb-8">
              {title} <br />
              <span className="color-gradient-radial-light">
                {highlightedWord}
              </span>
            </h2>
          )}

          {body && <p className="md:text-lg">{body}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {PricingItems.map((item) => (
            <PricingCard
              className="flex-1"
              key={item.title}
              isFeatured={item.isFeatured}
              title={item.title}
              price={item.price}
              description={item.description}
              benefits={item.benefits}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

Pricing.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  highlightedWord: PropTypes.string,
};

export default Pricing;
