import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return ( 
            <div>
                <nav className="main-header navbar navbar-expand navbar-dark navbar-info">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="/"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/" className="nav-link">Dashboard</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/" className="nav-link">Soporte</a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="/">
                                <i className="far fa-comments fa-2x" />
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="/" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">Tengo un error en el mapa...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Horas</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">Nadie me responde en el Call center...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 3 Horas</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item">
                                    <div className="media">
                                        <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                            </h3>
                                            <p className="text-sm">Soporte por favor...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 1 Horas</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item dropdown-footer">Leer los mensages</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="/">
                                <i className="far fa-bell fa-2x" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notificaciones</span>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2" /> 4 mensajes nuevos
                                    <span className="float-right text-muted text-sm">3 min</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item">
                                    <i className="fas fa-users mr-2" /> 8 usuarios conectados
                                    <span className="float-right text-muted text-sm">12 horas</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item">
                                    <i className="fas fa-file mr-2" /> 3 reportes de error
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="/" className="dropdown-item dropdown-footer">Ver Notificaciones</a>
                            </div>
                        </li>                        
                    </ul>
                </nav>
            </div>

        )
    }
}
