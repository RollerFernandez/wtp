import React, { Component } from 'react'

export default class PaginaConstruccion extends Component {
    render() {
        return (
            <div>
            <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Pagina en construcción</h1>
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
                <div className="col-12 ">
                    <div className="card">
                    <div className="card-header align-self-center">                        
                        <img src="dist/img/construccion.jpg" alt="User Image" />
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
