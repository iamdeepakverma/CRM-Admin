import React from "react";

const Right = () => {
  return (
    <div className="left_inner_contaoner border">
      <div class="container">
        <h1>Get started</h1>
        <div class="card">
          <div class="step">
            <div class="step-description">
             <div className="d-flex justify-content-between align-items-center">
             <div className="d-flex pb-3"> 
             <span className="step-number">1</span>
             <h5>Create device</h5>
             </div>
             <div class="devices-button">Devices</div>
             </div>
             <div>
             <p>
                Let's provision your first device to the platform via UI. Follow
                the documentation on how to do it:
              </p>
              <a class="devices-button">
                How to create Device
              </a>
             </div>
            </div>
          </div>
          
        </div>
        <div class="">
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-description">Connect device</div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-description">Create dashboard</div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-description">Configure alarm rules</div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-description">Create alarm</div>
          </div>
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-description">
              Create customer and share dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
