import { useEffect } from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";


  const Whatsapp = (props)=>{
    const {image} = props;
    const handleOnSubmit= async()=> {
        // const response = await fetch("https://picsum.photos/200/200");
        // here image is url/location of image
        // const blob = await response.blob();
        const blob = image;
        const file = new File([blob], 'share.jpg', {type:blob.type});
        console.log("file==>",file);
        if(navigator.share) {
          await navigator.share({
            title: "image",
            text: "random image",
            url: "https://web.whatsapp.com/",
            files: [file]     
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error in sharing', error));
        }else {
          console.log(`system does not support sharing files.`);
        }
      }
      
      useEffect(()=> {
        if (navigator.share === undefined) {
          if (window.location.protocol === 'http:') {
            window.location.replace(window.location.href.replace(/^http:/, 'https:'));
          } 
        }
      }, []);
      return(
        <>
            <WhatsappShareButton url={image} onClick={handleOnSubmit}>
                <WhatsappIcon size={36} round={true} cursor="pointer" />
            </WhatsappShareButton>
        </>
      )

  }

  export default Whatsapp;