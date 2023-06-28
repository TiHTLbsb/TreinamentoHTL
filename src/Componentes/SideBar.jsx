import React from "react";
import "../CSS/Common/SideBar.css";
import SideBarButton from "../CSS/Common/SideBarButton";
import BookIcon from "@mui/icons-material/Book";
import { useNavigate } from "react-router-dom";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

function SideBar() {
  const navigate = useNavigate();

  const goToModulo1 = () => {
    navigate('/modulo1');
  }

  const goToModulo2 = () => {
    navigate('/modulo2');
  }

  const goToModulo3 = () => {
    navigate('/modulo3');
  }

  const goToModulo4 = () => {
    navigate('/modulo4');
  }

  const goToModulo5 = () => {
    navigate('/modulo5');
  }

  const goToModulo6 = () => {
    navigate('/modulo6');
  }

  const goToProva = () => {
    navigate('/prova');
  }

  return (
    <aside className="sideBar">
      <SideBarButton aria-label="Modulo 1" onClick={ goToModulo1 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 1</p>
      </SideBarButton>
      <SideBarButton aria-label="Modulo 2" onClick={ goToModulo2 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 2</p>
      </SideBarButton>
      <SideBarButton aria-label="Modulo 3" onClick={ goToModulo3 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 3</p>
      </SideBarButton>
      <SideBarButton aria-label="Prova" onClick={ goToProva }>
        <DocumentScannerIcon sx={{ color: "#00008b" }} />
        <p>Prova</p>
      </SideBarButton>
      <SideBarButton aria-label="Modulo 4" onClick={ goToModulo4 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 4</p>
      </SideBarButton>
      <SideBarButton aria-label="Modulo 5" onClick={ goToModulo5 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 5</p>
      </SideBarButton>
      <SideBarButton aria-label="Modulo 6" onClick={ goToModulo6 }>
        <BookIcon sx={{ color: "#00008b" }} />
        <p>Módulo 6</p>
      </SideBarButton>
    </aside>
  );
}

export default SideBar;
