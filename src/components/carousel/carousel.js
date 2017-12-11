
import React, {Component} from 'react';
import './carousel.css';

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = { currentImageIndex: 0 };

        this.goToImage = this.goToImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    goToImage(index) {
        this.setState({
            currentImageIndex: index
        });
    }
    prevImage() {
        // let prevImgIndex = (this.state.currentImageIndex - 1 < 0) ? this.props.imgs.length : this.state.currentImageIndex - 1;
        this.setState({
            currentImageIndex: (this.state.currentImageIndex - 1 < 0) ? this.props.imgs.length-1 : this.state.currentImageIndex - 1
        });
    }
    nextImage() {
        // let nextImgIndex = this.state.currentImageIndex + 1 % this.props.imgs.length;
        this.setState({
            currentImageIndex: (this.state.currentImageIndex + 1) % this.props.imgs.length
        });
    }


    render(){
        return(
            <section className={`carousel ${this.props.className}`}>
{/*
                --Carousel--
                <span>{this.state.currentImageIndex}</span>
*/}


                <div className="carousel__img-holder">
                    <img className="carousel__img" src={this.props.imgs[this.state.currentImageIndex]} alt="" />
                </div>


                {/*
                <div className="carousel__track">
                    {this.props.imgs.map((item, index) => (
                        <img key={index} className="carousel__img" src={item} alt=""/>
                    ))}
                </div>
                */}

                <div className="carousel__controls">
                    <div className="carousel__control--prev" onClick={this.prevImage}>Prev</div>
                    <div className="carousel__control--next" onClick={this.nextImage}>Next</div>
                </div>


                <div className="carousel__indicators">
                    {this.props.imgs.map((item, index) =>
                        (index === this.state.currentImageIndex) ?
                        <div key={index} className="carousel__indicator carousel__indicator--active" onClick={ e => { this.goToImage(index); }}></div> :
                        <div key={index} className="carousel__indicator" onClick={ e => { this.goToImage(index); }}></div>
                    )}
                </div>

            </section>
        );
    }
}

export default Carousel;