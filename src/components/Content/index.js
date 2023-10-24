import './Content.css';

function Content(props) {
    return (
        <main className="main">
            <h1>{props.title}</h1>
        </main>
    );
}

export default Content;