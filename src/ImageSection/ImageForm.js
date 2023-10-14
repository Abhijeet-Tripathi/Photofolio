import React, { useState } from 'react'
import styles from "../cssModules/ImageForm.module.css";
export default function ImageForm({setImageName,setImageUrl}) {

    const [name,setName]=useState('');
    const[image,setImage]=useState('');  
    function handleAdd(e){
        e.preventDefault();
        setImageName(name);
        setImageUrl(image);
    }

    function handleClear(e){
      e.preventDefault();
        setName('');
        setImage('');
    }

  return (
    <div>
        <form className={styles.form}>
            <h2 className={styles.headingCreateAlbum}>Add Image:-</h2>
            <input  className={styles.albumbox}
                    type="text"
                    placeholder='Image name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
            required/>

            <br/><br/>
            
            <input  className={styles.albumbox}
                    type="text"
                    placeholder='Image URL'
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
            required/>
            <button className={styles.clearbtn} onClick={handleClear}>Clear</button>
            <button className={styles.createbtn} onClick={handleAdd}>Add</button>
        </form>
    </div>
  )
}
