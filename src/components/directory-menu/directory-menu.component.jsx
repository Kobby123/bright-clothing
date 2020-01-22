import React from "react";
import MenuItem from "../menu-item/menu_item.component";

import './directory-menu.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectDirectorySection} from "../../redux/directory/directory.selector";

const DirectoryMenu= ({section})=>{

        return(
            <div className="directory-menu">
                {section.map( ({ id , ...otherSectionProps}) => {
                   return <MenuItem key={id} {...otherSectionProps}/>

                })}
            </div>
        );

};

const  mapStateToProps = createStructuredSelector({

    section: selectDirectorySection
});




export default connect(mapStateToProps)(DirectoryMenu);