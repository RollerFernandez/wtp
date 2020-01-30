import React, { Component } from 'react'

export default class Alertas extends Component {
    render() {
        return (
            <div>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h5>Lista de Alertas</h5>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Alertas</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="row">
                <div className="col-12">
                    <div className="card">
                    <div className="card-header">                        
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-lg">
                        <div className="icon">
                        Nuevo
                        <i className="ion ion-plus mx-2" />
                        </div>
                        </button>

                        <div className="modal fade" id="modal-lg">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Large Modal</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {/* FORMULARIO MODAL */}
                                <form onSubmit={this.formulario}>
                                  <div className="card-body">
                                    <div className="form-group">
                                      <label htmlFor="exampleInputEmail1">Nombre y Apellido</label>
                                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nombre y Apellido"/>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="exampleInputPassword1">Documento</label>
                                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Documento"/>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="exampleInputPassword1">Categoria</label>
                                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Categoria"/>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="exampleInputPassword1">Destino</label>
                                      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Destino"/>
                                    </div>
                                  </div>
                                  <div className="modal-footer justify-content-between">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                  </div>
                                </form>
                                {/* /FORMULARIO MODAL */}

                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Documento</th>
                              <th>Categoria</th>
                              <th>Destino</th>
                              <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>Andres Bonilla</td>
                              <td>949493939</td>
                              <td>Electricista</td>
                              <td>Administracion</td>
                              <td>
                                <div className='btn-group'>
                                  <button className='btn btn-danger' onClick={this.Ingresar}>Ingresar</button>
                                  <button className='btn btn-info'>Editar</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Emilio Bonilla</td>
                              <td>244949494</td>
                              <td>Desifecciones</td>
                              <td>Planta</td>
                              <td>
                                <div className='btn-group'>
                                  <button className='btn btn-danger'>Ingresar</button>
                                  <button className='btn btn-info'>Editar</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Bonilla Romany</td>
                              <td>23294944</td>
                              <td>Tecnico</td>
                              <td>Caldera</td>
                              <td>
                                <div className='btn-group'>
                                  <button className='btn btn-danger'>Ingresar</button>
                                  <button className='btn btn-info'>Editar</button>
                                </div>
                              </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                              <th>Nombre</th>
                              <th>Documento</th>
                              <th>Categoria</th>
                              <th>Destino</th>
                              <th>Opciones</th>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                    {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
            </div>
        </div>
        )
    }
}
