import React , {Component} from 'react'
import Menu from './Menu';
import DishDetail from './dishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {DISHES} from '../shared/Dishes';
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'
import {PROMOTIONS} from '../shared/Promotions'
import {Switch , Route , Redirect} from 'react-router-dom';

class Main extends Component {

  constructor (props) {
    super(props)

    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const dishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId , 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}
        />
      )
    }
    return (
      <div>
         <Header/>
         <Switch>
         <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
         <Route path="/menu/:dishId" component={dishWithId}/>
         <Route exact path="/contactus" component={Contact}/>
         <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>}/>
         <Route path="/" component={HomePage}/>
         <Redirect to="/home"/>
         </Switch>
        <Footer/>
       
      </div>
    );
  }
}

export default Main;