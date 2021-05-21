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
        
        </Row>
      </>
    );
  }
  return <div>Add Skill</div>;
}
export default Topic;