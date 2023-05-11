import React from 'react'

const Sublist = ({ subList, isOpen }) => {
    console.log('subList :>> ', subList);
    console.log('isOpen :>> ', isOpen);
    return (
        <div>{isOpen ? subList?.map((item, index) => {
            return <li key={index}>{item}</li>
        }) : ''}</div>
    )
}

export default Sublist