import React, { Component } from "react";
import "./Carousel.css";
import Card from "./Card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.datas, //array
      card: this.props.datas[0], //obj
      width: this.props.width,
      height: this.props.height,
      translateX: this.props.translateX
    };
  }

  _handleLeftNav = () => {
    const newIndex = this.state.card.id - 1;
    this.setState({
      card: this.state.cards[newIndex]
    });
  };

  _handleRightNav = () => {
    const newIndex = this.state.card.id + 1;
    this.setState({
      card: this.state.cards[newIndex]
    });
  };

  render() {
    const { cards, card, width, height, translateX } = this.state;
    return (
      <div className="carousel">

          <div
            className={`cards-slider active-slide-${card.id}`}
            style={{ maxWidth: width, minHeight: height }}
          >

            <button
              className="carousel-nav carousel-nav-left"
              onClick={this._handleLeftNav}
              disabled={card.id === 0}
            >
              <i className="fas fa-chevron-left" />
            </button>
            
            <button
              className="carousel-nav carousel-nav-right"
              onClick={this._handleRightNav}
              disabled={card.id === cards.length - 1}
            >
              <i className="fas fa-chevron-right" />
            </button>

            <div
              className="cards"
              style={{
                transform: `translateX(-${card.id * (translateX / cards.length)}%)`
              }}
            >
              {cards.map((c, index) => (
                <Card
                  key={index}
                  id={card.id}
                  c={c}
                  width={width}
                  height={height}
                />
              ))}
            </div>
          </div>

      </div>
    );
  }
}

export default Carousel;
