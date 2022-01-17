import styled from "styled-components";
import React, { useRef } from "react";
import styles from "../static/Main.module.css";

const Box = styled.div`
  height: 300px;
  width: 1060px;
`;
export default function Main() {
  const container = useRef();
  let isCheck = false;
  const onClickPrev = () => {
    container.current.style.transitionDuration = "900ms";
    container.current.style.transform = `translateX(64%)`;
    container.current.ontransitionend = () => rearrange("prev");
    isCheck = true;
  };
  const onClickNext = () => {
    container.current.style.transitionDuration = "900ms";
    container.current.style.transform = `translateX(-63%)`;
    container.current.ontransitionend = () => rearrange("next");
    isCheck = true;
  };

  const rearrange = (btn) => {
    container.current.removeAttribute("style");
    if (!isCheck) {
      return;
    }
    btn === "prev"
      ? container.current.insertBefore(
          container.current.lastElementChild,
          container.current.firstElementChild
        )
      : container.current.appendChild(container.current.firstElementChild);
    console.log(container.current);
    isCheck = false;
  };

  return (
    <div>
      <div className={styles.window}>
        <div className={styles.container} ref={container}>
          <Box className={styles.cell}>
            <img src="img/slide1.jpg" alt="slide1"></img>
          </Box>
          <Box className={styles.cell}>
            <img src="img/slide2.jpg" alt="slide2"></img>
          </Box>
          <Box className={styles.cell}>
            <img src="img/slide3.jpg" alt="slide3"></img>
          </Box>
          <Box className={styles.cell}>
            <img src="img/slide4.jpg" alt="slide4"></img>
          </Box>
          <Box className={styles.cell}>
            <img src="img/slide5.jpg" alt="slide5"></img>
          </Box>
        </div>
        <button className={styles.btn_left} onClick={onClickPrev}>
          👈
        </button>
        <button className={styles.btn_right} onClick={onClickNext}>
          👉
        </button>
      </div>
    </div>
  );
}
