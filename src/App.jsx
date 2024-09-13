import { Container } from "@mui/material";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import KanbanBoard from "./Pages/KanbanBoard";

function App() {
  const theme = useTheme()
  return (
    <Container sx={{ color: theme.palette.secondary.main }}>
      <KanbanBoard />
    </Container>
  );
}

export default App;
