// React
import React from 'react'

// React Icons
import { FaStar } from "react-icons/fa"

// CSS
import "../styles/Reviews.css"

const Reviews = ({ product }) => {

    return (
        <div className='mt-3'>
            <div className='row'>
                {product?.reviews?.map((review, index) => {
                    return (
                        <div className='col-12 col-md-4 mb-3' key={index}>
                            <div className='card h-100 p-2'>
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                    <div className='fw-bold reviewer-name me-3'>{review?.reviewerName}</div>

                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FaStar className='text-warning me-1' />
                                        <div className='text-warning fw-bold'>{review?.rating?.toFixed(1)}</div>
                                    </div>
                                </div>
                                <p className='text-muted'>❝ {review?.comment} ❞</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Reviews