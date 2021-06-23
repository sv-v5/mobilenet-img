import React, { Component } from 'react';
import Header from './header';
import {loadMobilenet} from '../training/index'

export class Predict extends Component {
    constructor(props){
        super(props);

    }
  
  render() {
    return (
      <div>
          <Header/>
            <div className="hero first">
                <div className="container">
                    <div className="section">
                        <div className="title">Prediction</div>
                    </div>
                </div>

            </div>
      </div>
    );
  }
}

export default Predict;
