import React, { useState } from "react";
import { Container } from "reactstrap";
import Tabs from "../components/Tabs";
import BestSeller from "../features/bestSeller/BestSeller";
import Table from "../features/table/Table";
import Layout from "../Layout";

export default function ListProduct () {
    const [tab, setTab] = useState(0)

    return (
        <Layout>
            <Container>
                <h1 className="my-5">List Product</h1>
                <Tabs tab={tab} setTab={setTab} />
                {tab === 0 && <BestSeller />}
                {tab === 1 && <Table />}
            </Container>
        </Layout>
    );
} 