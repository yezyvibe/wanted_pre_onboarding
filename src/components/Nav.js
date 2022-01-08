import React from "react";
import styles from "../static/Nav.module.css";
export default function Nav() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.main_logo}>
        <h2 className={styles.company_logo}>📑</h2>
        <h2 className={styles.company_name}>wanted</h2>
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
          <h3 className={styles.icon}>🔍</h3>
          <h3 className={styles.icon}>💡</h3>
          <h3 className={styles.icon}>😊</h3>
        </div>
        <div className={styles.btn}>
          <button>기업 서비스</button>
        </div>
      </div>
    </div>
  );
}
