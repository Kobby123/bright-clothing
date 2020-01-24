import React from "react";
import './homepage.styles.scss';
import HomePageContainer from "./homepage.styled";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";


const HomePage = () => {

    return (

        <HomePageContainer>
          <DirectoryMenu/>
        </HomePageContainer>


    );

};


export default HomePage;