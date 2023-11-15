import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tasty Treats",
    img: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://daniil0040.github.io/project-team-scriptores/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Simply Chocolate",
    img: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://haberserhii.github.io/flexible-mindbreakers/",
    desc: "Simply Chocolate offering a collection of interactive challenges to stimulate cognitive flexibility, creativity, and problem-solving. Users can select challenges from colorful icons, each leading to engaging puzzles with instructions. The diverse challenges encourage users to think creatively, fostering skills to approach problems unconventionally. The visually appealing and responsive design enhances the overall user experience.",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    img: "https://media.licdn.com/dms/image/C5612AQHm4tg5c35tLg/article-cover_image-shrink_600_2000/0/1584175590822?e=2147483647&v=beta&t=qm5hr2_27kVDNVn_sE3GbMazFcsr0i-6HeQrF807dEw",
    link: "https://andrewopp.github.io/Tic-Tac-Toe/",
    desc: "Here you can play Tic Toe against Bot. Its my first test browser game. Good luck!",
  },
  {
    id: 4,
    title: "All projects",
    img: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://andrewopp.github.io/all-my-projects/",
    desc: "A platform where i can add/change/remove my projects. Here you can see live page, github page and technologies of every project.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item} item={item} />;
      })}
    </div>
  );
}

export default Portfolio;
