/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const QUERY = gql`
  {
    topics {
      id
      name
      description
    }
  }
`;

function TopicsList(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading topics";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (data.topics && data.topics.length) {
    //searchQuery
    const searchQuery = data.topics.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return (
        <Row>
          {searchQuery.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardBody>
                  <CardTitle>{res.name} {res.id}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/topic/${res.id}`}
                    href={`/topic?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}

          
        </Row>
      );
    } else {
      return <h1>No Topics Found</h1>;
    }
  }
  return <h5>Add Topics</h5>;
}
export default TopicsList;