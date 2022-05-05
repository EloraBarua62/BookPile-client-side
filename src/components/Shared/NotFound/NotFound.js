import React from 'react';
import not_found from '../../../page_not_found.jpg'

const NotFound = () => {
    return (
        <div className=''>
            <img src={not_found} alt="" style={{width:'600px',height:'500px'}}/>
        </div>
    );
};

export default NotFound;