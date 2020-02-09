import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => (
  <main>
    <div>
      <Link to="/">home</Link> <Link to="/posts">posts</Link>{' '}
      <a href="/admin">admin</a>
    </div>
    {children}
  </main>
)
