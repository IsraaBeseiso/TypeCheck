import React, { Component } from "react";
import { render } from "react-dom";
import { Row, Col, Container, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ScoreTable.css";

class ChaosScoretable extends Component {
  render() {
    return (
      <div>
        <Container className="border ml-0 col-2 offset-10 text-center">
          <Row className="justify-content-md-right">
            <Col sm="2">
              <h1>CHAOS MODE!</h1>
              <h3>High Scores</h3>
              <h3>Overall</h3>
              <Table bordered size="sm" class="scoretable">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>WPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Name</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Name</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Name</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Name</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Name</td>
                    <td>WPM</td>
                  </tr>
                </tbody>
              </Table>
              <h3>Personal</h3>
              <Table bordered size="sm" class="scoretable">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Date</th>
                    <th>WPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Date</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Date</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Date</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Date</td>
                    <td>WPM</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Date</td>
                    <td>WPM</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ChaosScoretable;
