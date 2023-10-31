import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import ZeroDetail from "./ZeroDetail";

function Details() {

    const params = useParams(); // Products.jsx' ten navaigate ile geleni burada karşılıyoruz.

    // console.log(params); // returns an object such as {id: '3'}
    // console.log(params.id); // returns 3 (depends on params)

    const products = useSelector(state => state.productsReducer.value); // products is an array

    const [getProduct, setGetProduct] = useState({});

    // Sayfa yüklendiğinde yapılacak işlemleri useEffect ile belirtiyoruz.
    useEffect(() => {

        // Eğer gelen bir ürün ismi varsa işlemi yap. (kontrollü)
        if (params.id) {
            setGetProduct(products.find((eachProduct) => eachProduct.id == params.id)); // getProduct = product that I clicked on it.
        }

    }, [params.id]); // "params.id" her güncellendiğinde useEffect içini yeniden çalıştır.

    return (
        <div>
            <h1 id="details-heading">DETAILS</h1>

            {getProduct ? <SingleProduct id={getProduct?.id} thumbnail={getProduct?.thumbnail} category={getProduct?.category} brand={getProduct?.brand} title={getProduct?.title} description={getProduct?.description} price={getProduct?.price} /> :
                <ZeroDetail />
            }

            {/* Her bir özellik önce ? ile kontrol edilir. 
                Eğer getProduct mevcut değilse veya herhangi bir özelliği mevcut değilse, 
                bu özelliklere erişim hatası vermez ve undefined döner. 
                Bu sayede uygulama çalışmaya devam edebilir ve hata oluşma riski azaltılır. */}
        </div>
    )
};

export default Details;
