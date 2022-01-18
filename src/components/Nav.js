import React from "react";
import styles from "../static/Nav.module.css";
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.main__logo}>
        <h2 className={styles.company_logo}>
          <i className="fas fa-bars"></i>
        </h2>
        <a href="/" className={styles.company_name}>
          wanted
        </a>
      </div>
      <div>
        <ul className={styles.menu_list}>
          <li className={styles.menu}>
            <button>채용</button>
          </li>
          <li className={styles.menu}>
            <button>이벤트</button>
          </li>
          <li className={styles.menu}>
            <button>직군별 연봉</button>
          </li>
          <li className={styles.menu}>
            <button>이력서</button>
          </li>
          <li className={styles.menu}>
            <button>커뮤니티</button>
          </li>
          <li className={styles.menu}>
            <button>프리랜서</button>
          </li>
          <li className={styles.menu}>
            <button>AI 합격예측</button>
          </li>
        </ul>
      </div>
      <div className={styles.my_page}>
        <div className={styles.icons}>
          <p className={styles.icon_search}>
            <i className="fas fa-search"></i>
          </p>
          <p className={styles.icon}>회원가입/로그인</p>
        </div>
        <div className={styles.btn}>
          <button>기업 서비스</button>
        </div>
      </div>
    </div>
  );
}
