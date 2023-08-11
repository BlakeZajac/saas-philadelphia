import { Section, Container, PricingCard } from "./index";

const Pricing = () => {
  const PricingItems = [
    {
      title: "Free",
      price: "$0",
      description: "Stay organised, on us!",
      isFeatured: true,

      benefits: [
        "Task lists: Create and manage tasks effortlessly.",
        "Collaboration: Share lists and tasks with your team.",
        "Deadline reminders: Stay on track with timely notifications.",
      ],
    },

    {
      title: "Basic",
      price: "$12",
      description: "Enhanced features from just $12/month",

      benefits: [
        "Unlimited task lists: Organise your projects without limitations.",
        "Collaboration Plus: Enjoy advanced collaboration tools for smoother teamwork.",
        "Custom Labels: Tailor your labels to suit your workflow.",
      ],
    },

    {
      title: "Business",
      price: "$24",
      description: "Power up your productivity",

      benefits: [
        "Everything in Basic",
        "Advanced Collaboration: Delegate tasks, set permissions, and collaborate seamlessly.",
        "Priority Support: Get fast, personalized assistance whenever you need it.",
        "Analytics and Insights: Gain valuable insights into your team's productivity.",
      ],
    },
  ];

  return (
    <Section id="pricing" className="pricing">
      <Container className="bg-radial-gradient-dark flex flex-col items-center justify-center rounded-3xl overflow-hidden p-8 md:p-16">
        <div className="text-center text-white max-w-[700px] mx-auto">
          <h2 className="pb-8">
            Pricing that <br />
            <span className="color-gradient-radial-light">
              suits your needs
            </span>
          </h2>

          <p className="md:text-lg">
            Boost your team&apos;s efficiency with Philadelphia&apos;s intuitive
            task management system. Choose the plan that aligns perfectly with
            your goals and budget.
          </p>
        </div>

        <div>
          {PricingItems.map((item) => (
            <PricingCard
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

export default Pricing;
