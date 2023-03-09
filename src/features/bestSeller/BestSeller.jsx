import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CardProduct from "../../components/CardProduct";
import { getBestSeller } from "../bestSeller/bestSellerSlice"

export default function BestSeller() {
   const {status, data} = useSelector((state) => state.bestSeller);
   const dispatch = useDispatch();

   useEffect(() => {
    if (status === "idle") {
        dispatch(getBestSeller());
    }
   }, [status]); 

   if (status === "loading") {
    return <div>loading . . .</div>
   };

    return (
    <Container>
        <Row>{
            data.map((item, i) => (
                <Col key={i} xs="6" md="4" lg="3">
                <CardProduct item={item} />
                </Col>
            ))}
        </Row>
    </Container>
  )
}
