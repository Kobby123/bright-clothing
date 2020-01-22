import React from 'react';
import './collection_item_styles.scss';
import CustomButton from "../custom_button/custom_button.component";
import {addItem} from "../../redux/cart/cart.action";
import {connect} from "react-redux";

const  CollectionItem = ({item, addItem}) => {
   const {price, name, imageUrl, } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage :`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted={true} onClick={()=>addItem(item)}>Add to Cart</CustomButton>


        </div>

    )

};

const mapDispatchToProps = dispacth => ({
    addItem : (item) => dispacth(addItem(item))
});



export default  connect(null, mapDispatchToProps)(CollectionItem);