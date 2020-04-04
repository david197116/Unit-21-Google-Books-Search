import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import { Col, Row, Container } from "../components/Grid";

import "../index.css";


class Register extends Component {
    render() {
      return (
          <Container>
           <Jumbotron />
           <Row className="register">
             <Col size="md-12">
            <Wrapper>
                <>
            {/* <h4>Login</h4>

            <hr class="my-4">
              <div class="row">
               <form action="/login" method="post" class="col-xs-12 col-sm-12 col-md-8 col-lg-6">
            <div class="form-group">
            <label>Email address</label>
            <input type="email" name="email" class="form-control" placeholder="Enter email" required>
            <% if (errors.email.length) { %>
                <small class="form-text text-danger"><%= errors.email %></small>
            <% } %>
             </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" placeholder="Password" required>
            <% if (errors.password.length) { %>
                <small class="form-text text-danger"><%= errors.password %></small>
            <% } %>
        </div>
        <div class="form-group">
            <div class="leader">
                Don't have an account? Register <a href="/register">here</a>.
            </div>
        </div>
        <button type="submit" class="btn btn-dark btn-block">Login</button>
             </form>
           </div> */}
             </>
            </Wrapper>
          </Col>
        </Row>
        </Container>

             
      
    );
  }
}

export default Register;