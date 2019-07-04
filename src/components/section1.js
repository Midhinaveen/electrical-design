import React, { Component } from 'react';
class FirstSection extends Component {
  render() {
    return (
      <div>
              <section className="container-fluid abt-path1 myStyle">
              <div className="abt-path1 myStyle">
                   <nav className="navbar navbar-expand-lg navbar-fixed-top ">
                <h1>
                <a className="navbar-brand" href="#index" data-blast="color" style={{marginLeft: '309px',fontSize: '36px'}}> Watson</a>
                </h1>  
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item ">
                            <a className="nav-link" href="#index.html" data-blast="color">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#about">About</a>
                        </li>
                        <li className="nav-item mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#services">Features</a>
                        </li>
                        <li className="nav-item dropdown mt-lg-0 mt-3">
                            <a className="nav-link" href="index.html" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Items
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item scroll nav-link" href="#plans">Pricing</a>
                                <a className="dropdown-item scroll nav-link" href="#team">Team</a>
                                <a className="dropdown-item scroll nav-link" href="#portfolio">Portfolio</a>
                                <a className="dropdown-item scroll nav-link" href="#posts">Latest posts</a>
                            </div>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                  <h6>
                <a className="navbar-brand" href="#index" data-blast="color" style={{marginLeft: '151px',fontSize: '16px'}}> +91 8885489339</a>
                </h6> 
                </div> 
            </nav>
            <div className="row">
            <div className="col-md-3"></div>
             <div className="col-md-3" style={{marginTop: '16rem'}}>
             <h4>Gas Engineering Plumbing & Mechanical Services</h4>
             <button className="btn btn-light wht-clr"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
             </div>
              <div className="col-md-6 float-right" style={{marginTop: '53px'}}>
            <img src={require('../gas1.jpg')} style={{width: '84%',marginRight: '121px'}} alt="Plumber" className="float-right"/>
              </div>
            </div> 
            {/*} <div className="gradient-overlay bg-gradient bg-gradient-green-y"></div>   */}
            </div>
            </section>
      </div>
    
    );
  }
}
export default FirstSection;