import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Party people yeah</h1>
    <p>Welcome to your new Gatsby site. It's the shit.</p>
    <p>Now go build something great.</p>
    <p>When you add a github repo, make sure you select https and not ssh.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
