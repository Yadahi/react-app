import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div></div>
      )
    }
    const menucomment = comments.map((comment) => {
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
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {menucomment}
        </ul>
      </div>
    )
  }

  renderDish() {
    const dish = this.props.selectedDish
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
            {this.renderComments(this.props.selectedDish.comments)}
          </div>
        </div>

      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {

    return (
      <div className="container">

          {this.renderDish()}


      </div>
    );
  }
}

export default DishDetail;
