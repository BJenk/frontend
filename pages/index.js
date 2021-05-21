/* /pages/index.js */
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import { Col, Card, Input, InputGroup, InputGroupAddon, Row, ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";
import TopicsPreview from '../components/TopicsPreview'
import ArticlesPreview from "../components/ArticlesPreview"
// import {TopicCard} from "../components/TopicCard"


function Home() {
  const [query, updateQuery] = useState("");

  return (
    <div className="container-fluid">
      <Row>
        <h1 style={{"textAlign":"center"}}>Title</h1>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="6" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p>
        </Col>
        <Col xs="12" sm="12" md="6" >
          <Card>
            Email
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 >Recent Posts</h2>
      </Row>
      <Row>
        <ArticlesPreview></ArticlesPreview>
      </Row>
      <Row>
        <h2 >Topics</h2>
      </Row>
      <Row>      
        <TopicsPreview></TopicsPreview>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}
export default Home;