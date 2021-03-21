import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {

    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
          </div>
        </div>

      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          {comments.map((comment) => {
            return (
              <div>
                <p>{comment.comment}</p>
                <p>-- {comment.author},&nbsp;
                {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(comment.date))}
                </p>

              </div>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    console.log(this.props.dish)

    return (
      <div className="container">

          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}

      </div>
    );
  }
}

export default DishDetail;
