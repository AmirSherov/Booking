import "../items/style.scss"
function items(props){
    return(
        <div className="main-div-cards">
    <div className="items">
    <div className="img">
    <img src= {props.src}  alt="" />
    </div>
        </div>
       <p>
           {props.title}
       </p>
       <div className="circle">
           <div></div>
           <div></div>
           <div></div>
       </div>
       <h3>{props.children}</h3>
        </div>

    )
}
export default items;