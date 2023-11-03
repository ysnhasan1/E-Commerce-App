import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import { getDetails } from "../redux/features/details/detailsSlice";

function Details() {

    const params = useParams(); // Products.jsx' ten navigate ile geleni burada karşılıyoruz.

    // console.log(params); // returns an object such as {id: '3'}
    // console.log(params.id); // returns 3 (depends on params)

    const dispatch = useDispatch();

    // Sayfa yüklendiğinde gelen id' ye göre ürün çekilecek.
    useEffect(() => {
        dispatch(getDetails(params.id));
    }, [dispatch, params.id]);

    const productDetails = useSelector(state => state.detailsReducer.value);

    const loading = useSelector(state => state.detailsReducer.loading);

    return (
        <div>
            <h1 id="details-heading">DETAILS</h1>

            {loading ? <div style={{ textAlign: "center", marginTop: "200px" }}>Loading...</div> : <SingleProduct productDetails={productDetails} />}

        </div>
    )
};

export default Details;
