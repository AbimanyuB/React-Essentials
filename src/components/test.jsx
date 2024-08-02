export default function Input({richText, ...props}) {
  let renderInput = <input {...props} />
  if (richText) renderInput = <textarea {...props}/> 
  return <>{renderInput}</>
}