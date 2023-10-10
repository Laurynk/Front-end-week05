import sound from "../icons/sound.png";
import deleteIcon from "../icons/delete.png";

export default function Song(props) {
  const song = props.song;

  function handleDelete() {
    props.remove(song);
  }

  function handleStatusChange() {
    props.togglePlayed(song);
  }

  return (
    <li className="song">
      <div className="song-details">
        <div>
          <img src={sound} alt="" />
        </div>
        <p>
          <span>
            {song.played === true ? <del>{song.title}</del> : song.title}
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={song.played}
            />
          </span>
          <span>{song.artist}</span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <img src={deleteIcon} alt="delete icon" />
      </div>
    </li>
  );
}
