import React, {Component} from 'react';
import './style.css';
import SlickSlider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


export default class  Slider  extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    next = () => {
        this.slider.slickNext();
    }
    previous = () => {
        this.slider.slickPrev();
    }

    render () {
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
            afterChange: current => this.props.currentUpdate(current)
        };

        return (
            <div className="col-12 main-for-slider text-center d-flex justify-content-center">
                <div className="col-lg-3 col-4 px-3">
                    <SlickSlider ref={c => (this.slider = c)} {...settings}>
                        <div className="lab-btn">Lab 1</div>
                        <div className="lab-btn">Lab 2</div>
                        <div className="lab-btn">Lab 3</div>
                        <div className="lab-btn">Lab 4</div>
                        <div className="lab-btn">Lab 5</div>
                        <div className="lab-btn">Lab 6</div>
                        <div className="lab-btn">Lab 7</div>
                        <div className="lab-btn">Lab 8</div>
                        <div className="lab-btn">Lab 9</div>
                        <div className="lab-btn">Lab 10</div>

                    </SlickSlider>
                </div>
            </div>
        )
    }

}