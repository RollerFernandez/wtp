import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const anio=new Date();
        return ( 
            <footer className="main-footer">
                <strong>Copyright &copy; 2014 - {anio.getUTCFullYear()} <a href="http://www.wisetrackcorp.com/wisetrack-peru/" style={{color:"#17a2b8"}}>Wisetrack - Peru </a></strong>
                 Todo los derechos reservados.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.0.2
                </div>
            </footer>
        )
    }
}
