import React, { createContext, useReducer } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";

export const newProd = createContext();

const initState = {
  products: [],
};


function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.products:
        return { ...state, products: action.payload };
      case ACTIONS.oneProduct:
        return { ...state, oneProduct: action.payload };
      case ACTIONS.pageTotalCount: {
        return { ...state, pageTotalCount: action.payload };
      }
      default:
        return state;
    }
  }

function NewProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    const { data } = await axios.get(API);
    dispatch({
      type: ACTIONS.products,
      payload: data,
    });
  }
}

export default NewProductContext;
