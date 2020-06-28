import React from "react"
import styled from "styled-components"

function Bio() {
  return (
    <Container>
      <h2 style={{fontWeight: 200, letterSpacing: "0.1em" }}>
        Hello, I'm Jacob. I'm a bit of a geek and this is my blog all about Astronomy, Audio/Visual, Home Automation, IOT, Photography, Science, Smart Home & Technology.
      </h2>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  max-width: 836px;
  margin:auto;
  padding: 3.236rem calc(1rem + env(safe-area-inset-left));
`

export default Bio
