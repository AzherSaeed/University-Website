import React , {Component} from 'react'
import Menu from './Menu';
import DishDetail from './dishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import {DISHES} from '../shared/Dishes';
import {COMMENTS} from '../shared/Comments';
import {Switch , Route , Redirect} from 'react-router-dom';
class Main extends Component {

  constructor (props) {
    super(props)

    this.state = {
      dishes : DISHES
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home/>
      )
    }
    return (
      <div>
         <Header/>
         <Switch>
         <Route path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
         <Route path="/" component={HomePage}/>
         <Redirect to="/home"/>
         </Switch>
        <Footer/>
       
      </div>
    );
  }
}

export default Main;