import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import news1 from '../images/news1.png'
import news2 from '../images/news2.png'
import news3 from '../images/news3.png' 
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function Slider() {
  return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    {/* <div data-src={news1} />
    <div data-src={news2} />
    <div data-src={news3} /> */}
    <div><h3>Irfan</h3></div>
    <div><h3>Ali</h3></div>
    <div><h3>Ansari</h3></div>
  </AutoplaySlider>
  );
}
