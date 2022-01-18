import styled from "styled-components";
import React, { useRef } from "react";
import styles from "../static/Main.module.css";
import { Children } from "react/cjs/react.production.min";

const Box = styled.div`
  height: 300px;
  width: 1060px;
`;
export default function Main() {
  const container = useRef();
  let isCheck = false;
  const onClickPrev = () => {
    container.current.children[1].firstElementChild.style.filter =
      "brightness(50%)";
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

  const controlBrightness = (btn) => {
    if (btn === "prev") {
      container.current.children[0].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[1].firstElementChild.style.filter = "none";
      container.current.children[2].firstElementChild.style.filter =
        "brightness(50%)";
    } else {
      container.current.children[2].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[3].firstElementChild.style.filter = "none";
      container.current.children[4].firstElementChild.style.filter =
        "brightness(50%)";
    }
  };

  const rearrange = (btn) => {
    container.current.removeAttribute("style");
    controlBrightness(btn);
    if (!isCheck) {
      return;
    }
    btn === "prev"
      ? container.current.insertBefore(
          container.current.lastElementChild,
          container.current.firstElementChild
        )
      : container.current.appendChild(container.current.firstElementChild);

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
