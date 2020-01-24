import React from 'react';
import { CustomButtonContainer } from './custom_button.styled.jsx';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

 export default CustomButton;