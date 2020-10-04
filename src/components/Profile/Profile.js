import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile({ name, tag, location, avatar, stats }) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <div className={styles.container}>
      <div className={styles.descr}>
        <img src={avatar} alt={name} className={styles.image} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{numberWithSpaces(followers)}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{numberWithSpaces(views)}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{numberWithSpaces(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: "http://placehold.it/150x150/",
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Profile;
