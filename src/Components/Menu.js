import React, { Component } from 'react'
import { Card , CardImg , CardTitle , CardImgOverlay , CardText } from 'reactstrap';


class Menu extends Component{

    constructor (props) {
        super(props)
    }

   

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 ml-2 mt-2">
                <Card onClick={() => this.props.onClick(dish.id)}>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    <CardText>{dish.description} </CardText>
                </Card>
                </div>
            )
        })
        return(
            <div className="container">

                <div className="row">
                {menu}
                </div>
                           
            </div>
        )
    }
}

export default Menu;