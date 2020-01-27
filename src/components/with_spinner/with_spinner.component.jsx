import React from "react";

import {SpinnerContainer, SpinnerOverlay} from "./with_spinner.styled";



const WithSpinner = WrappedComponent => {
    return ({isLoading, ...otherProps})=> {
        return isLoading ?
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay> :
            <WrappedComponent {...otherProps}/>
    }
};

export default WithSpinner;