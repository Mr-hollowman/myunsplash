import React, { useState } from 'react';
import UploadButton from './UploadButton';
import Animated from './animated.gif'

function AddImage({handleAddBanner, uploadImage}) {
    const [addImage,setImage]=useState(false);
    return (
        <div>
            <button className='btn btn-outline-primary' onClick={()=>setImage(!addImage)}>Add Image</button>
            <div className={addImage?'content-container d-flex justify-content-center':'close'}>
                <div className={addImage?'open col-6 shadow-lg p-3 mb-5 bg-body rounded':'close'}>
                    <input type='text' className='margin full-width form-control' id='exampleInputEmail1' placeholder='Enter the Lable for Image' />
                    <button className="margin full-width btn btn-primary">
                        <UploadButton onChange={handleAddBanner} accept="image/*">
                            select image for upload
                        </UploadButton>
                    </button>
                    <button className='margin btn btn-primary' style={{width:'100px',marginLeft:'45%'}} onClick={uploadImage}>upload</button>
                </div>

            </div>
        </div>
    );
}

export default AddImage;