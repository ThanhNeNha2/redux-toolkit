import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { isCheckMode } from "../Redux/Theme/ThemeSlice";
import { useEffect } from "react";

function Header() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const root = document.querySelector("body");
    if (root) root.setAttribute("data-bs-theme", mode);
  }, [mode]);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label={mode === "light" ? "Light Mode" : "Dark Mode"}
              defaultChecked={mode === "light" ? false : true}
              onChange={(e) => {
                dispatch(
                  isCheckMode(e.target.checked === true ? "dark" : "light")
                );
              }}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
