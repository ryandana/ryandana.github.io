import React, {ReactNode} from 'react'

type Desc = {
    children: ReactNode,
    className?: string,
}

function Desc({children, className = ""}: Desc) {
    return (
        <p className={`md:text-base text-sm text-muted-foreground leading-relaxed ${className}`}>{children}</p>
    )
}

export default Desc
