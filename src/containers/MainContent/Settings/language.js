import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";

class AddSection extends Component {
  render() {
    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card m-b-20">
                  <div className="card-body">
                    <label className="col-sm-2 col-form-label">Languages</label>
                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="male"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="male">
                          Bangla
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="female"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="female">
                          English
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="hindi"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="hindi">
                          Hindi
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="dutch"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="dutch">
                          Dutch
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="german"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="german">
                          German
                        </label>
                      </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AUX>
    );
  }
}

export default AddSection;
