import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
  const todos = [...this.state.list];
  const editedTodo = prompt("Edit the todo:");
  if (editedTodo !== null && editedTodo.trim() !== "") {
    let updatedTodos = [...todos];
    updatedTodos[index].value = editedTodo;
    this.setState({
      list: updatedTodos,
    });
  }
};


  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>
        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() => this.addItem()}
                >
                  ADD
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <ListGroup>
              {this.state.list.map((item) => {
                return (
                  <ListGroup.Item key={item.id}>
                    {item.value}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => this.deleteItem(item.id)}
                      style={{ float: "right" }}
                    >
                      X
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => this.editItem(item.id)}
                      style={{ float: "right", marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
