import React from 'react';

import './form_input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return(
        <div className="group">
            <input className={'form-input'} onChange={handleChange} {...otherProps}/>
            {/*LOGIC FOR THE LABEL*/}
            {
                //If the the developer sets a label render the label otherwise null.
                //2.If form input has a value use a class of shrink for the label otherwise  set it to null
                label ? (
                        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                            {label}
                        </label>)
                    : null
            }
        </div>

    );
};


export default FormInput;