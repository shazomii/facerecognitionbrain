import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center ma'>
            <div className='mt2' style={{ width: '80%', height: 'auto' }}>
                <img alt='' src={imageURL} />
            </div>
        </div>
    )
}

export default FaceRecognition;