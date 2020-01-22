import React from 'react';
import If from './if';

const IconButton = ({hide, style, icon, handleClick}) => {
    
    return (
        <If test={hide}>
            <button className={`btn btn-${style}`}
                onClick={handleClick}>
                <i>{icon}</i>
            </button>
        </If>
    )
}

export default IconButton;