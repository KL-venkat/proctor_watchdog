
import React, {useState} from 'react'
import { Button, Header, Modal} from 'semantic-ui-react'
import EndMessage from './EndMessage'


const ModallEndTest = () => {
  const [open, setOpen] = useState(false)

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

