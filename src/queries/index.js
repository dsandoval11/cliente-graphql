import gql from 'graphql-tag';

const CLIENTES_QUERY = gql`{
  getClientes {
    id
    nombre
    apellido
    empresa
  }
}`;

export { CLIENTES_QUERY };
