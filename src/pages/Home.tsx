import { Box, Stack, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/index";

import { authActions } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const userData = useSelector((state: RootState) => state.authenticator);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  console.log(userData);

  const handleLogout = () => {
    dispatch(authActions.logout()); 
    navigate("/"); 
  };

  return (
    <Box sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4">
        Página Administrador Home de Pablo Ángel González Zorro
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Cerrar sesión
        </Button>
      </Stack>
    </Box>
  );
}
