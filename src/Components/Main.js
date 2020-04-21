import React , {Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import DishDetail from './dishDetail';
import {DISHES} from '../shared/Dishes';
import {COMMENTS} from '../shared/Comments'
class Main extends Component {

  constructor (props) {
    super(props)

    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      selectedDish : null
    }
  }

  OnSelectDish = (dishId) => {
    this.setState({selectedDish : dishId})
}  

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Azher Saeed Ch</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.OnSelectDish(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
        />
        {/* comments={this.state.comments} */}
      </div>
    );
  }
}

export default Main;