import React, { useRef } from "react";
import styles from "../static/Main.module.css";

export default function Main() {
  const container = useRef();
  let isCheck = false;
  const onClickPrev = () => {
    container.current.style.transitionDuration = "1300ms";
    container.current.style.transform = `translateX(50%)`;
    container.current.ontransitionend = () => rearrange("prev");
    isCheck = true;
    console.log("prev 눌렸을 때");
  };
  const onClickNext = () => {
    container.current.style.transitionDuration = "1300ms";
    container.current.style.transform = `translateX(-50%)`;
    container.current.ontransitionend = () => rearrange("next");
    isCheck = true;
    console.log("next 눌렸을 때");
  };

  const rearrange = (btn) => {
    console.log("rearrange 들어옴");
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
          <div className={styles.cell}>
            <img src="img/slide1.jpg" alt="slide1"></img>
          </div>
          <div className={styles.cell}>
            <img src="img/slide2.jpg" alt="slide2"></img>
          </div>
          <div className={styles.cell}>
            <img src="img/slide3.jpg" alt="slide3"></img>
          </div>
          <div className={styles.cell}>
            <img src="img/slide4.jpg" alt="slide4"></img>
          </div>
          <div className={styles.cell}>
            <img src="img/slide5.jpg" alt="slide5"></img>
          </div>
        </div>
      </div>
      <div className={styles.btnBox}>
        <button className={styles.btn} onClick={onClickPrev}>
          👈
        </button>
        <button className={styles.btn} onClick={onClickNext}>
          👉
        </button>
      </div>
    </div>
  );
}
