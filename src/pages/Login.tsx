import { useState } from "react";
import { Box, Button, TextField, Typography, Avatar, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
//Importamos el useDispatch del react-redux
import { useDispatch} from 'react-redux'
//Importamos las acciones que están en el fichero authSlice.ts
import { authActions } from '../store/authSlice';

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const bduser = "patricia";
  const bdpasswd = "1234";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario === bduser && contrasena === bdpasswd) {
          dispatch(authActions.login(usuario && contrasena))

      navigate("/home");
    } else {
      setMensaje("Usuario o contraseña incorrectos");
    }

    
  };

  

  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ width: 400, p: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Login Administrador Pablo Angel Gonzalez Zorro</Typography>


        <Box component="form" onSubmit={handleSubmit}>
          <TextField label="Usuario" fullWidth required margin="normal" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          <TextField label="Contraseña" type="password" fullWidth required margin="normal" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            ACCEDER
          </Button>
        </Box>

        {mensaje && <Alert severity="error" sx={{ mt: 2 }} variant="filled" onClose={() => setMensaje("")}>{mensaje}</Alert>}
      </Paper>
    </Box>
  );
}
