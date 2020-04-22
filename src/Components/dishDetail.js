import React from 'react'
import {Card , CardBody , CardImg , CardText ,CardTitle  } from 'reactstrap'

function RenderDish  ({dish})  {
    return(
        <div className="col-12 col-md-5 mt-2">
        <Card>
        <CardImg object src={dish.image} alt={dish.name}/>
       <CardBody>
       <CardTitle heading>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
       </CardBody>
        </Card>
        </div>
    )
    
}

const RenderComments = ({comments}) => {
  if (comments != null )
  return (
      <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
              {comments.map((comment) => {
                  return(
                  <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}</p>
                  <p>-- {comment.date}</p>
                  </li>
                  )
              })}
          </ul>
      </div>
  );
  else return(
      <div><h1>ye comment ka area ha</h1></div>
  )
}

const DishDetail = (props) => {
  if (props.dish != null ){
      return(
        <div className="container">
         <div className="row">
         <RenderDish dish={props.dish}/>
         <RenderComments comments={props.comments}/>
         </div>
        </div>
      )
  }
  else {
      return (
         <div></div>
      )
  }
}
export default DishDetail;