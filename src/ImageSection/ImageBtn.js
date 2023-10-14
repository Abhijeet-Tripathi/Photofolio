import React from 'react';

export default function ImageBtn({albumName,showImageForm,setShowImageForm,handleNavClick}) {

  return (
    <div><div
    style={{
      display: "flex",
      justifyContent: "space-between",
      margin: "25px",
    }}
  >
    <button onClick={handleNavClick}>Go Back</button>
    <h1>Your Images in {albumName} :</h1>
    <button onClick={() => setShowImageForm(!showImageForm)}>
      {showImageForm ? "Cancel" : "Add Image"}
    </button>
  </div></div>
  )
}
