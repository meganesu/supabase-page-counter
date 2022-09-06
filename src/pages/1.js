import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      This is page 1.
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Page 1</title>
