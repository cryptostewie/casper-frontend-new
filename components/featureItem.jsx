import React from 'react'
import Image from 'next/image'

const FeatureItem = ({children, className}) => {
    return <div className={["flex items-center space-x-4", className].join(' ')}>
        <Image src="/img/feature.svg" width={16} height={16} alt="feature-icon" />
        <div className="">{children}</div>
    </div>
}

export default FeatureItem