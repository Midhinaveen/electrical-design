import React, { Component } from 'react';



class SecondSection extends Component {

  render() {
    return (
      <div>
             <section className="container" style={{marginTop:'5%'}}>
             <div className="row">
             <div className="col-md-5 mt-5">
             <span className="badge badge-primary"></span>
             <h4>London SouthEast Commerical Mechanical & Engineering Services</h4>
             <p>Lo sea takimata sanctus est Lorem ipsum dolorsita.Lorem ipsum dolor
                                  sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                  magna aliquyam erat, At vero eos et accusam et justo duo dolores et
                                  ea
                                  rebum. Lorem ipsum dolor sit amet, no sea takimata sanctus est
                                  Lorem
                                                    ipsum dolor sit amet. Stet clita kasd gubergren.</p>
             <button type="button" className="btn btn-light wht-clr">Read More</button>
             </div>
              <div className="col-md-6">
              <div className="row">
               <div className="col-md-6">
              <img src={require('../plum1.jpeg')}   alt="Plumber" />
              </div>
              <div className="col-md-6">
               <img src={require('../plum5.jpeg')}   alt="Plumber"/>
              </div>
              <div className="col-md-6 mt-2">
              <img src={require('../plum3.jpeg')}  alt="Plumber" />
              </div>
              <div className="col-md-6 mt-2">
              <img src={require('../plum4.jpeg')}  alt="Plumber" />
              </div>
              </div>            
              </div>
            </div>       
            </section>
      </div>
    
    );
  }
}
export default SecondSection;