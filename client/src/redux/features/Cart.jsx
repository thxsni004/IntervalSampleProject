// src/redux/features/Cart.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  purchased: [],
    products: [  // Add your products to initial state
    { id: 1, title: "Smartphone X10", "image": "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 5, rating: 4.5 },
    { id: 2, title: "Wireless Headphones Z", "image": "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 2, rating: 4.2 },
    { id: 3, title: "Gaming Laptop Pro", "image": "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 0, rating: 4.8 },
    { id: 4, title: "Smartwatch Gen 5", "image": "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 3, rating: 4.0 }
  ]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartList.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartList.push({ ...product, count: 1 });
      }
    },
    
    increment: (state, action) => {
      const productID = action.payload;
      const item = state.cartList.find(item => item.id === productID);
      if (item) {
        item.count += 1;
      }
    },
    
    decrement: (state, action) => {
      const productID = action.payload;
      const item = state.cartList.find(item => item.id === productID);
      if (item) {
        item.count -= 1;
        if (item.count <= 0) {
          state.cartList = state.cartList.filter(item => item.id !== productID);
        }
      }
    },
    
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(item => item.id !== action.payload);
    },
    
    buyProducts: (state) => {
      state.purchased = [...state.purchased, ...state.cartList];
      state.cartList = [];
    },
    
    buyProduct: (state, action) => {
      const product = action.payload;
       // Find the product in products array
      const productIndex = state.products.findIndex(p => p.id === product.id);
      
      if (productIndex !== -1 && state.products[productIndex].available > 0) {
        // Decrease available count
        state.products[productIndex].available -= 1;
        
        // Add to purchased
        const existingPurchased = state.purchased.find(p => p.id === product.id);
        if (existingPurchased) {
          existingPurchased.count += 1;
        } else {
          state.purchased.push({...product, count: 1});
        }
// Remove from cart if present
        state.cartList = state.cartList.filter(item => item.id !== product.id);
      }
    },
    
    // Add a reducer to update products (for when we fetch them)
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  addToCart,
  removeFromCart,
  buyProducts,
  buyProduct,
  setProducts
} = cartSlice.actions;

export default cartSlice.reducer;