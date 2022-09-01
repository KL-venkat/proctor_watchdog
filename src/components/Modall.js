
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import EndMessage from './EndMessage'


function Modall() {
  const [open, setOpen] = React.useState(false)
  const EndMessage=()=>
  {
    return "test has ended."
  }

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

export default Modall;





// import React from 'react';
// import { Button, Confirm } from 'semantic-ui-react'
// import EndMessage from './EndMessage'
// import { useState } from 'react'
// import { formatTime } from '../utils'


// class Modall extends React.Component {
//   state = { open: false }

//   open = () => this.setState({ open: true })
//   close = () => this.setState({ open: false })


  

//   render() {
//     return (
//       <div>
//         <Button size='huge' color='red' onClick={this.open}>End Test</Button>
//         <Confirm
//           open={this.state.open}
//           onCancel={this.close}
//           onConfirm={this.close}
//           content="Are you sure you want to exit Test"
//         />
//       </div>
//     )
//   }
// }

// export default Modall

// const Modall = ()=>
// {
//   const[state,setState]=useState(' ');
//   const open=()=>
//   {
//     return setState('true')
//   }
  
//   const close=()=>
//   {
//     return setState('false');
//   }

//   return(
//     <>
//        <div>
//       <Button size='huge' color='red' onClick={this.open}>End Test</Button>
//         <Confirm
//           open={open}
//           onCancel={close}
//           onConfirm={close}
//           content="Are you sure you want to exit Test"
//         />
//       </div>
//     </>
//   )
// }
// export default Modall;