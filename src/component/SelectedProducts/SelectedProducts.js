import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SelectedProducts.css';


const SelectedProducts = ({item}) => {
    const {name, img} = item;
     return (
        <div className='item-box'>
            <div className="img-frame">
               <img src={img} alt="" />
            </div>
            <div>
              <p className='item-name'>{name}</p>
            </div>
            <div>
               <FontAwesomeIcon className='delete-icon' icon={faTrashCan}/>
            </div>
        </div>
    );
};

export default SelectedProducts;