import { Container } from "./index";
import { cardImage01, cardImage02, cardImage03 } from "../img/cards/index";

const Cards = () => {
  const cardItems = [
    {
      title: "Seamless collaboration and communication",
      body: "Foster a collaborative work environment by offering intuitive features for team communication and collaboration.",
      image: cardImage01,
    },

    {
      title: "Track progress and achieve milestones",
      body: "Easily identify bottlenecks, measure team performance, and ensure timely completion of projects.",
      image: cardImage02,
    },

    {
      title: "Stay organised and prioritise tasks",
      body: "Stay productive and accomplish more with Philadelphia's intuitive to-do list.",
      image: cardImage03,
    },
  ];

  return (
    <div className="cards">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row gap-4">
          {cardItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-1 flex-col bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-blue transition"
            >
              <div className="flex-grow p-8">
                {item.title && <h5>{item.title}</h5>}
                {item.body && <p className="text-gray-600">{item.body}</p>}
              </div>

              {item.image && <img src={item.image} alt="" />}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cards;
