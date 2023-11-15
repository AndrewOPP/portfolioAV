import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          animate="animate"
          className="textContainer"
          initial="initial"
          variants={textVariants}
        >
          <motion.h2 variants={textVariants}>ANDREW VYBLOV</motion.h2>
          <motion.h1 variants={textVariants}>
            Young and perspective web developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a
              href="#Portfolio"
              whileHover={{
                borderColor: "rebeccapurple",
                color: "rebeccapurple",
              }}
            >
              See the Latest Works
            </motion.a>
            <motion.a
              href="#Contact"
              whileHover={{
                borderColor: "rebeccapurple",
                color: "rebeccapurple",
              }}
            >
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            animate="scrollButton"
            variants={textVariants}
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={sliderVariants}
        className="slidingTextContainer"
      >
        Writer Content Creator Debeloper
      </motion.div>
      <div className="imageContainer">
        <img src="/heroImg.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
