import React from 'react'

export default function AlbumBtn({showAlbumbtn,setshowAlbumbtn}) {
  return (
    <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "25px",
        }}
      >
        <h1>Your Albums</h1>
        <button onClick={() => setshowAlbumbtn(!showAlbumbtn)}>
          {showAlbumbtn ? "Cancel" : "Add Album"}
        </button>
      </div>
  )
}
