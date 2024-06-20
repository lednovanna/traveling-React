import {useState} from "react";
import {data} from "../data";
import '../styles/Header.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderBox() {

    const [slides, setSlides] = useState(0);
    const {  image, title, description} = data[slides];
    
    const nextImage = () => {
        setSlides ((slides => {
            slides ++;
            if (slides > data.length - 1) {
                slides = 0;
            }
            return slides;
        }))
    }

    const backImage = () => {
        setSlides ((slides => {
            slides --;
            if(slides < 0) {
                return data.length -1;
            }
            return slides;
        }))
    }

    return (
    <div className="sliderStyles">
    
     <div className="sliderImagesStyle">
        <img className="sliderImage" src={image} alt="nature" />
   
    <div className="sliderTitle">
        
     <h3>{title}</h3> 
     <p className="sliderDescription">{description}</p>
    </div>
     <button className="button-back" onClick={backImage}><IoIosArrowBack /></button>
     <button className="button-forward" onClick={nextImage}><IoIosArrowForward /></button>
    </div> 
    </div>
)
}