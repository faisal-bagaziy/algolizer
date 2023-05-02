import React, {ReactElement} from 'react';
import Container from './Container';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import GraphAVLogo from './GraphAVLogo';
import HelpIcon from './HelpIcon';

interface NavbarProps {
  changeTheme: Function;
  onHelpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  const openUrl = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <Container>
      <Row justifyContent="center">
        <GraphAVLogo></GraphAVLogo>
      </Row>

      <Row justifyContent="space-evenly" margin="0 18px">
        <ThemeSwitch changeTheme={props.changeTheme}></ThemeSwitch>
        <GithubLogo
          onClick={() => openUrl('https://github.com/KarimElghamry/GraphAV')}
        ></GithubLogo>
        <HelpIcon onClick={() => props.onHelpClick()}></HelpIcon>
      </Row>
    </Container>
  );
};

export default Navbar;
