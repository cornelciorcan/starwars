import React from 'react';

const Card = ({ Title, Release, Producer }) => {
    return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
        
        <div>
            <h2>{Title}</h2>
            <p>{release}</p>
            <p>{producer}</p>
        </div>
    </div>
)

}
export default Card