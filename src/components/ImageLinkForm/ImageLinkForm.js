import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain detects faces in pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 center w-70' type='text' onChange={onInputChange} />
                    <button className='grow link dib f5 ph3 pv2 bg-light-purple white w-30'>Detect!</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;