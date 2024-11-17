// Sepetteki toplam ürün sayısını hesaplama (navbarda göstermek için)
export const numberOfProducts = (products) => {
    let number = 0

    for (let i = 0; i < products.length; i++) {
        number += products[i].quantity
    }
    return number
}