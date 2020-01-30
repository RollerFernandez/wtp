import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12 text-center">
                                <h1>No existe la página Solicitada</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="error-page text-center">
                        <h2 className=" text-warning" style={{ fontSize: "13em", fontWeight: "bold" }}> 404</h2>
                        <p>
                            No pudimos encontrar la página que estabas buscando. Mientras tanto, puede regresar al <a style={{ fontWeight: "bold", color:"#17a2b8" }} href="/">Dashboard</a> o intentar usar el formulario más tarde.
                        </p>
                    </div>
                </section>

            </div>
        )
    }
}
