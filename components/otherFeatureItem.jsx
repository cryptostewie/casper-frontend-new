import React from 'react'
import Image from 'next/image'

const OtherFeatureItem = ({children, className}) => {
    return <div className={["flex items-center space-x-4", className].join(' ')}>
        <Image src="/img/other-feature.svg" width={16} height={16} alt="other-feature-icon" />
        <div className="">{children}</div>
    </div>
}

export default OtherFeatureItem