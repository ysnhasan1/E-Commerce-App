// Sepetteki ürünlerin fiyatlarının toplamını hesaplama
export const totalPrice = (products) => {
    let totalPrice = 0

    for (let i = 0; i < products.length; i++) {
        totalPrice += (products[i].price).toFixed(1) * products[i].quantity // Her ürünü adedi ile çarparak toplam fiyatı hesaplama
    }
    return totalPrice
}