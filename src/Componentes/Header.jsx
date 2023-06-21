import React from "react";
import '../CSS/Common/Header.css';
import HTLLogo from '../Imagens/logoHtlDigital.png';
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header () {
  const navigate = useNavigate();
  const logoutButton = {
    fontSize: "1em",
    marginLeft: "80%",
    cursor: "pointer",
  }

  const goToHome = () => {
    navigate("/home");
  }

  const logout = () => {
    navigate("/");
  }

  return (
    <header className="header">
      <img src={HTLLogo} alt="Logo HTL" className="HTLLogo" onClick={ goToHome }/>
      <h1 className="headerTitle">Treinamento HTL</h1>
      <ExitToAppIcon  sx={logoutButton} onClick={logout}/>
    </header>
  )
}

export default Header;