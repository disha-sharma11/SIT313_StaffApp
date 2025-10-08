import './Header.css';

function Header(props){
    return(
    <div>
        <h1 className='head'>{props.header}</h1>
    </div>
    )
}
export default Header;