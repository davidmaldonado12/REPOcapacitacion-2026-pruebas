export function PageWrapper({ header, children, footer }) {
  return (
    <div className="app-shell page-shell">
      {header}
      <main className="page-main">{children}</main>
      {footer}
    </div>
  )
}
