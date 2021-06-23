import React, { Component } from 'react';
import './header.css'
/* import $ from "jquery" */
import { NavLink } from 'react-router-dom';

export class Header extends Component {

  
 /*  componentDidMount() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      }
      else {
        $('nav').removeClass('black');
      }
    })
  } */
  render() {
    
    return (
      <div>
        <nav className="header">
          <div className="header-wrap">
            <div className="left">
            {/*   <img src={logo} alt="" /> */}
              <div className="content">
                <p className="title" style={{color:'white'}}>Image Classifier | Predictor</p>
              </div>
            </div>
            <div className="right">
              <ul>
                {/* <li><NavLink  exact activeClassName="active" to="/" ><button>TRAIN</button></NavLink></li>
                <li><NavLink  exact activeClassName="active" to="/predict"><button>PREDICT</button></NavLink></li> */}
{/*                 <li><NavLink  exact activeClassName="active" to="/form"><button>FORM</button></NavLink></li> */}
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth:state.auth
 });

export default (Header);
