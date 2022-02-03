function Footer() {
  return (
    <footer className="page-footer cyan lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            link
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }