import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron , Nav , NavItem , Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)

    this.state={
      isNavOpen  : false
    }
    this.ToggleNav = this.ToggleNav.bind(this)
  }

  ToggleNav = () => {
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  } 
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.ToggleNav}/>
          <NavbarBrand className="mr-5" href="/"><img src='assets/images/restorent.png'
           height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
           <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav navbar>
          <NavItem >
          <NavLink  className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
          </NavItem>
          <NavItem>
          <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
          </NavItem>
          <NavItem>
          <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
          </NavItem>
          <NavItem>
          <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
          </NavItem>
        </Nav>
        </Collapse>
        </div>
        
      </Navbar>
      
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-7">
                       <h1>Second Choice</h1>
                       <p>Over the years, we have experimented with ingredients and recipes and perfected the art of cooking and serving. Even as we add a few new dishes to the small, select menu our patrons often return for their favourites - whether it is our unique style of grilled calamari or carpaccio of beef with herbs. We continue to set ourselves higher standards, both in the quality of food we prepare and the way we serve it.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;