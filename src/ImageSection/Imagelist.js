import React, { useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import ImageBtn from "./ImageBtn";
import styles from "../cssModules/ImageList.module.css";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function ImageList({ albumName,addToast,handleNavClick }) {
  const [showImageForm, setShowImageForm] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    if (imageName && imageUrl) {
      async function createDoc() {
        const docRef = doc(db, "album", albumName);
        const newImage = {
          name: imageName,
          url: imageUrl,
        };

        // Fetch the existing data if it exists
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          // If the document exists, merge the new image with the existing data
          const existingData = docSnapshot.data();

          if (existingData.images && Array.isArray(existingData.images)) {
            // If `images` is an array, add the new image to it
            const updatedImages = [...existingData.images, newImage];
            await setDoc(docRef, { images: updatedImages }, { merge: true });
          } else {
            // If `images` is not an array or doesn't exist, create it as an array with the new image
            await setDoc(docRef, { images: [newImage] }, { merge: true });
          }
        } else {
          await setDoc(docRef, { images: [newImage] });
        }

        addToast();

        // Clear the input fields
        setImageName("");
        setImageUrl("");
      }

      createDoc();
    }
  }, [albumName, imageName, imageUrl]);

  useEffect(() => {
    // Listen for real-time updates to the Firestore document
    const docRef = doc(db, "album", albumName);
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data && data.images) {
          setImageArray(data.images);
        }
      }
    });

    return () => {
      // Clean up the listener when the component unmounts
      unsubscribe();
    };
  }, [albumName]);

  return (
    <>
      {showImageForm && <ImageForm setImageName={setImageName} setImageUrl={setImageUrl} />}
      <ImageBtn handleNavClick={handleNavClick} albumName={albumName} showImageForm={showImageForm} setShowImageForm={setShowImageForm} />

      <div className={styles.container}>
        {imageArray.map((image, index) => (
          <div className={styles.boxGroup} key={index}>
            <div className={styles.box}>
              <img src={image.url} alt="pic" />
              <h4>{image.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
