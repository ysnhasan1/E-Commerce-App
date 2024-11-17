// React
import React from 'react'

const H1 = ({ title, className }) => {
    return (
        <h1 className={`fw-bold my-3 fs-2 ${className}`}>{title}</h1>
    )
}

export default H1