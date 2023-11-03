import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./a4/ReduxExamples/CounterRedux/counterReducer";
import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    counterReducer,
    todosReducer,
    helloReducer,
    addReducer,
  },
});

export default store;
