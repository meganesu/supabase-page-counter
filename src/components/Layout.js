import { Link } from 'gatsby'
import * as React from 'react'
import PageViewCounter from './PageCounter'

const Layout = ({children, location}) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/1">1</Link></li>
            <li><Link to="/2">2</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <PageViewCounter url={location.href} />
      </footer>
    </>
  )
}

export default Layout