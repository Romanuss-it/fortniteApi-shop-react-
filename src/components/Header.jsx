function Header() {
  return (
    <>
      <nav className="cyan lighten-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            FortniteShop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/Romanuss-it/fortniteApi-shop-react-"
                target="_blank"
                rel="noreferrer"
              >
                repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export { Header }
