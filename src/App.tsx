import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Clientes from './components/Clientes/Clientes'
import EditarCliente from './components/Clientes/EditarCliente';
import NuevoCliente from './components/Clientes/NuevoCliente'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Clientes} />
                <Route exact path='/cliente/nuevo' component={NuevoCliente} />
                <Route exact path='/cliente/editar/:id' component={EditarCliente} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
