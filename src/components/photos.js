import React from 'react';
import './photo.css'; // Import the CSS file
import myImage from  '/Users/angelramirez/Desktop/coding/Current/angel-website/angel-personal-website/src/components/images/ProfAngel.JPG';



function Photo(){
    return (
        <div className="photo-container">
          <img src={myImage} alt="Angel" className="photo" />
        </div>
      );
  };
export default Photo;
