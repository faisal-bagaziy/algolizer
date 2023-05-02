import React, {ReactElement, useState} from "react";
import Home from '../../../components/searching-components/components/Home/Home';
import { ThemeProvider } from "styled-components";
import Theme from "../../../components/searching-components/models/Theme";
import themes from "../../../components/searching-components/themes";
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section'

const Dfs: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);

  return (
    <>
    <HeaderForRest />
    <ThemeProvider theme={globalTheme}>

      <Home changeTheme={setGlobalTheme}></Home>
    </ThemeProvider>
    </>
  );
};

export default Dfs;
