import React, { Component } from 'react'

export default class Manifiesto extends Component {
    render() {
        return (
            <div>
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h5>Lista de Manifiesto</h5>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Manifiesto</li>
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
                        <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#modal-lg">
                        <div className="icon">
                            Nuevo
                        <i className="ion ion-plus mx-2" />
                        </div>
                        </button>

                        <div className="modal fade" id="modal-lg">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h6 className="modal-title">Registros</h6>
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
                                  <div className="modal-footer align-self-center">
                                    <button type="button" className="btn btn-sm btn-danger pl-3" data-dismiss="modal">  Cancelar <i className="fa fa-times-circle mx-2" /></button>
                                    <button type="submit" className="btn btn-sm btn-info pl-3">  Guardar <i className="fa fa-save mx-2" /></button>
                                  </div>
                                </form>
                                {/* /FORMULARIO MODAL */}

                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped table-sm">
                        <thead className="thead-dark">
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
                                <button className='btn btn-danger btn-xs '><i className="fa fa-times-circle mx-2" /></button>
                                  <button className='btn btn-info btn-xs ml-2'><i className="fa fa-pencil-alt mx-2" /></button>
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
                                  <button className='btn btn-danger btn-xs '><i className="fa fa-times-circle mx-2" /></button>
                                  <button className='btn btn-info btn-xs ml-2'><i className="fa fa-pencil-alt mx-2" /></button>
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
                                <button className='btn btn-danger btn-xs '><i className="fa fa-times-circle mx-2" /></button>
                                  <button className='btn btn-info btn-xs ml-2'><i className="fa fa-pencil-alt mx-2" /></button>
                                </div>
                              </td>
                            </tr>
                        </tbody>                        
                        </table>
                        <ul class="pagination justify-content-center mt-1">
                          <li class="page-item"><a class="page-link" href="/">Anterior</a></li>
                          <li class="page-item"><a class="page-link " href="/">1</a></li>
                          <li class="page-item"><a class="page-link" href="/">2</a></li>
                          <li class="page-item"><a class="page-link" href="/">Siguiente</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
        )
    }
}
