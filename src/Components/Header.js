import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron , Nav , NavItem , 
        Collapse, NavbarToggler , Modal , ModalBody , ModalHeader , Button, FormGroup, Label , Form, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)

    this.state={
      isNavOpen  : false,
      isModalOpen : false
    }
    this.ToggleNav = this.ToggleNav.bind(this)
    this.ToggleModal = this.ToggleModal.bind(this)
  }

  ToggleNav = () => {
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  } 
  ToggleModal = () => {
    this.setState({
      isModalOpen : !this.state.isModalOpen
    })
  } 
  handleLogin = (event) => {
    this.ToggleModal();
    alert("User Name    : "+this.username.value + " Password Done   : " + 
    this.password.value +" Remember you     :" +this.remember.checked)
    event.preventDefault();
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
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button className="btn btn-default" onClick={this.ToggleModal}>
    <span className="fa fa-sign-in fa-lg"> </span> { ' '+ ' '}Sign In
            </Button>
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
       <Modal isOpen={this.state.isModalOpen} toggle={this.ToggleModal}>
         <ModalHeader toggle={this.ToggleModal}>Log In</ModalHeader>
         <ModalBody>
           <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username">User Name : </Label>
              <Input type="text" id="username" name="username" innerRef={(input) => this.username = input } placeholder="User Name..."/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password : </Label>
              <Input type="password" id="password" name="password" innerRef={(input) => this.password = input }  placeholder="Password..."/>
            </FormGroup>
            <FormGroup check>
              <Label check >
                <Input type="checkbox" id="checkbox" innerRef={(input) => this.remember = input }  name="checkbox"/> Remember Me
              </Label>
            </FormGroup>
            <Button outline  type="submit" value="submit" onSubmit={this.handlelogin}>Sign In</Button>
           </Form>
         </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;