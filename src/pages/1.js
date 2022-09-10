import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = ({ location }) => {
  const [ response, setResponse ] = React.useState()

  const testServerlessFunction = async () => {
    return await window.fetch('/api/hello-world', {
      method: `GET`,
      headers: {
        "content-type": "application/json",
      },
    })
    .then(res => res.json())
  }

  React.useEffect(() => {
    testServerlessFunction()
      .then(response => {
        setResponse(response)
        console.log('SERVERLESS FUNCTION RESPONSE', response)
      })
  }, [])


  return (
    <Layout location={location}>
      <p>This is page 1.</p>
      <p>{JSON.stringify(response)}</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Page 1</title>
