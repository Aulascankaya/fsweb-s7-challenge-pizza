import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function Counter() {
  return (
    <ButtonGroup className='button-group'>
        <Button className='decrement-button' >-</Button>
        <span className='numberCounter'>5</span>
        <Button className='increment-button' >+</Button>
    </ButtonGroup>
  )
}

export default Counter