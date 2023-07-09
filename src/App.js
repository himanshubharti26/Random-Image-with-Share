import './App.css';
import { useState, useEffect } from 'react';

import HelmetMetaData from './components/Helmet';
import Image from './components/image/Image'
import Button from './components/button/Button';
import Share from './components/share/Share';

function App() {

  const [image,setImage] = useState('');
  const [show, setShow] = useState(false);
  const [showShare, setShowShare] = useState(false)

  const baseUrl = "https://picsum.photos";
  let imageShown = false;

  const getImage =()=>{
      fetch(`${baseUrl}/200/200`).then(data=>{
        console.log("recived data: ",data);
        
        if(data && data.url && !imageShown){
          imageShown = true;
          setImage(data.url);
        }
      }).catch(err=>{
        console.log("Error while fetching image: ",err);
        
      })
    }
  
    useEffect(()=>{
      setShow(false);
      getImage();
    },[])
  
  
   const  handleImageDisplay = ()=>{
      setShow(true);
   }

  const handleNext = ()=>{
    getImage();
  }

  const handleShare = ()=>{
    setShowShare(!showShare);
  }


  return (
    <div className='container'>

      <HelmetMetaData image={image} url={image}></HelmetMetaData>
      <Image image={image} setShow={handleImageDisplay} show={show}/>

      <div className='but_cont'>
        <Button title = "Next" clickHandler={handleNext}/>
        <Button title = "Share" clickHandler={handleShare}/>
      </div>
      
      <Share showShare={showShare} image={image}/>
    </div>
  );
}

export default App;
