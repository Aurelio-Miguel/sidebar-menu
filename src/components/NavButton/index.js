import './NavButton.css';

function NavButton(props) {
    return (
        <button className="NavButton">
            <span>
                <i className={props.material}>{props.icon}</i>
                <span className="txt">{props.name}</span>
            </span>
        </button>
    );
}

export default NavButton;