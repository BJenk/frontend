/* /pages/index.js */
import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row, ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";

import FoodsList from "../components/FoodList";
import TopicsList from "../components/TopicsList";

function Home() {
  const [query, updateQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
      <Col xs="12" sm="12" md="4">
          {/* <div className="search">
            <InputGroup>
              <InputGroupAddon addonType="append"> Search </InputGroupAddon>
              <Input
                onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={query}
              />
            </InputGroup>
          </div>
          <FoodsList search={query} />
          <TopicsList search={query} /> */}
          <ListGroup>
            <ListGroupItem tag="a" href="/topics/"> Topics </ListGroupItem>
            <ListGroupItem tag="a" href="/foods/"> Food </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xs="12" sm="12" md="8">
          Welcome to my website
        </Col>
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