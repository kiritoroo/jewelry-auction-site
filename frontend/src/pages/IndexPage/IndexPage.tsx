import React from "react";

import { Layout } from "@comp/Layout/Layout";
import { LineCanvas } from "@comp/Canvas/LineCanvas";

interface Props {

}

export default function IndexPage(props: Props) {
  return (
    <>
      <Layout>
        <LineCanvas/>
      </Layout>
    </>
  )
}