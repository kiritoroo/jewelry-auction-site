import React from "react"

import { Layout } from "@comp/Layout/Layout"
import { CircleCanvas } from "@comp/Canvas/CircleCanvas";
import { AdManager } from "@comp/AdManager/AdManager"

export default function AdPage() {
  return (
    <>
      <Layout>
        <AdManager/>
      </Layout>
      <CircleCanvas/>
    </>
  )
}