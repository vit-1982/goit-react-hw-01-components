import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        const { avatar, name, isOnline, id } = friend;
        return FriendListItem({ avatar, name, isOnline, id });
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
