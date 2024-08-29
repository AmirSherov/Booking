import "./style.scss"

function Heading(props) {
    return (
        <div className="heading-wrapper">
            <h1>
                {props.children}
                {props.title}
            </h1>
            <p>
                Home.Pages<span className="path">.{props.path}</span>
            </p>
        </div>
    );
}
export default Heading;

