import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../../queries'
import { Link } from 'react-router-dom';


const Contactos = () => (
  <Query query={CLIENTES_QUERY}>
    {({ loading, error, data }: any) => {
      if (loading) return (<h1>cargando ...</h1>)
      if (error) return (<h1>{`Error ${error.message}`}</h1>)
      return (
        <React.Fragment>
          <h2 className="text-center">Clientes</h2>
          <ul className="list-group mt-4">
            {
              data.getClientes.map((cliente: any) => (
                <li key={cliente.id} className="list-group-item">
                  <div className="row justify-content-between aliign-item-center">
                    <div className="col-md-8 d-flex justify-content-between aliign-item-center">
                      {cliente.nombre} {cliente.apellido}
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <Link to={`/cliente/editar/${cliente.id}`} className="btn btn-success d-block d-md-inline-block">
                        Editar cliente
                      </Link>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </React.Fragment>
      )
    }}
  </Query>
)

export default Contactos


