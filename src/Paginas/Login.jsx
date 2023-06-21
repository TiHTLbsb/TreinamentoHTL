import React, { useState } from "react";
import Footer from "../Componentes/Footer";
import HTLLogo from "../Imagens/logoHtlDigital.png";
import '../CSS/Login/Login.css';
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getUsuario = ({ target }) => {
    setUsuario(target.value);
  };

  const getSenha = ({ target }) => {
    setSenha(target.value);
  };

  const logar = (usuario, senha) => {
    if (usuario === "treinamentohtl@gmail.com" && senha === "htl12345") {
      navigate('/home');
    }
    return null;
  }

  return (
    <main className="mainLogin">
      <div className="loginPage">
        <div className="bgHTLLogo">
          <img src={HTLLogo} alt="Logo HTL" className="HTLLogoLogin" />
        </div>
        <Stack spacing={2} className="opcoesLogin">
          <h1 className="loginTitle">Login</h1>

          <TextField
            fullWidth
            label="Usuário"
            id="fullWidth"
            variant="filled"
            margin="dense"
            onChange={getUsuario}
            required
          />

          <FormControl sx={{ m: 1, width: "100%" }} variant="filled" required>
            <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>

            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={getSenha}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button variant="contained" onClick={() => logar(usuario, senha)}>
            Logar
          </Button>
          </Stack>
      </div>
      <Footer />
    </main>
  );
}

export default Login;
