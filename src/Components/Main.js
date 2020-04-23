import React , {Component} from 'react'
import Menu from './Menu';
import DishDetail from './dishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {connect } from 'react-redux'
import {Switch , Route , Redirect , withRouter} from 'react-router-dom';


const mapStateToProps = state => {
  return{
    dishes : state.dishes,
    leaders : state.leaders,
    comments : state.comments,
    promotions : state.promotions
    
  }
}
class Main extends Component {

  constructor (props) {
    super(props)

    
  }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const dishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId , 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}
        />
      )
    }
    return (
      <div>
         <Header/>
         <Switch>
         <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
         <Route path="/menu/:dishId" component={dishWithId}/>
         <Route exact path="/contactus" component={Contact}/>
         <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
         <Route path="/" component={HomePage}/>
         <Redirect to="/home"/>
         </Switch>
        <Footer/>
       
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));