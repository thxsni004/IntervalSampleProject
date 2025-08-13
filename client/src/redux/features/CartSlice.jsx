// src/redux.js
import { createSlice } from "@reduxjs/toolkit";

// Helper function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState).cart;
  } catch (err) {
    return undefined;
  }
};

const initialState = {
  cartList: [],
  purchased: [],
  products: [
    // Add your products to initial state
    {
      id: 1,
      title: "Smartphone X10",
      image: "https://m.media-amazon.com/images/I/71WOxp+2hFL._AC_SL1500_.jpg",
      available: 5,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Wireless Headphones Z",
      image:
        "http://www.bhphotovideo.com/images/images2500x2500/skullcandy_s6hbgy_374_hesh_2_bluetooth_headphones_1085703.jpg",
      available: 2,
      rating: 4.2,
    },
    {
      id: 3,
      title: "Gaming Laptop Pro",
      image:
        "https://www.guidingtech.com/wp-content/uploads/N_Best_Gaming_Laptops_for_Valorant_Under_-1500.jpg",
      available: 0,
      rating: 4.8,
    },
    {
      id: 4,
      title: "Smartwatch Gen 5",
      image:
        "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2019/08/Fossil-Gen-5-Smartwatch-image-1.jpg",
      available: 3,
      rating: 4.0,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartList.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartList.push({ ...product, count: 1 });
      }
    },

    increment: (state, action) => {
      const productID = action.payload;
      const item = state.cartList.find((item) => item.id === productID);
      if (item) {
        item.count += 1;
      }
    },

    decrement: (state, action) => {
      const productID = action.payload;
      const item = state.cartList.find((item) => item.id === productID);
      if (item) {
        item.count -= 1;
        if (item.count <= 0) {
          state.cartList = state.cartList.filter(
            (item) => item.id !== productID
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },

    buyProducts: (state) => {
      // Add all cart items to purchased
      state.cartList.forEach((cartItem) => {
        const existingPurchase = state.purchased.find(
          (p) => p.id === cartItem.id
        );
        if (existingPurchase) {
          existingPurchase.count += cartItem.count;
        } else {
          state.purchased.push({ ...cartItem });
        }

        // Update product availability
        const product = state.products.find((p) => p.id === cartItem.id);
        if (product) {
          product.available = Math.max(0, product.available - cartItem.count);
        }
      });

      state.cartList = [];
    },

    buyProduct: (state, action) => {
      const product = action.payload;
      const productInStore = state.products.find((p) => p.id === product.id);

      if (productInStore && productInStore.available > 0) {
        // Decrease available count
        productInStore.available -= 1;

        // Add to purchased
        const existingPurchased = state.purchased.find(
          (p) => p.id === product.id
        );
        if (existingPurchased) {
          existingPurchased.count += 1;
        } else {
          state.purchased.push({
            ...productInStore,
            count: 1,
          });
        }
        // Remove from cart if present
        state.cartList = state.cartList.filter(
          (item) => item.id !== product.id
        );
      }
    },

    // Add a reducer to update products (for when we fetch them)
    // setProducts: (state, action) => {
    //   state.products = action.payload;
    // }
  },
});

export const {
  increment,
  decrement,
  addToCart,
  removeFromCart,
  buyProducts,
  buyProduct,
  setProducts,
} = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// // Load state from localStorage
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('reduxState');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState).cart;
//   } catch (err) {
//     return undefined;
//   }
// };

// const initialState = loadState() || {
//   cartList: [],
//   purchased: [],
//   products: [
//     { id: 1, title: "Smartphone X10", image: "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 15, rating: 4.5 },
//     { id: 2, title: "Wireless Headphones Z", image: "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 2, rating: 4.2 },
//     { id: 3, title: "Gaming Laptop Pro", image: "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 0, rating: 4.8 },
//     { id: 4, title: "Smartwatch Gen 5", image: "https://www.sammobile.com/wp-content/uploads/2023/01/Galaxy-A14-5G-14.jpg", available: 3, rating: 4.0 }
//   ]
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const productInStore = state.products.find(p => p.id === product.id);

//       // Check availability before adding to cart
//       if (productInStore.available > 0) {
//         const existingItem = state.cartList.find(item => item.id === product.id);

//         if (existingItem) {
//           existingItem.count += 1;
//         } else {
//           state.cartList.push({ ...product, count: 1 });
//         }
//         productInStore.available -= 1;
//       }
//     },

//     increment: (state, action) => {
//       const productID = action.payload;
//       const item = state.cartList.find(item => item.id === productID);
//       if (item) item.count += 1;
//     },

//     decrement: (state, action) => {
//       const productID = action.payload;
//       const item = state.cartList.find(item => item.id === productID);
//       if (item) {
//         item.count -= 1;
//         if (item.count <= 0) {
//           state.cartList = state.cartList.filter(item => item.id !== productID);
//         }
//       }
//     },

//     removeFromCart: (state, action) => {
//       state.cartList = state.cartList.filter(item => item.id !== action.payload);
//     },

//     buyProducts: (state) => {
//       // Add all cart items to purchased
//       state.cartList.forEach(cartItem => {
//         const existingPurchase = state.purchased.find(p => p.id === cartItem.id);
//         if (existingPurchase) {
//           existingPurchase.count += cartItem.count;
//         } else {
//           state.purchased.push({...cartItem});
//         }

//         // Update product availability
//         const product = state.products.find(p => p.id === cartItem.id);
//         if (product) {
//           product.available = Math.max(0, product.available - cartItem.count);
//         }
//       });

//       state.cartList = [];
//     },

//     buyProduct: (state, action) => {
//   const product = action.payload;
//       const productInStore = state.products.find(p => p.id === product.id);

//       if (productInStore && productInStore.available > 0) {
//         productInStore.available -= 1;

//         const existingPurchased = state.purchased.find(p => p.id === product.id);
//         if (existingPurchased) {
//           existingPurchased.count += 1;
//         } else {
//           state.purchased.push({
//             ...productInStore,
//             count: 1
//           });
//         }

//         state.cartList = state.cartList.filter(item => item.id !== product.id);
//       }
//     },
//         // Add a new reducer to reset product availability (optional)
//     resetProducts: (state) => {
//       state.products = initialState.products;
//     }
//   }
// });

// export const {
//   increment,
//   decrement,
//   addToCart,
//   removeFromCart,
//   buyProducts,
//   buyProduct,
//   resetProducts
// } = cartSlice.actions;

// export default cartSlice.reducer;
