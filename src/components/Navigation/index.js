import './Navigation.css';
import NavButton from '../NavButton';

function Navigation(props) {
    return (
        <nav>
            {props.NavButtons.map(item => <NavButton key={item.name} material={item.material} icon={item.icon} name={item.name} />)}
        </nav>
    );
}

export default Navigation;