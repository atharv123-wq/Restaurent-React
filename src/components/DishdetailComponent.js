import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle , BreadcrumbItem, Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
    
   function  RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComment({comments}){
        if(comments!==null)
        return(
            <div>
                <h4>Comments</h4>
                <ul class = "list-unstyled">
                    {
                     comments.map(comment=>
                    <div>
                     <li>{comment.comment}</li>
                     <li>--{comment.author}</li>
                    </div>
                        )
                    }
                 </ul>
            </div>
        );
        else
        return(
            <div></div>
        )
    };

    



    const DishDetail = (props) => {
        if (props.dish != null )
        {
            return(
                <div className="container">
                        <div className="row">
                        <div className="row">
                            <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                            </div>
                        </div>
                    <div  className="col-12 col-md-5 m-1">
                      { 
                        <RenderDish dish={props.dish}/>
                      }
                    </div>
                      <div className="col-12 col-md-5 m-1">
                      { 
                        <RenderComment comments={props.comments}/>
                      }
                      </div>
                </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


export default DishDetail;