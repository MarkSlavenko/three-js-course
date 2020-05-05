import React, {Component} from 'react';
import './style.css';
import SlickSlider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


export default class Slider extends Component{
    constructor(props) {
        super(props);
    }

    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }

    render () {
        let Labs = [];
        for (let i = 0; i < this.props.numberOfLabs; i++) {
            Labs.push(<div className="lab-btn">Lab {i+1}</div>)
        }


        const settings = {
            focusOnSelect: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            swipeToSlide: true,
            beforeChange: (current, next) => this.props.currentUpdate(next)
        };

        return (
            <div className="col-12 main-for-slider text-center d-flex justify-content-center">
                <div className="col-lg-3 col-4 px-3">
                    <SlickSlider ref={c => (this.slider = c)} {...settings}>
                        {Labs}
                    </SlickSlider>
                </div>
            </div>
        )
    }

}