import React, { useContext } from 'react'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
    const user = useContext(MyContext)
    return (
        <div className='bg-green-200 p-5'>
            {user}
        </div>
    )
}

export default Header
