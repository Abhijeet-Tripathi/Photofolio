import React, { useState } from 'react';
import styles from '../cssModules/Albumform.module.css';
import { db } from '../firebase';
import { setDoc, doc} from 'firebase/firestore';

export default function AlbumForm({ albumTitles, setAlbumTitles }) {
  const [albumName, setAlbumName] = useState('');

  async function createAlbum() {
    if (albumName.trim() === "") {
      console.error("Album name cannot be empty.");
      return;
    }

    try {
      // Update the local state first
      setAlbumTitles([...albumTitles, albumName]);

      // Create the album in Firestore
      await setDoc(doc(db, 'album', albumName), {});
      setAlbumName(''); // Clear the input field
    } catch (error) {
      console.error("Error creating album:", error);
    }
  }

  return (
    <div>
      <form className={styles.form}>
        <h2 className={styles.headingCreateAlbum}>Create an Album:</h2>
        <input
          className={styles.albumbox}
          type="text"
          placeholder="Album name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          required
        />
        <button onClick={() => setAlbumName('')} className={styles.clearbtn}>
          Clear
        </button>
        <button onClick={createAlbum} className={styles.createbtn}>
          Create
        </button>
      </form>
    </div>
  );
}
