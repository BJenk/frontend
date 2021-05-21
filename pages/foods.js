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
  query{
    foods{
      id
      name
    }
  }
`;

function Foods(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_FOOD_NUTRIENTS, {
    variables: { id: router.query.id },
  });
  console.log(data)
  if (error) return "Error Loading Foods";
  if (loading) return <h1>Loading ...</h1>;
  if (data.food) {
    const foods  = data.food;
    return (
      <>
        <h1>{foods.name}</h1>
        <Row>
          {foods.nutrients.map((res) => (
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
  return <h1>No Foods</h1>;
}
export default Foods;