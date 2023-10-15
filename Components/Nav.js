import React from 'react'

const Nav = (props) => {
    console.log(props.num)
    return (
        <div className='bg-red-200'>
            {props.num}
        </div>
    )
}

export default Nav
