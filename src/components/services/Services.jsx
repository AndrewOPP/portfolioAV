import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { technologies } from "../../constants/constants.js";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.17,
    },
  },
};

function Services() {
  const ref = useRef();
  // console.log(technologies);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      //   whileInView="animate"
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          I focus on improving myself <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            My <motion.b whileHover={{ color: "orange" }}>Stack</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Includes </motion.b> such
          </h1>
          <button>TECHNOLOGIES</button>
        </div>
      </motion.div>

      <motion.div variants={variants} className="listContainer">
        {technologies.map((technology) => (
          <motion.div variants={variants} key={technology.name}>
            <motion.img
              whileHover={{ scaleX: 1.2, scaleY: 1.2 }}
              width={"100%"}
              src={`/${technology.icon}.png`}
              alt=""
            />
          </motion.div>
        ))}
        {/* <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            recusandae tenetur saepe quibusdam consectetur impedit
            necessitatibus sint natus hic quam odit, minus ad, tempora qui
            reprehenderit atque nemo, iure excepturi.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            recusandae tenetur saepe quibusdam consectetur impedit
            necessitatibus sint natus hic quam odit, minus ad, tempora qui
            reprehenderit atque nemo, iure excepturi.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            recusandae tenetur saepe quibusdam consectetur impedit
            necessitatibus sint natus hic quam odit, minus ad, tempora qui
            reprehenderit atque nemo, iure excepturi.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            recusandae tenetur saepe quibusdam consectetur impedit
            necessitatibus sint natus hic quam odit, minus ad, tempora qui
            reprehenderit atque nemo, iure excepturi.
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}

export default Services;
