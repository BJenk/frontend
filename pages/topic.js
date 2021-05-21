/* /pages/restaurants.js */
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

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

const GET_TOPIC_DETAIL = gql`
  query($id: ID!) {
    topic(id: $id) {
      id
      name
      description
      articles{
          name
      }
    }
  }
`;

function Topic(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_TOPIC_DETAIL, {
    variables: { id: router.query.id },
  });
  console.log(data)
  if (error) return "Error Loading Topic";
  if (loading) return <h1>Loading ...</h1>;
  if (data.topic) {
    const topic  = data.topic;
    return (
      <>
        <h1>{topic.name}</h1>
        <Row>
          {topic.articles.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  {/* <CardText>{res.description}</CardText> */}
                </CardBody>
                <div className="card-footer">
                  <Button outline color="primary">
                    + Add To Cart
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return <div>Add Skill</div>;
}
export default Topic;