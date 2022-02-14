import React from 'react';
import telescope from '../pics/telescope7.png'

interface Tasks {

}

export const TaskHeader: React.FC = () => {

    return (
        <div className="bluefont flex alignitems">
            <span>
                <img src={telescope} alt='telescope pic' height='75' />
            </span>
            <h3>Dev OverLook</h3>
        </div>
    )

}