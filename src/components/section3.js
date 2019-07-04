import React, { Component } from 'react';
class ThirdSection extends Component {
  render() {
    return (
      <div>
       <section className="container" style={{marginTop:'5%'}}>
             <h4 style={{fontWeight: '900'}}>Some recent Words From Our Customers</h4>
             <p style={{width: '78%'}}>Lo sea takimata sanctus est Lorem ipsum dolorsita.Lorem ipsum dolor
                                  sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                  magna aliquyam erat, At vero eos et accusam et justo duo dolores et
                                  ea
                                  rebum. Lorem ipsum dolor sit amet, no sea takimata sanctus est
                                  Lorem
                                                    ipsum dolor sit amet. Stet clita kasd gubergren.</p>


<div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators indicator-btm">
    <li data-target="#demo" data-slide-to="0" className="active indicator-clr indicator-des"></li>
    <li data-target="#demo" data-slide-to="1" className="indicator-clr indicator-des"></li>
    <li data-target="#demo" data-slide-to="2" className="indicator-clr indicator-des"></li>
  </ul>

  <div className="carousel-inner">
    <div className="carousel-item active">
       <div className="row">
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum1.jpeg')}  alt="Plumber1"  style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Material Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index1" className="btn btn-outline-info" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
              </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum5.jpeg')} alt="Plumber2" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Building Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index2" className="btn btn-light wht-clr" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum3.jpeg')}  alt="Plumber3" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Iron Core</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index3" className="btn btn-outline-info" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div> 
            </div>  
    </div>
    <div className="carousel-item">
      <div className="row">
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum1.jpeg')}  alt="Plumber1"  style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Material Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index1" className="btn btn-outline-info" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
              </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum5.jpeg')} alt="Plumber2" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Building Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index2" className="btn btn-light wht-clr" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum3.jpeg')}  alt="Plumber3" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Iron Core</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index3" className="btn btn-outline-infobtn " style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div> 
            </div> 
    </div>
    <div className="carousel-item">
       <div className="row">
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum1.jpeg')}  alt="Plumber1"  style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Material Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index1" className="btn btn-outline-info" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
              </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum5.jpeg')} alt="Plumber2" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Building Review</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index2" className="btn btn-light wht-clr" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div>
              <div className="col-md-4">
               <div className="card" >
                  <img className="card-img-top" src={require('../plum3.jpeg')}  alt="Plumber3" style={{width:"100%"}} />
                   <div className="card-body">
                    <h5 className="card-title">Iron Core</h5>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                 <a href="#index3" className="btn btn-outline-info" style={{marginLeft:'30%'}}>Read More</a>
               </div>
             </div>
            </div> 
            </div>  
    </div>
  </div>

  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>

 
 </section>
 </div>
    
    );
  }
}
export default ThirdSection;

 