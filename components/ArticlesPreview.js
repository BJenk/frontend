/* /pages/index.js */
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import { Col, Card, Input, InputGroup, InputGroupAddon, Row, ListGroup, ListGroupItem } from "reactstrap";

import Link from "next/link";

import ArticleCard from "../components/ArticleCard"

const GET_ARTICLES = gql`
  query{
    articles{
      id
      name
      description
    }
  }
`;
export default function ArticlesPreview(props) {
    const router = useRouter();
    const { loading, error, data } = useQuery( GET_ARTICLES, {
        variables: {},
    });
    console.log(data)
    if (error) return "Error Loading Articles";
    if (loading) return <h1>Loading ...</h1>;
    if (data.articles) {
        return(
            data.articles.map(x=> {
                return (
                    // <div></div>
                    <Col key={x.name} xs="12" sm="12" md="3">
                        <ArticleCard
                            name = {x.name}
                            summary = {x.summary}
                            id = {x.id}
                        >
                        </ArticleCard>
                    </Col>
                )
            })
        )
    }

}