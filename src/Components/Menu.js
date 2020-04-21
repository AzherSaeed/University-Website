import React from 'react'
import { Card , CardImg , CardTitle , CardImgOverlay , CardText } from 'reactstrap';

function RenderMenuItem({dish , onClick}){
    return(
        <Card onClick={() => onClick(dish.id)}>
        <CardImg top width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        <CardText>{dish.description} </CardText>
    </Card>
    )
}

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 ml-2 mt-2">
               <RenderMenuItem dish={dish} onClick={props.onClick}/>
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
 
    

export default Menu;