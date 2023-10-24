import './HeaderSidebar.css';
import UserImage from '../UserImage';

function HeaderSidebar() {
    return (
        <header>
            <UserImage address="/images/userimage.jpg" alt="User Image" />
        </header>
    );
}

export default HeaderSidebar;