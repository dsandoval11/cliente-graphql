import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Header from './components/Header'
import Clientes from './components/Clientes'

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
        <Header />
        <Clientes />
      </ApolloProvider>
    );
  }
}

export default App;
