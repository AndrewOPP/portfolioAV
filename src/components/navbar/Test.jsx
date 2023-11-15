import { motion } from "framer-motion";

const items = ["item1", "item2", "item3", "item4"];

export const Test = () => {
  return (
    <div className="course">
      <motion.ul>
        {items.map((item) => {
          return <motion.li key={item}>{item}</motion.li>;
        })}
      </motion.ul>
    </div>
  );
};
