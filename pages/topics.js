/* /pages/restaurants.js */
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_TOPICS = gql`
  query{
    topics{
      id
      name
      description
    }
  }
`;

function Topics(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_TOPICS, {
    variables: { id: router.query.id },
  });
  if (error) return "Error Loading Nutrients";
  if (loading) return <h1>Loading ...</h1>;
  if (data.topics) {
    const topics  = data.topics;
    return (
      <>
        <h1>{topics.name}</h1>
        <Row>
          {topics.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "10px" }}>
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/skills/${res.id}`}
                    href={`/skills?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return <h1>Add Topics</h1>;
}
export default Topics;