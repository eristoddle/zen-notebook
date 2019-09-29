import React from 'react'
import ContentEditable from 'react-contenteditable'

export default function Editor() {
  const [html, setHtml] = React.useState('')
  const refContentEditable = React.useRef(null)
  console.log('html', html)
  return (
    <ContentEditable
      innerRef={refContentEditable}
      html={html}
      disabled={false}
      onChange={(e) => setHtml(e.target.value)}
      tagName="article"
    />
  )
}
