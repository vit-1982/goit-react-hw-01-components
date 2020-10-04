import React from "react";
import styles from "./FriendListItem.module.css";
// import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img src={avatar} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "http://placehold.it/130x130/",
  isOnline: false,
};

// FriendListItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool,
//   id: PropTypes.number.isRequired,
// };

export default FriendListItem;
