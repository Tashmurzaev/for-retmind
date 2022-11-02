import axios from "axios";
import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://api.opensea.io/api/v1/assets?format=json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(addManyCustomersAction(data.assets));
      });
  };
};

