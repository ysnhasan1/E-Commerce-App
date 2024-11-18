// React
import React from 'react'

const H1 = ({ title, className }) => {
    return (
        <h1 className={`my-3 fs-3 text-muted ${className}`}>{title}</h1>
    )
}

export default H1