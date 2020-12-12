import React from 'react';

const ReviewRow: React.FC = () => {
    return (
        <>
            <div className='col s5'>
                <h6 style={{
                    color:'grey darken-4'
                }}>
                    Title
                </h6>
                <h6 style={{
                    color:'grey darken-3'
                }}>
                    Text
                </h6>
                <div style={{
                    height:'1px'
                }} className='col s12 grey lighten-3'></div>
            </div>
        </>
    )
}

export default ReviewRow