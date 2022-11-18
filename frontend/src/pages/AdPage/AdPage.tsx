import React from "react"

import { Container } from "@comp/Layout/Container"
import { CircleCanvas } from "@comp/Canvas/CircleCanvas";
import { AdManager } from "@comp/AdManager/AdManager";

export default function AdPage() {
  return (
    <>
      <Container>
        <AdManager/>
      </Container>
      <CircleCanvas/>
    </>
  )
}