const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_MANY_CUSTOMERS":
      return { ...state, customers: [...state.customers, ...action.payload] };
    default:
      return state;
  }
};

export const addManyCustomersAction = (payload) => ({
  type: "ADD_MANY_CUSTOMERS",
  payload,
});
