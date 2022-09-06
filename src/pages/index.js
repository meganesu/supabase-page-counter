import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      This is my content.
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
