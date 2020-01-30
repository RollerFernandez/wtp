import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom';

export default class Aside extends Component {

    getNavLinkClass = path => {
        return this.props.location.pathname === path
            ? "nav-link active"
            : "nav-link";
    };
    
    
    render() {

        
    console.log(window.location.pathname);
        return (
            <aside className="main-sidebar sidebar-dark-info  elevation-4">

                <a href="/" className="brand-link navbar-info">
                    <img src="dist/img/Wisetrack.png" alt="WiseTrack Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light" style={{ color: "white" }}><b>DISPATCHER</b></span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <i className="nav-icon fas fa-user-circle fa-3x" style={{ color: "white" }}></i>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">
                                <span>Administrador</span>
                            </a>
                            <button href="#" className="btn btn-block bg-gradient-danger btn-xs mt-1">
                                <i className="nav-icon fas fa-power-off"></i>  Salir
                            </button>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-header">ADMINISTRACIÓN</li>
                            <li className="nav-item has-treeview {this.getNavLinkClass('/')}" >
                                <a href="/"  className="nav-link" >
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview {this.getNavLinkClass('/')}">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-truck"></i>
                                    <p>
                                        Moviles
                                            <i className="fas fa-angle-left right"></i>
                                        <span className="badge badge-danger right">6</span>
                                    </p>
                                </a>

                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/Seguimiento" className="nav-link" activeClassName="active" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Seguimiento</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/AuditoriaMovil" className="nav-link" activeClassName="active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Auditoria Moviles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Rutas" className="nav-link" activeClassName="active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Rutas</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview " >
                                <a href="/" className="nav-link"  >
                                    <i className="nav-icon fas fa-cog"></i>
                                    <p>
                                        Mantenedores
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/Perfil" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Perfiles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Zonas" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Zonas</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/MantenedorRutas" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Mantenedor de Rutas</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Alertas" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Alerta Correos / Estados</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Conductores" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Conductores</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Moviles" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Moviles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Descargas" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Zonas Descarga</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-file-powerpoint"></i>
                                    <p>
                                        Dispatcher
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/Torrecontrol" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Torre de Control</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Manifiesto" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Manifiestos</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Sipnoticos" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Sipnóticos Viajes</p>
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-map-marked"></i>
                                    <p>
                                        Itinerarios
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Reporte Itinerarios</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Resumen Itinerarios</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Sipnóticos Itinerario</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Parámetros Itinerarios</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Cumplimiento Móvil</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Cumplimiento Origen-Destino</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-print"></i>
                                    <p>
                                        Reportes
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Velocidad</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Detenciones</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Kilómetros</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Estadísticas Móviles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Alertas</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Tiempo Ciclo</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Puntualidad</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Curva Asignación</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Disponibilidad Móviles</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-road"></i>
                                    <p>
                                        Programación
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Programación Manual</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Carga Planificaciones</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Kilómetros</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Estadísticas Móviles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Alertas</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Tiempo Ciclo</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Puntualidad</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Curva Asignación</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" exact className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Disponibilidad Móviles</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Estadisticas
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Moviles</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Flotas</p>
                                        </NavLink>
                                    </li>                                    
                                </ul>
                            </li>
                            <li className="nav-header">GESTIONES</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-calendar-alt"></i>
                                    <p>
                                        Cronograma
                                    </p>
                                </a>
                            </li>                            
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon far fa-envelope"></i>
                                    <p>
                                        Notificaciones
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Alertas</p>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/PaginaConstruccion" className="nav-link" >
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Correos</p>
                                        </NavLink>
                                    </li>                                    
                                </ul>
                            </li>
                            <li className="nav-header">ASESORIAS</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-file"></i>
                                    <p>Manual</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" >
                                    <i className="nav-icon fas fa-file"></i>
                                    <p>VideoTutoriales</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
}
