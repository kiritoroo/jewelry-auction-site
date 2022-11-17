import React from "react"

import { Layout } from "@comp/Layout/Layout"
import { LineCanvas } from "@comp/Canvas/LineCanvas";
import { AdManager } from "@comp/AdManager/AdManager"

export default function AdPage() {
  return (
    <>
      <Layout>
        <AdManager/>
      </Layout>
      <LineCanvas/>
    </>
  )
}