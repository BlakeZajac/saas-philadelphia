import PropTypes from "prop-types";
import { blogImage01, blogImage02, blogImage03 } from "../img/blog/index";
import { Section, Container } from "./index";

const Blog = ({ title, body }) => {
  const blogPosts = [
    {
      image: blogImage01,
      title: "Mastering task prioritisation: a guide for teams",
      excerpt:
        "Learn how to effectively prioritise tasks to boost your team's productivity. Discover strategies, techniques, and best practices for making the most out of the Philadelphia task management system.",
    },
    {
      image: blogImage02,
      title:
        "Collaboration redefined: unlocking team synergy with Philadelphia",
      excerpt:
        "Explore how Philadelphia's advanced collaboration tools can transform the way your team works together. From task delegation to real-time updates, find out how to harness the power of seamless teamwork.",
    },
    {
      image: blogImage03,
      title:
        "The productivity playbook: supercharge your workflow with Philadelphia",
      excerpt:
        "Dive into our comprehensive guide on optimising your workflow using Philadelphia. Uncover hidden features, time-saving tricks, and expert tips to take your team's efficiency to new heights.",
    },
  ];

  return (
    <Section id="blog" className="blog">
      <Container className="flex flex-col gap-12 py-20 md:gap-20 md:py-20">
        <div className="mx-auto max-w-[600px] text-center">
          {title && <h2 className="h3">{title}</h2>}
          {body && <p className="text-gray-700">{body}</p>}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {blogPosts.map((item) => (
            <article key={item.title} className="flex flex-col flex-1 gap-8">
              {item.image && (
                <div className="overflow-hidden w-full rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-full hover:scale-105 transition h-[350px] object-cover"
                  />
                </div>
              )}

              <div>
                {item.title && <h2 className="h5 pb-6">{item.title}</h2>}
                {item.excerpt && (
                  <p className="text-gray-700">{item.excerpt}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Blog;
