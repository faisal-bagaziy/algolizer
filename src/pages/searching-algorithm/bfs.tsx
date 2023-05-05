import React, {ReactElement, useState} from "react";
import HomeBfs from '../../../components/searching-components/components/Home/HomeBfs';
import { ThemeProvider } from "styled-components";
import Theme from "../../../components/searching-components/models/Theme";
import themes from "../../../components/searching-components/themes";
import HeaderForRest from '../../../components/header-for-rest-section/header-for-rest-section';
import SortInfo from "../../../components/sorting-components/SortInfo/SortInfo";
import {BreadthFirstDesc} from "../../../searching-algorithms/bfs";

const Bfs: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);

  return (
    <>
    <HeaderForRest />
    <ThemeProvider theme={globalTheme}>
      <HomeBfs changeTheme={setGlobalTheme}></HomeBfs>
    </ThemeProvider>

      <SortInfo {...BreadthFirstDesc}  > </SortInfo>
    </>
  );
};

export default Bfs;
