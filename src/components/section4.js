import React, { Component } from 'react';
class FourthSection extends Component {

  render() {
    return (
      <div>
             <section className="container" style={{marginTop:'5%'}}>
                 <div className="row">
                  <div className="col-md-2">
                    <img src={require('../company1.png')} style={{width: '128px'}} alt="Company" />
                  </div>
                <div className="col-md-2">
                 <img src={require('../company2.png')}  style={{width: '128px',marginTop: '23px'}} alt="Company" />
                </div>
              <div className="col-md-2">
              <img src={require('../company3.png')}  style={{width: '128px',marginTop: '45px'}} alt="Company" />
              </div>
                <div className="col-md-2">
              <img src={require('../company4.png')}  style={{width: '103px',marginTop: '37px'}} alt="Company" />
              </div>
              <div className="col-md-2">
                    <img src={require('../company1.png')} style={{width: '128px'}} alt="Company" />
                  </div>
                <div className="col-md-2">
                 <img src={require('../company2.png')}  style={{width: '128px',marginTop: '23px'}} alt="Company" />
                </div>
              </div>      
            </section>
      </div>
    
    );
  }
}
export default FourthSection;