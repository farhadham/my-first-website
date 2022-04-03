import { createStore } from "redux";

const slideChanger = (state = { slide: 0 }, action) => {
  if (action.type === "next") {
    return { slide: state.slide + 1 };
  }
  if (action.type === "prev") {
    return { slide: state.slide - 1 };
  }

  return state;
};

const store = createStore(slideChanger);

export default store;
