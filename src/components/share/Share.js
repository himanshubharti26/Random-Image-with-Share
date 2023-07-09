import "./Share.css";
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    WhatsappShareButton, 
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon
  } from 'react-share';

// share component to render different platform share buttons
const Share = (props)=>{
    const {showShare, image} = props;
    return (
        <>
            {showShare && <div className='share-box'>
                <FacebookShareButton url={image} >
                <FacebookIcon size={36} round={true} cursor="pointer" />
                </FacebookShareButton>
                <TwitterShareButton url={image}>
                <TwitterIcon size={36} round={true} cursor="pointer" /> 
                </TwitterShareButton>
                <WhatsappShareButton url={image} >
                <WhatsappIcon size={36} round={true} cursor="pointer" />
                </WhatsappShareButton>
                
                </div>
            }
        </>
    )
}

export default Share;