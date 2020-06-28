import React from "react"
import styled from "styled-components"

function Bio() {
  return (
    <Container>
      <h2>
        Hello, I'm Jacob. I'm a bit of a geek and this is my blog all about Astronomy, Audio/Visual, Home Automation, IOT, Photography, Science, Smart Home & Technology.
      </h2>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin:auto;
`

export default Bio
