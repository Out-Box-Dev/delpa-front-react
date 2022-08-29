import React, { Component } from 'react'

export default class Trackinglist extends Component {
    render(){
        return (
            <div className="card card-flush h-md-100">
                {/*begin::Body*/}
                <div className="card-body pt-6">
                    {/*begin::Table container*/}
                    <div className="table-responsive">
                        {/*begin::Table*/}
                        <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                            {/*begin::Table head*/}
                            <thead>
                                <tr className="fw-semibold fs-7 text-danger border-bottom border-gray-200 py-4">
                                    <th>Orden de flete</th>
                                    <th>Exportador</th>
                                    <th>Importador</th>
                                </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                                <tr className="py-5 fw-semibold  border-bottom border-gray-300 fs-6">
                                    <td>126960</td>
                                    <td>Voith Paper Argentina S.A</td>
                                    <td>Cartulinas CMPC SPA</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="tab-content px-9 hover-scroll-overlay-y pe-7 me-3 mb-2" style={{height: "340px"}}>
                            <table id='kt_datatable_vertical_scroll' className="table table-striped table-row-bordered gy-5 gs-7">
                                <tbody>
                                    <tr>
                                        <td>Fecha Carga Lista</td>
                                        <td>05-08-2022</td>
                                        <td><i className="bi bi-check-circle text-success fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Recogida Origen o Bodega</td>
                                        <td>05-08-2022</td>
                                        <td><i className="bi bi-check-circle text-success fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Arribo a Origen</td>
                                        <td>09-08-2022</td>
                                        <td><i className="bi bi-check-circle text-success fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Liberacion a Origen</td>
                                        <td>09-08-2022</td>
                                        <td><i className="bi bi-check-circle text-success fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Salida ETD</td>
                                        <td>09-08-2022</td>
                                        <td><i className="bi bi-exclamation-circle text-warning fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Arribo ETA</td>
                                        <td>12-08-2022</td>
                                        <td><i className="bi bi-exclamation-circle text-warning fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Ingreso a Destino</td>
                                        <td>15-08-2022</td>
                                        <td><i className="bi bi-exclamation-circle text-warning fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha Liberacion a Destino</td>
                                        <td>16-08-2022</td>
                                        <td><i className="bi bi-exclamation-circle text-warning fs-2x"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Fecha de Entrega a Destino</td>
                                        <td>17-08-2022</td>
                                        <td><i className="bi bi-exclamation-circle text-warning fs-2x"></i></td>
                                    </tr>
                                </tbody>
                                {/*end::Table body*/}
                            </table>
                        </div>
                    </div>
                    {/*end::Table*/}
                </div>
                {/*end: Card Body*/}
            </div>
        )
    }
}