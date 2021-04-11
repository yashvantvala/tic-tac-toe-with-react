import React from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = ({name}) => {
    let icon = null;
    switch (name){
        case 'circle':
            return <FaRegCircle className="icon"/>
            
        case 'cross':
            return <FaTimes className="icon"/>
            
        case 'empty':
            return <FaPen className="icon"/>
            
        default:
            return <FaPen className="icon"/>
    }
}

export default Icon;