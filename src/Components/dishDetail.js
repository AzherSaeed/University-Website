import React, { Component } from 'react'
import {Card , CardBody , CardImg , CardText ,CardTitle , Breadcrumb , BreadcrumbItem, Button,
Modal , ModalBody , ModalHeader , Row , Label,Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import { LocalForm, Control } from 'react-redux-form';
import {Loading} from './LoadingCom';

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
    )}

const RenderComments = ({comments , addComment , dishId }) => {
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
          <CommentForm dishId={dishId} addComment={addComment}/>
      </div>
  );
  else return(
      <div><h1>ye comment ka area ha</h1></div>
  )
}

class CommentForm extends Component {
    constructor(props){
        super(props)

        this.state={
            isNavOpen : false,
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmitComment = this.handleSubmitComment.bind(this)
    }
    toggleModal = () => {
        this.setState({
            isModalOpen : !this.state.isModalOpen
            
        })
    }


    handleSubmitComment=(value)=>{
        this.toggleModal();
        this.props.addComment(this.props.dishId , value.rating , value.author , value.comment)
    }


    render(){
        return(
            <div>
                <Button onClick={this.toggleModal}>Add Comments</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Your Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value)=> this.handleSubmitComment(value)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" className="form-control" name="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="author">Author</Label>
                            <Control.text model=".author" id="author" className="form-control" name="author"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" className="form-control" name="comment"/>
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">Submit Comment</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }    
  if (props.dish != null )
      return(
    <div className="container">
        <div className="row">
        <Breadcrumb>
        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
         </div>
      <div className="col-12"><h4>{props.dish.name}</h4><hr/></div>
    <div className="row">
         <RenderDish dish={props.dish}/>
         <RenderComments comments={props.comments}
         addComment={props.addComment}
         dishId={props.dish.id}
         />
         </div>
        </div>
      )
  
  else {
      return (
         <div></div>
      )
  }
}
export default DishDetail;