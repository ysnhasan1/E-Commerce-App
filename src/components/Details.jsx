// React
import React, { useEffect } from "react"

// React Router Dom
import { useParams } from "react-router-dom"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from "../redux/features/details/detailsSlice"

// Components
import Loading from './Loading'
import Product from "./Product"

const Details = () => {

    const params = useParams()
    const dispatch = useDispatch()

    const loading = useSelector(state => state.detailsReducer.loading)
    const product = useSelector(state => state.detailsReducer.value)

    useEffect(() => {
        dispatch(getDetails(params.id))
    }, [dispatch, params.id])

    return (
        <div>
            {loading ? <Loading /> : <Product product={product} />}
        </div>
    )
}

export default Details