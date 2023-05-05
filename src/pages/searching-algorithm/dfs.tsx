import React, {ReactElement, useState} from "react";
import Home from '../../../components/searching-components/components/Home/Home';
import { ThemeProvider } from "styled-components";
import Theme from "../../../components/searching-components/models/Theme";
import themes from "../../../components/searching-components/themes";
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'
import SortInfo from "../../../components/sorting-components/SortInfo/SortInfo";
import {DepthFirstDesc} from "../../../searching-algorithms/dfs";


const Dfs: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);

  return (
    <>
    <HeaderForRest />
    <ThemeProvider theme={globalTheme}>

      <Home changeTheme={setGlobalTheme}></Home>
    </ThemeProvider>
    <SortInfo {...DepthFirstDesc}></SortInfo>
    </>
  );
};

export default Dfs;
