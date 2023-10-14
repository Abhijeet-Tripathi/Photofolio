import React, { useEffect } from 'react';
import styles from "../cssModules/AlbumList.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export default function AlbumList({ showImageSection, albumTitles, setAlbumTitles }) {
  useEffect(() => {
    async function getAlbums() {
      const arr = [];

      const querySnapshot = await getDocs(collection(db, "album"));
      querySnapshot.forEach((doc) => {
        arr.push(doc.id);
      });

      setAlbumTitles(arr);
    }

    getAlbums();
  }, [setAlbumTitles]);

  useEffect(() => {
    // console.log(albumTitles);
  }, [albumTitles]);

  return (
    <div className={styles.container}>
      {albumTitles.map((album, index) => (
        <div className={styles.box} key={index} onClick={() => showImageSection(album)}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/landscape-image-picture-photo-album-photos-64.png"
            alt="pic"
          />
          <h4>{album}</h4>
        </div>
      ))}
    </div>
  );
}
