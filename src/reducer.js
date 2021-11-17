
export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0 );


export const initialState = {
  basket: [
    {
      id: 1212121212,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41A+vI6vMyL._SX334_BO1,204,203,200_.jpg",
      title:
        "The Concise 33 Strategies of War (The Modern Machiavellian Robert Greene) Paperback – 5",
      price: 221,
      rating: 4,
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action); 
  switch (action.type) {
    case "SET_USER" :
      return{
        ...state, 
        user: action.user,
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      //logic to add in basket
      break;
    case "REMOVE_FROM_BASKET":
      //logic to remove from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item in basket remo ve it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product ( id: ${action.id} as its not  )`);
      }
      return { ...state, basket: newBasket };
 break;
    default:
      return state;
  }
} 
export default reducer;
