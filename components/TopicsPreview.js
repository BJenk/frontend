/* /pages/index.js */
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import { Col, Card, Input, InputGroup, InputGroupAddon, Row, ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";

import TopicCard from "../components/TopicCard"

const GET_TOPICS = gql`
  query{
    topics{
      id
      name
      description
    }
  }
`;
export default function TopicsPreview(props) {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_TOPICS, {
        variables: {},
    });
    console.log(data)
    if (error) return "Error Loading Topics";
    if (loading) return <h1>Loading ...</h1>;
    if (data.topics) {
        return(
            data.topics.map(x=> {
                return (
                    <Col key={x.name} xs="12" sm="12" md="3">
                        <TopicCard
                            name = {x.name}
                            description = {x.description}
                            id = {x.id}
                            emoji = {x.emoji}
                        >
                        </TopicCard>
                    </Col>
                )
            })
        )
    }

}