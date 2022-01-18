import styled from "styled-components";
import React, { useRef } from "react";
import styles from "../static/Main.module.css";

// const Slide = styled.div`
//   height: 300px;
//   width: 1060px;
//   position: relative;
// `;

// const Box = styled.div`
//   height: 146px;
//   width: 330px;
//   background-color: white;
//   position: absolute;
//   bottom: 40px;
//   left: 30px;
//   border-radius: 6px;
//   display: flex;
//   flex-direction: column;
// `;
export default function Main() {
  const container = useRef();
  let isCheck = false;
  const onClickPrev = () => {
    container.current.children[1].firstElementChild.style.filter =
      "brightness(50%)";
    container.current.style.transitionDuration = "500ms";
    container.current.style.transform = `translateX(64%)`;
    container.current.ontransitionend = () => rearrange("prev");
    isCheck = true;
  };
  const onClickNext = () => {
    container.current.style.transitionDuration = "500ms";
    container.current.style.transform = `translateX(-63%)`;
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
  // setTimeout(onClickNext, 0);
  // setInterval(onClickNext, 5000);

  return (
    <div>
      <div className={styles.window}>
        <div className={styles.container} ref={container}>
          <div className={styles.cell}>
            <img src="img/slide1.jpg" alt="slide1"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>메타버스 플랫폼 레드브릭</h2>
              <p className={styles.subtitle}>전 직군 적극 채용 중!</p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide2.jpg" alt="slide2"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>NO1 고기/식자재 플랫폼</h2>
              <p className={styles.subtitle}>개발자 및 전직군 채용중!</p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide3.jpg" alt="slide3"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>프롭테크 기업 1위</h2>
              <p className={styles.subtitle}>전 직군 채용 중!</p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide4.jpg" alt="slide4"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>럭셔리 쇼핑을 발란</h2>
              <p className={styles.subtitle}>전 직군 채용 중!</p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide5.jpg" alt="slide5"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>2천만의 라이프스타일 플랫폼</h2>
              <p className={styles.subtitle}>
                우리의 일은 업계의 표준이 됩니다
              </p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide6.jpg" alt="slide6"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>우리가 바라던 내차팔기</h2>
              <p className={styles.subtitle}>헤이딜러 전 직군 적극 채용!</p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className={styles.cell}>
            <img src="img/slide7.jpg" alt="slide7"></img>
            <div className={styles.box}>
              <h2 className={styles.title}>인턴을 Wanted</h2>
              <p className={styles.subtitle}>
                최고의 IT 기업에서 인턴 적극 모집 중!
              </p>
              <a className={styles.link} href="/">
                바로가기 <i className="fas fa-chevron-right"></i>
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
