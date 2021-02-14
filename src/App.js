import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "./store";
import User from "./components/User/User";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/Posts/PostDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component ={User}/>
          <Route path ="/:user_id/posts" exact component ={Posts}/>
          <Route path ="/:user_id/posts/:post_id" exact component ={PostDetails}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
