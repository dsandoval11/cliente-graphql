import React, { Component, ChangeEvent } from 'react';

interface AppState {
  nombre: string;
  apellido: string;
  empresa: string;
  emails: [
    { email: string },
  ];
  edad: string;
  tipo: string;
}

class NuevoCliente extends Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      edad: '',
      emails: [{ email: '' }],
      empresa: '',
      tipo: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    if (event.target.name === 'emails') {
      const { emails } = this.state;
      emails[0].email = event.target.value;
      this.setState((prevState: AppState) => ({
        ...prevState,
        emails,
      }));
    } else {
      const { name, value } = event.target;
      this.setState((prevState: AppState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  render(): JSX.Element {
    return (
      <>
        <h1 className='text-center'>Nuevo cliente</h1>
        <div className='row justify-content-center'>
          <form className='col-md-8 m-3'>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label>Nombre</label>
                <input
                  type='text'
                  name='nombre'
                  className='form-control'
                  placeholder='Nombre'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group col-md-6'>
                <label>Apellido</label>
                <input
                  type='text'
                  name='apellido'
                  className='form-control'
                  placeholder='Apellido'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label>Empresa</label>
                <input
                  type='text'
                  name='empresa'
                  className='form-control'
                  placeholder='Empresa'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group col-md-6'>
                <label>Email</label>
                <input
                  type='email'
                  name='emails'
                  className='form-control'
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label>Edad</label>
                <input
                  type='text'
                  name='edad'
                  className='form-control'
                  placeholder='Edad'
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group col-md-6'>
                <label>Tipo Cliente</label>
                <select
                  className='form-control'
                  name='tipo'
                  onChange={this.handleChange}
                >
                  <option value=''>Elegir...</option>
                  <option value='PREMIUM'>PREMIUM</option>
                  <option value='BASICO'>BÁSICO</option>
                </select>
              </div>
            </div>
            <button type='submit' className='btn btn-success float-right'>Guardar Cambios</button>
          </form>
        </div>
      </>
    );
  }
}

export default NuevoCliente;
