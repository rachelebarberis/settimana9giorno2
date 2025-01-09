/* eslint-disable react/prop-types */
import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false, 
  };

  handleCardClick = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;
    
    let cardStyle;
    if (selected) {
      cardStyle = { 
        transform: "scale(2.2)", 
        transition: "transform 0.3s ease", 
        zIndex: 10,
      };
    } else {
      cardStyle = { 
        transform: "scale(1)", 
        transition: "transform 0.3s ease", 
      };
    }

    return (
      <Card
        className="p-1 h-100"
        style={cardStyle}
        onClick={this.handleCardClick} 
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="h-100"
        />
        <Card.Body>
          <Card.Title className="text-center text-truncate">
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
