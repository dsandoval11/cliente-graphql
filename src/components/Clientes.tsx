import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries'


const Contactos = () => (
  <Query query={CLIENTES_QUERY}>
    {({ loading, error, data }: any) => {
      if (loading) return (<h1>cargando ...</h1>)
      if (error) return (<h1>{`Error ${error.message}`}</h1>)
      console.log(data);

      return (<h1>Listado clientes</h1>)
    }}
  </Query>
)

export default Contactos


