import React, { Component } from 'react';
import { View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

class ImageSlider extends Component{
    constructor(props){
    super(props);
    this.state={
        images:[
            require('../../assets/images/barber.png'),
            require('../../assets/images/hairmen.png'),
            require('../../assets/images/hairwomen.png'),
            require('../../assets/images/painting.png'),
            require('../../assets/images/senitizing.png'),
            require('../../assets/images/waterpurifier.png'),
            require('../../assets/images/ac.png'),
            ]
        };
    }
    render(){
        return(
            <View>
                <SliderBox images={this.state.images}
                  sliderBoxHeight={200}
                  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                  dotColor="#ff7400"
                  inactiveDotColor="#90A4AE"
                  imageLoadingColor="#9A9A9A"
                  paginationBoxVerticalPadding={10}
                  autoplay
                  circleLoop
                />
            </View>
        )
    }
}

export default ImageSlider;
