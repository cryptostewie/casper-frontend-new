import React from 'react'
import Image from 'next/image'

const Header = () => {
    return <div className="mb-12 flex items-center">
        <div className="relative h-10 w-40">
            <Image layout="fill" alt="logo" src="/img/logo.svg"/>
        </div>
    </div>
}

export default Header