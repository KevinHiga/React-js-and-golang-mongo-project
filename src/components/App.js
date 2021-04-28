import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BooksNew from '../pages/BooksNew';
import Layout from './Layout';
import Bookss from '../pages/Bookss';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BooksEdit from '../pages/BooksEdit';
import BooksDetailsContainer from '../pages/BooksDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookss" component={Bookss} />
          <Route exact path="/bookss/new" component={BooksNew} />
          <Route exact path="/bookss/:booksId" component={BooksDetailsContainer} />
          <Route exact path="/bookss/:booksId/edit" component={BooksEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;