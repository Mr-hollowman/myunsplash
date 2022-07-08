import React from 'react';

function ImageList({imageList, setImgHover, imgHover}) {
    return (
        <div className='container'>
            {imageList.map((url)=>{
            return <div key={url} className='image-wrapper'><img onMouseOver={()=>setImgHover(!imgHover)} onMouseLeave={()=>setImgHover(!imgHover)} className={imgHover?'image special':'image'} src={url} alt='my-image' /></div>
           })}
        </div>
    );
}

export default ImageList;