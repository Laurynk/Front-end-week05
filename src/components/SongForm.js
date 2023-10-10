import { useState } from "react";
import { nanoid } from "nanoid"; //check d2l week5

export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    //add song to playlist
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      played: false,
      id: nanoid()
    };
    props.addSong(newSong);

    //Rest title and artist
    setTitle("");
    setArtist("");
  }

  return (
    <div className="edit">
      <h3>Add another song</h3>.
      <form onSubmit={handleSubmit}>
        <label>
          Song title:
          <input type="text" onChange={handleTitleChange} value={title} />
        </label>
        <label>
          Artist name:
          <input type="text" onChange={handleArtistChange} value={artist} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
