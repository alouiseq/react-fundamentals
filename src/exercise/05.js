// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


// Solution ====================
const smallBox = <div className="box--small" style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}>small lightblue box</div>
const mediumBox = <div className="box--medium" style={{ backgroundColor: 'pink', fontStyle: 'italic' }}>medium pink box</div>
const largeBox = <div className="box--large" style={{ backgroundColor: 'orange', fontStyle: 'italic' }}>large orange box</div>

// EC1 =========================

const Box = ({classNames, styles, children}) => (
  <div className={`box ${classNames}`} style={styles}>{children}</div>
);

const SmallBox = () => (
  <Box classNames="box--small" styles={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}>
    small lightblue box
  </Box>
);
const MediumBox = () => (
  <Box classNames="box--medium" styles={{ backgroundColor: 'pink', fontStyle: 'italic' }}>
    medium pink box
  </Box>
);
const LargeBox = () => (
  <Box classNames="box--large" styles={{ backgroundColor: 'orange', fontStyle: 'italic' }}>
    large orange box
  </Box>
);

// EC2 =========================

const Box2 = ({size, style}) => (
  <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
    {size} {` ${style.backgroundColor} box`}
  </div>
);


function App() {
  return (
    <div>
      <Box2 size="small" style={{backgroundColor: 'lightblue'}} />
      <Box2 size="medium" style={{backgroundColor: 'pink'}} />
      <Box2 size="large" style={{backgroundColor: 'orange'}} />
    </div>
  )
}

export default App
