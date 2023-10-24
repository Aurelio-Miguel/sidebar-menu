import './Sidebar.css';
import HeaderSidebar from '../HeaderSidebar';
import Navigation from '../Navigation';

function Sidebar() {


    const NavButtons = [
        {
            material: "material-symbols-outlined",
            icon: "home",
            name: "Home"
        },
        {
            material: "material-symbols-outlined",
            icon: "Block",
            name: "Block"
        },
        {
            material: "material-symbols-outlined",
            icon: "swap_vert",
            name: "Swap Vert"
        },
        {
            material: "material-symbols-outlined",
            icon: "newspaper",
            name: "NewsPaper"
        },
        {
            material: "material-symbols-outlined",
            icon: "update",
            name: "Update"
        },
        {
            material: "material-symbols-outlined",
            icon: "email",
            name: "Email"
        },
    ];

    return (
        <aside className="sidebar">
            <HeaderSidebar />
            <Navigation NavButtons={NavButtons} />
        </aside>
    );
}

export default Sidebar;