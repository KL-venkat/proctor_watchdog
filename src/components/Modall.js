
import React from 'react'
import { Button, Header, Image, Modal, Confirm } from 'semantic-ui-react'
import EndMessage from './EndMessage'
import { useState } from 'react';



function ModallEndTest() {
  const [open, setOpen] = React.useState(false)

  

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size='huge' color='red'>End Test</Button>}
    >
      
      <Modal.Description>
          <Header> </Header>
          
          <h1> Are you sure you want to exit Test</h1>
      </Modal.Description>
      
    <Modal.Actions>
        <Button size='massive' color='black' onClick={() => setOpen(false)}>
          No
        </Button>
        <Button
          size='massive'
          color='sky blue'
          
          
          // onClick={() => setOpen(false)}>Yes
          onClick={<EndMessage/>}>Yes
          </Button>
      
        
    </Modal.Actions>
    <Modal/>
   </Modal>
  )
}

export default ModallEndTest;




// import React, { Component } from 'react'
// import { Button, Confirm } from 'semantic-ui-react'

// class ModalEndTest extends Component {
//   state = { open: false }

//   open = () => this.setState({ open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     return (
//       <div>
//         <Button onClick={this.open}>Show</Button>
//         <Confirm
//           open={this.state.open}
//           onCancel={this.close}
//           onConfirm={this.close}
//         />
//       </div>
//     )
//   }
// }

// export default ModalEndTest;