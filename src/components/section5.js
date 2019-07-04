import React, { Component } from 'react';
class FifthSection extends Component {
 render() {
    return (
      <div>
             <section className="container-fluid" style={{marginTop:'5%'}}>
        <div className="abt-cle" style={{paddingTop: '197px',marginLeft: '-142px',marginRight: '-86px'}}>
                 <div className="text-center mt-4">
                
                 <h5 className="pt-4 clr">Get notified</h5>
                 <h5 className="mb-4 clr">about new amazing products</h5>
                 <div className="row">
                 <div className="col-md-4"></div>
                 <div className="col-md-4">
  
                  <div className="input-group prepend mb-4" style={{boxShadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'}}>
                       
                    <input type="text" className="form-control" placeholder="Search" ria-describedby="basic-addon2"  />
                    <span className="input-group-text btn btn-light wht-clr" id="basic-addon1" > <i className="fa fa-arrow-right" aria-hidden="true"></i></span>  
                </div>
                 </div>         
                 </div>

                 <p className="mb-5"><span className="mr-3 clr1">Product</span><span className="mr-3 clr1">Product1</span><span className="mr-3 clr1">Product2</span><span className="mr-3 clr1">Product3</span></p>
                            <div className="row">
                                <div className="col-md-3">
                                                  <h1>
                <a className="navbar-brand" href="#index" data-blast="color" style={{marginLeft: '291px',fontSize: '36px'}}> Watson</a>
                </h1> 
                                </div>
                                <div className="col-md-5 ht"></div>
                                <div className="col-md-4 float-right">
                            <span><i className="fa fa-facebook-official fa-2x mr-2" aria-hidden="true" style={{color:'white'}}></i></span>
                             <span><i className="fa fa-twitter-square fa-2x mr-2" aria-hidden="true" style={{color:'white'}}></i></span>
                             <span><i className="fa fa-linkedin-square fa-2x mr-2" aria-hidden="true" style={{color:'white'}}></i></span>
                             </div>
                             
                            </div>
                 </div>
                 </div>
             </section>
      </div>
    
    );
  }
}
export default FifthSection;