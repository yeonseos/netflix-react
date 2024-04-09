import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoSearch } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "./AppLayout.style.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="Navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img width={40} src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="/">홈</Nav.Link> */}
              <Nav.Link href="movies">영화</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="제목을 입력해보세요."
                className="me-2 search-form"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                <IoSearch size={20} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
