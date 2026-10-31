import site from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <strong>{site.fullName}</strong>
          <br />
          {site.address.line1}, {site.address.postalCode}
          <br />
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </div>
        <p>© {year} {site.name}. All photographs from the Google listing.</p>
      </div>
    </footer>
  )
}
