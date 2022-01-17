import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Slider = styled.div`
  position: relative;
  /* top: -100px; */
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 1060px;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth / 2.8,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth / 2.8,
  },
};

const Button = styled.button`
  margin-bottom: 100px;
  position: absolute;
`;

const offset = 1;

function Home() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    // const totalMovies = 9;
    // const maxIndex = Math.floor(totalMovies / offset) - 1;
    setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Slider>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.5 }}
          key={index}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8]
            .slice(index, index + offset)
            .map((index) => (
              <>
                <Box key={index} url={`img/slide${index}.jpg`} />
                <Box key={index} url={`img/slide${index + 1}.jpg`} />
                <Box key={index} url={`img/slide${index + 2}.jpg`} />
              </>
            ))}
        </Row>
      </AnimatePresence>
      <Button onClick={increaseIndex}>next</Button>
    </Slider>
  );
}
export default Home;
