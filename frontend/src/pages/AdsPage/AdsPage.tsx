import React from "react"

import { Layout } from "@comp/Layout/Layout"
import { CircleCanvas } from "@comp/Canvas/CircleCanvas";
import { AdsManager } from "@comp/AdsManager/AdsManager"

export default function AdsPage() {
  return (
    <>
      <Layout>
        <AdsManager/>
      </Layout>
      <CircleCanvas/>
    </>
  )
}