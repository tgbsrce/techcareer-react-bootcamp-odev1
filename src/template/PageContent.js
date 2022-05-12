import React from 'react'
import About from './About'
import Contact from './Contact'
import Image from './Image'
import Project from './Project'


function PageContent() {
  return (
  <> 
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
   <Project></Project>
   <About></About>
   <Contact></Contact>
   <Image></Image>
  </div>
  </>
  )
}

export default PageContent