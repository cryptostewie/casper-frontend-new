import React from 'react'

const ArrowButton = ({children}) => {
    return <div className="flex items-center space-x-4">
        <div className="text-white">{children}</div>
        <div className="text-white text-red-400 text-lg">→</div>
    </div>
}

export default ArrowButton