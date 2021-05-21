import React from "react";

import { Container, Nav, NavItem, Card, CardBody,CardTitle, CardText } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TopicCard(props) {
    console.log(props)
    return (

        <Card style={{ margin: "10px" }}>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.summary}</CardText>
            </CardBody>
            <div className="card-footer">
                {/* <Link
                    as={`/article/${props.id}`}
                    href={`/article?id=${props.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                </Link> */}
            </div>
        </Card>
    )

}