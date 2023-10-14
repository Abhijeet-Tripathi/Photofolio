import { useState } from "react";
import Navbar from "./Navbar";
import Albumform from "./AlbumSection/Albumform";
import AlbumBtn from "./AlbumSection/AlbumBtn";
import AlbumList from "./AlbumSection/AlbumList";
import ImageList from "./ImageSection/Imagelist";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showAlbumform, setshowAlbumform] = useState(false);
  const [showAlbumbtn, setshowAlbumbtn] = useState(true);
  const [showAlbumlist, setshowAlbumlist] = useState(true);
  const [showImagelist, setshowImagelist] = useState(false);
  const [albumName, setAlbumName] = useState('');
  const [albumTitles, setAlbumTitles] = useState([]);

  // Function to show the image section for a selected album
  async function showImageSection(album) {
    setAlbumName(album);
    setshowAlbumform(false);
    setshowAlbumbtn(false);
    setshowAlbumlist(false);
    setshowImagelist(true);
  }

  async function handleNavClick(){
    setshowAlbumform(false);
    setshowAlbumbtn(true);
    setshowAlbumlist(true);
    setshowImagelist(false);
  }

  function addToast(){
    toast.success('🦄 Image added Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <>
      <Navbar handleNavClick={handleNavClick}/>
      {showAlbumform && (
        <Albumform
          albumTitles={albumTitles}
          setAlbumTitles={setAlbumTitles}
        />
      )}

      {showAlbumbtn && <AlbumBtn showAlbumbtn={showAlbumform} setshowAlbumbtn={setshowAlbumform}  />}

      {showAlbumlist && (
        <AlbumList
          showImageSection={showImageSection}
          albumTitles={albumTitles}
          setAlbumTitles={setAlbumTitles}
        />
      )}

      {showImagelist && <ImageList albumName={albumName} addToast={addToast} handleNavClick={handleNavClick} />}

      <ToastContainer/>
    </>
  );
}

export default App;
