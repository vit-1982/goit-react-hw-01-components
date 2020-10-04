import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function Statistics({ title, stats }) {
  function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
