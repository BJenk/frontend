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

const GET_FOOD_NUTRIENTS = gql`
  query($id: ID!) {
    topic(id: $id) {
      id
      name
      skills {
        id
        name
        description
      }
    }
  }
`;

function Skills(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_FOOD_NUTRIENTS, {
    variables: { id: router.query.id },
  });
  console.log(data)
  if (error) return "Error Loading Nutrients";
  if (loading) return <h1>Loading ...</h1>;
  if (data.topic) {
    const topic  = data.topic;
    return (
      <>
        <h1>{topic.name}</h1>
        <Row>
          {topic.skills.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button outline color="primary">
                    + Add To Cart
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return <h1>Add Skill</h1>;
}
export default Skills;