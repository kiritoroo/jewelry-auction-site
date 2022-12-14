import React from 'react'
import { Layout } from '@comp/Layout/Layout'
import { RegisterForm } from '@comp/Forms/RegisterForm/RegisterForm'
import { LineCanvas } from '@comp/Canvas/LineCanvas'

interface Props {

}

export default function RegisterPage(props: Props) {

  return (
    <>
      <Layout>
        <RegisterForm/>
        <LineCanvas/>
      </Layout>
    </>
  )
}