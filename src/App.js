import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fetchPropducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchPropducts();
  }, []);
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">NavLink-Todo</NavLink>
      </p>
      <p>
        <NavLink to="/albums">NavLink-Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
