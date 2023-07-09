
import "./Button.css"

const Button = (props)=>{
    const {title, clickHandler} = props;
    return(
        <>
            <button className='but'  onClick={clickHandler}>{title}</button>
        </>
    )
}

export default Button