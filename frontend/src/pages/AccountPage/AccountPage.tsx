import React from 'react'
import { Layout } from '@comp/Layout/Layout'
import { UserManager } from '@comp/UserManager/UserManager'
import { LineCanvas } from '@comp/Canvas/LineCanvas'

interface Props {

}

export default function AccoutPage(props: Props) {

  return (
    <>
      <Layout>
        <UserManager/>
        <LineCanvas/>
      </Layout>
    </>
  )
}