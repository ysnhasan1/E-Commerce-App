import { createSlice } from '@reduxjs/toolkit'

// Toast
import { toast } from "react-hot-toast"

const fetchFromLocalStorage = () => {

    let value = localStorage.getItem("value")
    if (value) {
        return JSON.parse(value)
    }
    else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem("value", JSON.stringify(data))
}

const initialState = {
    value: fetchFromLocalStorage(),
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.value.find(product => product.id === action.payload.id)

            // Eklemek istenen ürün sepette mevcut ise
            if (existingProduct) {
                existingProduct.quantity += 1 // Sepetteki adedini artır
            }

            state.value = [...state.value, { ...action.payload, quantity: 1 }]

            // Sepette sadece bir kere göstermek için, aynı ürünleri birleştir
            const uniqueProducts = state.value.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            )

            state.value = uniqueProducts
            storeInLocalStorage(state.value)
            toast.success("One product added to your cart.")
        },

        remove: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload)

            // Eğer bulunan indeks -1 değilse (yani ürün bulunduysa),
            // bu, ürünün dizide bulunduğu anlamına gelir.
            if (index !== -1) {
                state.value.splice(index, 1) // Sepetten bu indeksi kullanarak 1 öğeyi çıkarır.
                storeInLocalStorage(state.value)
                toast.success(`All products removed from your cart.`)
            }
        },

        removeOne: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload)

            if (index !== -1) {
                if (state.value[index].quantity > 1) {
                    // Ürünün adeti 1'den büyükse, adedini azalt
                    state.value[index].quantity -= 1
                    storeInLocalStorage(state.value)
                    toast.success("One product removed from your cart.")
                }
            }
        }
    },
});

export const { add, remove, removeOne } = navbarSlice.actions

export default navbarSlice.reducer