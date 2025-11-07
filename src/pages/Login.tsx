import { Container,Typography, Button, Stack } from "@mui/material";
import React from "react";

const Login: React.FC = () => {
    return (
        
        <div>
            <Container>
                <Typography variant="h1" color="primary" gutterBottom>
          Pablo Ángel González Zorro(Texto princupal)
        </Typography>
            <Typography variant="h2" color="secondary" gutterBottom>
        Textp secundario
      </Typography>
      <Typography variant="h3" color="warning.main" gutterBottom>
        Texto warning
      </Typography>
      <Typography variant="subtitle1" color="info.main" gutterBottom>
        Texto informativo
      </Typography>
      <Typography variant="body1" color="success.main" gutterBottom>
        Texto succes
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block">
        Quiero jugar al minecraft profe
      </Typography>
      <Stack>
          <Button variant="text" color="primary">
            Text Primario
          </Button>

          <Button variant="contained" color="secondary">
            Contained Secundario
          </Button>

          <Button variant="outlined" color="error">
            Outlined Error
          </Button>

          <Button variant="contained" color="success">
            Contained Éxito
          </Button>

          <Button variant="outlined" color="warning">
            Outlined Advertencia
          </Button>

          <Button variant="text" color="info">
            Text Info
          </Button>
        </Stack>
        </Container>

        
        </div>
    
    );
};

export { Login }