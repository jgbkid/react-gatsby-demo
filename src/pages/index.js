import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Party people yeah</h1>
    <p>Welcome to your new Gatsby site. It's the shit.</p>
    <p>Now go build something great.</p>
    <p>When you add a github repo, make sure you select https and not ssh. Also to add files that weren't originally staged, use 'git status' and then 'git add .' to add all. If you get fatal 'origin already exists' here are some important commands— 'git remote rm origin' and 'git remote rm upstream'.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
