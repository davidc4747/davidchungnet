import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './imageCarousel.css';

class Carousel extends Component {
    state = { currentImageIndex: 0 };

    componentDidUpdate = prevProps => {
        if (prevProps.images[0] !== this.props.images[0]) {
            this.setState({ currentImageIndex: 0 });
        }
    };

    gotoImage = index => {
        this.setState({ currentImageIndex: index });
    };

    prevImage = () => {
        // decrement
        this.setState(prevState => ({
            currentImageIndex:
                (prevState.currentImageIndex - 1 + this.props.images.length) %
                this.props.images.length
        }));
    };
    nextImage = () => {
        // increment
        this.setState(prevState => ({
            currentImageIndex:
                (prevState.currentImageIndex + 1) % this.props.images.length
        }));
    };

    render() {
        let { images } = this.props;
        let { currentImageIndex } = this.state;

        return (
            <div className="carousel">
                <section className="carousel__image-container">
                    {/* Current Image */}
                    <img
                        className="carousel__main-image"
                        src={images[currentImageIndex]}
                        alt=""
                    />

                    {/* Next & Prev */}
                    <div className="carousel__controls">
                        <button className="carousel__control" onClick={this.prevImage}>
                            <i className="fa fa-angle-left" />
                        </button>
                        <button className="carousel__control" onClick={this.nextImage}>
                            <i className="fa fa-angle-right" />
                        </button>
                    </div>
                </section>

                {/* Nav buttons */}
                <section className="carousel__nav">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`carousel__nav-item ${
                                currentImageIndex === index
                                    ? 'carousel__nav-item--selected'
                                    : ''
                            }`}
                            onClick={this.gotoImage.bind(this, index)}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

Carousel.proptypes = {
    images: PropTypes.array.isRequired
};

export default Carousel;
