const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// action is object with type property
// action creater is an func with return type as  action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}
function addCake() {
  return {
    type: "ADD_CAKE",
  };
}
// reducer: specify how the app's state changes in response
// to actions sent to the store
// reducer is an func that accept state and action as an arguments
// and return the next state
// (prevState,action)=>newState

const initialState = {
  noOfCakes: 10,
  noOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    case "ADD_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1,
      };

    default:
      return state;
  }
};

// store provides
// getState() - to give access to current state
// dispatch(action) - to allow state to be updated
// register listeners via subscrible(listener)
// can unregister listeners via the func returned by subscribe(listener)

const store = createStore(reducer);

console.log("inital state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
// store.dispatch(addCake());
store.dispatch(buyCake());
store.dispatch(buyIceream());
store.dispatch(buyIceream());
unsubscribe();
