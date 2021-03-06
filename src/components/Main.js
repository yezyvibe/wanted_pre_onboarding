import React, { useRef } from "react";
import styles from "../static/Main.module.css";

export default function Main() {
  const container = useRef();
  const firstSlide = useRef();
  let isCheck = false;
  const onClickPrev = () => {
    if (!container.current) {
      return;
    }
    container.current.style.transitionDuration = "500ms";
    container.current.style.transform = `translateX(${
      firstSlide.current.clientWidth + 28
    }px)`;
    controlBrightness("prev");
    container.current.ontransitionend = () => rearrange("prev");
    isCheck = true;
  };
  const onClickNext = () => {
    if (!container.current) {
      return;
    }
    container.current.style.transitionDuration = "500ms";
    container.current.style.transform = `translateX(-${
      firstSlide.current.clientWidth + 28
    }px)`;
    controlBrightness("next");
    container.current.ontransitionend = () => rearrange("next");
    isCheck = true;
  };

  const controlBrightness = (btn) => {
    if (btn === "prev") {
      container.current.children[1].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[2].firstElementChild.style.filter = "none";
      container.current.children[3].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[1].lastElementChild.style.display = "none";
      container.current.children[2].lastElementChild.style.display = "";
      container.current.children[3].lastElementChild.style.display = "none";
    } else {
      container.current.children[3].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[4].firstElementChild.style.filter = "none";
      container.current.children[5].firstElementChild.style.filter =
        "brightness(50%)";
      container.current.children[3].lastElementChild.style.display = "none";
      container.current.children[4].lastElementChild.style.display = "";
      container.current.children[5].lastElementChild.style.display = "none";
    }
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

    isCheck = false;
  };
  setTimeout(onClickNext, 0);
  setInterval(onClickNext, 5000);

  let startPosition = 0;
  let endPosition = 0;

  const dragStart = (e) => {
    startPosition = e.screenX;
  };

  const dragEnd = (e) => {
    endPosition = e.screenX;
    if (startPosition - endPosition > 100) {
      onClickNext();
      return;
    }
    if (endPosition - startPosition > 100) {
      onClickPrev();
    }
  };

  return (
    <div>
      <div className={styles.window}>
        <div
          className={styles.container}
          ref={container}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        >
          <div className={styles.cell} ref={firstSlide}>
            <img src="img/slide1.jpg" alt="slide1"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>???????????? ????????? ????????????</h2>
              <p className={styles.subtitle}>??? ?????? ?????? ?????? ???!</p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide2.jpg" alt="slide2"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>NO1 ??????/????????? ?????????</h2>
              <p className={styles.subtitle}>????????? ??? ????????? ?????????!</p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide3.jpg" alt="slide3"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>???????????? ?????? 1???</h2>
              <p className={styles.subtitle}>??? ?????? ?????? ???!</p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide4.jpg" alt="slide4"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>????????? ????????? ??????</h2>
              <p className={styles.subtitle}>??? ?????? ?????? ???!</p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide5.jpg" alt="slide5"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>2????????? ?????????????????? ?????????</h2>
              <p className={styles.subtitle}>
                ????????? ?????? ????????? ????????? ?????????
              </p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide6.jpg" alt="slide6"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>????????? ????????? ????????????</h2>
              <p className={styles.subtitle}>???????????? ??? ?????? ?????? ??????!</p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide7.jpg" alt="slide7"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>????????? Wanted</h2>
              <p className={styles.subtitle}>
                ????????? IT ???????????? ?????? ?????? ?????? ???!
              </p>
              <a className={styles.link} href="/">
                ???????????? <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <button className={styles.btn_left} onClick={onClickPrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={styles.btn_right} onClick={onClickNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
