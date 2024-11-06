import { createRoot } from "react-dom/client";
import { Container, Row } from "./lib";

createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <Container>
      <Row></Row>
    </Container>
  </div>,
);
