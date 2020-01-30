import React, { Component } from 'react';

export default class Dashboard extends Component {
    
    render() {
        var fecha = new Date();
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dispatcher v2</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dispatcher v2</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-truck-moving"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text"> Operación / Móviles </span>
                                        <span className="info-box-number">
                                            10
                                            <small>%</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-road"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text"> Kilómetros </span>
                                        <span className="info-box-number">41,410</span>
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix hidden-md-up"></div>

                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-cart-plus"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Entregas</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Numero de conductores</span>
                                        <span className="info-box-number">2,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Reportabilidad GPS</h5>

                                        <div className="card-tools">                                            
                                            <div className="btn-group">
                                                
                                                <div className="dropdown-menu dropdown-menu-right" role="menu">
                                                    <a href="#" className="dropdown-item">Action</a>
                                                    <a href="#" className="dropdown-item">Another action</a>   
                                                    <a href="#" className="dropdown-item">Something else here</a>
                                                    <a className="dropdown-divider"></a>
                                                    <a href="#" className="dropdown-item">Separated link</a>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p className="text-center">
                                                    <strong>Periodo: {fecha.getDate()}  de { meses[fecha.getMonth()]} del {fecha.getFullYear()}</strong>
                                                </p>

                                                <div className="chart">
                                                    <canvas id="salesChart" height="180" style={{ height: "180px" }}></canvas>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="text-center">
                                                    <strong>Grupos de Móviles</strong>
                                                </p>

                                                <div className="progress-group">
                                                    Trujillo
                                                    <span className="float-right"><b>160</b>/200</span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
                                                    </div>
                                                </div>

                                                <div className="progress-group">
                                                    Piura
                                                    <span className="float-right"><b>310</b>/400</span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-danger" style={{ width: "75%" }}></div>
                                                    </div>
                                                </div>


                                                <div className="progress-group">
                                                    <span className="progress-text">Chiclayo</span>
                                                    <span className="float-right"><b>480</b>/800</span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                                                    </div>
                                                </div>


                                                <div className="progress-group">
                                                    Ayacucho
                                                    <span className="float-right"><b>250</b>/500</span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-warning" style={{ width: "50%" }}></div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 58%</span>
                                                    <h5 className="description-header">35,210.43</h5>
                                                    <span className="description-text">TIEMPO TOTAL</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-warning"><i className="fas fa-caret-left"></i> 30%</span>
                                                    <h5 className="description-header">10,390.90</h5>
                                                    <span className="description-text">TIEMPO PROMEDIO</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-info"><i className="fas fa-caret-up"></i> 20%</span>
                                                    <h5 className="description-header">4,813.53</h5>
                                                    <span className="description-text">TIEMPO ESTIMADO</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 col-6">
                                                <div className="description-block">
                                                    <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 18%</span>
                                                    <h5 className="description-header">1200</h5>
                                                    <span className="description-text">TIEMPO DE RECORRIDO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-8">

                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Mapa de Geocercas</h3>

                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-md-flex">
                                            <div className="p-1 flex-fill" style={{ overflow: "hidden" }}>

                                                <div id="world-map-markers" style={{ height: "325px", overflow: "hidden" }}>
                                                    <div className="map"></div>
                                                </div>
                                            </div>
                                            <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                                                <div className="description-block mb-4">
                                                    <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                                                    <span className="description-text">Rutas Optima</span>
                                                </div>
                                                <div className="description-block mb-4">
                                                    <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                                    <span className="description-text">Geocercas </span>
                                                </div>
                                                <div className="description-block">
                                                    <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>                                                    
                                                    <span className="description-text">Cuadrantes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                


                                <div className="card">
                                    <div className="card-header border-transparent">
                                        <h3 className="card-title">Ultimos Viajes</h3>
                                    </div>

                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Móvil</th>
                                                        <th>Fecha</th>
                                                        <th>Estado</th>
                                                        <th>Geocercas</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="/">OR9842</a></td>
                                                        <td>2020/01/29 16:47:41</td>
                                                        <td><span className="badge badge-success">En línea</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="/">OR1848</a></td>
                                                        <td>2020/01/22 15:47:41</td>
                                                        <td><span className="badge badge-warning">Detenido</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="/">OR7429</a></td>
                                                        <td>2020/01/10 11:47:41</td>
                                                        <td><span className="badge badge-danger">Sin Lectura</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="/">OR7429</a></td>
                                                        <td>2020/01/29 10:47:41</td>
                                                        <td><span className="badge badge-info">Operación</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="/">OR1848</a></td>
                                                        <td>2020/01/21 10:45:41</td>
                                                        <td><span className="badge badge-warning">Detenido</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="/">OR7429</a></td>
                                                        <td>2020/01/20 10:42:41</td>
                                                        <td><span className="badge badge-danger">Sin Lectura</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                        <td>2020/01/19 09:47:41</td>
                                                        <td><span className="badge badge-success">En línea</span></td>
                                                        <td>
                                                            <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="col-md-4">

                                <div className="info-box mb-3 bg-warning">
                                    <span className="info-box-icon"><i className="fas fa-tag"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Entregados</span>
                                        <span className="info-box-number">5,200</span>
                                    </div>

                                </div>

                                <div className="info-box mb-3 bg-success">
                                    <span className="info-box-icon"><i className="fas fa-gas-pump"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Galones</span>
                                        <span className="info-box-number">92,050</span>
                                    </div>

                                </div>

                                <div className="info-box mb-3 bg-danger">
                                    <span className="info-box-icon"><i className="fas fa-tachometer-alt"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Rendimiento</span>
                                        <span className="info-box-number">3,02</span>
                                    </div>

                                </div>

                                <div className="info-box mb-3 bg-info">
                                    <span className="info-box-icon"><i className="far fa-comments"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Notificaciones</span>
                                        <span className="info-box-number">163,921</span>
                                    </div>

                                </div>


                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Reportabilidad GPS</h3>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="chart-responsive">
                                                    <canvas id="pieChart" height="150"></canvas>
                                                </div>

                                            </div>

                                            <div className="col-md-4">
                                                <ul className="chart-legend clearfix">
                                                    <li><i className="far fa-circle text-danger"></i> En Línea</li>
                                                    <li><i className="far fa-circle text-success"></i> 15 Minutos</li>
                                                    <li><i className="far fa-circle text-warning"></i> 1 Hora</li>
                                                    <li><i className="far fa-circle text-info"></i> 12 Horas</li>
                                                    <li><i className="far fa-circle text-primary"></i> 24 Horas</li>
                                                    <li><i className="far fa-circle text-secondary"></i> 48 Horas</li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-footer bg-white p-0">
                                        <ul className="nav nav-pills flex-column">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    En Línea
                                                    <span className="float-right text-danger">
                                                        <i className="fas fa-arrow-down text-sm"></i>
                                                        12%</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                15 Minutos
                                                    <span className="float-right text-success">
                                                        <i className="fas fa-arrow-up text-sm"></i> 4%
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    1 Hora
                                                    <span className="float-right text-warning">
                                                        <i className="fas fa-arrow-left text-sm"></i> 0%
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}