import React, { useEffect, useState } from 'react';
import { storage } from './config';
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import ImageList from './ImageList';
import UploadButton from './UploadButton';
import AddImage from './AddImage';
import Navbar from './Navbar';

function App() {
    const [imgHover,setImgHover]=useState(false);
    console.log(imgHover);
    const [image,setImage]=useState('');
    const [imageList,setImageList]=useState([]);
    const imageListRef=ref(storage ,"image/");
    const [metadata, setMetaData]=useState([])

    const uploadImage=()=>{
        if(image==null) return;
        const imageRef=ref(storage,`image/${image.name}`);
        uploadBytes(imageRef,image).then((res)=>{
            console.log(res);
        })
    }
    useEffect(()=>{
        listAll(imageListRef).then((res)=>{
            res.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev, url])
                })
            })
        })
    },[]);
    const handleAddBanner = ({ target: { files } }) => {
        const loadedImage = files[0];
        setImage(loadedImage)
      };
    return (
        <div className='body'>
        <div className='total-container'>
            <Navbar />
           <ImageList imageList={imageList} setImgHover={setImgHover} imgHover={imgHover} />
        </div>
        </div>
    );
}

export default App;