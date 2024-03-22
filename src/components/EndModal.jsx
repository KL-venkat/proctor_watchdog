import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class EndModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button size='huge' color='red' onClick={this.open}>End test</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </div>
    )
  }
}

export default EndModal

