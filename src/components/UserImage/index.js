import './UserImage.css';

function UserImage(props) {
    return (
        <img className="logo-img" src={props.address} alt={props.alt} />
    )
}

export default UserImage;