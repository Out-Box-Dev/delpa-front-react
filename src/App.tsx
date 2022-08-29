import React from 'react'
import logo from './assets/img/logo.png'
import './assets/css/style.bundle.css'

//Components

import Steps from './components/steps'
import Trackinglist from './components/trackinglist'
import Map from './components/map'
import Timeline from './components/timeline'

function App() {
   
  return (
    <>
     <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">

        <div id="kt_app_header" className="app-header">
          <div className="app-container container-fluid d-flex align-items-stretch justify-content-between">
            <div className="header-top container-xxl d-flex align-items-stretch flex-grow-1" id="kt_app_header_wrapper" style={{borderBottom: '5px solid #043669'}}>
              <a href="" className='d-flex align-items-center'>
                <img className='h-25px h-lg-30px' src={logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper" style={{paddingTop: '50px'}}>

          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">

              <div id="kt_app_content" className="app-content flex-column-fluid">
                <div id="kt_app_content_container" className="app-container container-fluid">

                  <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                    <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-10">
                      <div className="card mb-7">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="position-relative w-md-400px me-md-2">
                              <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                  <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                </svg>
                              </span>
                              <input type="text" className="form-control form-control-solid ps-10" name="search" value="" placeholder="Buscar" />
                            </div>
                            <div className="d-flex align-items-center">
                              <button type="submit" className="btn btn-primary me-5">Buscar</button>
                            </div>
                          </div>
                          <div className="collapse show" id="kt_advanced_search_form">
																<div className="separator separator-dashed mt-9 mb-6"></div>
																<div className="row">
																	<div className="col-xl-3">
																		<div className="form-check form-check-custom form-check-solid form-check-sm">
																			<input className="form-check-input" type="checkbox" value="" id="flexRadioLg1"/>
																			<label className="form-check-label" htmlFor="flexRadioLg1">
																				Marítimo
																			</label>
																		</div>
																	</div>
																	<div className="col-xl-3">
																		<div className="form-check form-check-custom form-check-solid form-check-sm">
																			<input className="form-check-input" type="checkbox" value="" id="flexRadioLg2"/>
																			<label className="form-check-label" htmlFor="flexRadioLg2">
																				Aéreo
																			</label>
																		</div>
																	</div>
																	<div className="col-xl-3">
																		<div className="form-check form-check-custom form-check-solid form-check-sm">
																			<input className="form-check-input" type="checkbox" value="" id="flexRadioLg3"/>
																			<label className="form-check-label" htmlFor="flexRadioLg3">
																				Terrestre Internacional
																			</label>
																		</div>
																	</div>
																	<div className="col-xl-3">
																		<div className="form-check form-check-custom form-check-solid form-check-sm">
																			<input className="form-check-input" type="checkbox" value="" id="flexRadioLg4"/>
																			<label className="form-check-label" htmlFor="flexRadioLg4">
																				Terrestre Nacional
																			</label>
																		</div>
																	</div>
																</div>
															</div>
                        </div>
                      </div>
                      <div className="card mb-7">
                        <Steps />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10">
                      <div className="card mb-7">
                        <Trackinglist />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10">
                      <div className="card mb-7">
                        <Map />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10">
                      <div className="card mb-7">
                        <Timeline />
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div></>
  );
}

export default App;
