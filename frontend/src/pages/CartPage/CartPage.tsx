import React from "react";
import { Layout } from "@comp/Layout/Layout";
import { LineCanvas } from "@comp/Canvas/LineCanvas";
import { CartManager } from "@comp/CartManager/CartManager";

export default function CartPage() {
  return (
    <>
      <Layout>
        <CartManager />
      </Layout>
      <LineCanvas />
    </>
  );
}
