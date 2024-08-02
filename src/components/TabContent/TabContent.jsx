export default function TabContent({ content }) {
  if (content) {
    return (
      <div id="tab-content">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <pre>
          <code>{content.code}</code>
        </pre>
      </div>
    )
  } else {
    return <p>Please Select a Topic</p>
  }
}