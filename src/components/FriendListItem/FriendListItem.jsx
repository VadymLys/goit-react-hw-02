import css from "../FriendListItem/FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx("status", {
          [css["onlineText"]]: isOnline,
          [css["offlineText"]]: !isOnline,
        })}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
