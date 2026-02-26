import React from "react";
import { Provider } from "react-redux";
import { store } from "./reduxStore";
import ReduxTodo from "./components/ReduxTodo";
import ZustandTodo from "./components/ZustandTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="flex gap-5 p-10">
          <ReduxTodo />
          <ZustandTodo />
      </div>
  </Provider>
  );
}
export default App;