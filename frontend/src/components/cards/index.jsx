import "../cards/style.scss"
import React from 'react';
import photo1 from "../../assets/images/photo1.jpg"
import photo2 from "../../assets/images/photo2.jpg"
import photo3 from "../../assets/images/photo3.jpg"
import photo4 from "../../assets/images/photo4.jpg"
import photo5 from "../../assets/images/photo5.jpg"
import photo6 from "../../assets/images/photo6.jpg"
import photo7 from "../../assets/images/photo7.jpg"
import photo8 from "../../assets/images/photo8.jpg"
import photo9 from "../../assets/images/photo9.jpg"
import photo10 from "../../assets/images/photo10.jpg"
import photo11 from "../../assets/images/photo11.png"
import Card from "../../components/cards/items";
function Cards(props) {
    return (
        <div className="all-Cards">
        <div> <Card src = {photo1} title = "Jonathan adler chair"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo2} title = "Ultricies condimentum "  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo3} title = "Vitae suspendisse sed"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo4} title = "JSed at fermentum"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo5} title = "Fusce pellentesque at"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo6} title = "Vestibulum magna laoreet"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo7} title = "Sollicitudin amet orci"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo8} title = "Ultrices mauris sit"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo9} title = "Pellentesque condimentum ac"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo10} title = "Cras scelerisque velit"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo11} title = "Lectus vulputate faucibus"  >$26.00 $42.00</Card></div>
        <div> <Card src = {photo4} title = "Purus risus, ut"  >$26.00 $42.00</Card></div>
     
        </div>
    );
}
export default Cards;