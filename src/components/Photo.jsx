import React from 'react'

function Photo({ server, id, secret, title}) {
    return (
        <li>
          <img 
          src={`https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
          alt={title}
          />  
        </li>
    );
}
export default Photo
