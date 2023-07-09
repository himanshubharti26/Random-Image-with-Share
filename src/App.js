import './App.css';
import { useEffect, useState } from 'react';

import HelmetMetaData from './components/Helmet';
import Image from './components/image/Image'
import Button from './components/button/Button';
import Share from './components/share/Share';

function App() {

  const [image,setImage] = useState('');
  const [show, setShow] = useState(false);
  const [showShare, setShowShare] = useState(false)

  const baseUrl = "https://picsum.photos";

  //adding this variable to avoid updating the image twice as react renders components twice in dev mode.
  let imageShown = false;


//fetching image file from the api
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
  

    //using useEffect to fetch image every time component rerenders.
    useEffect(()=>{
      setShow(false);
      getImage();
      // eslint-disable-next-line
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
{/* To add meta data to show the preview on the respective websites */}
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
