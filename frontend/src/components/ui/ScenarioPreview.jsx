export function ScenarioPreview({ title, category, image, alt }) {
  return (
    <div className="preview-frame">
      <div className="preview-frame__meta">
        <span>{title}</span>
        <span>{category}</span>
      </div>
      <img src={image} alt={alt} loading="lazy" />
    </div>
  )
}
