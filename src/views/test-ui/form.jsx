import React from 'react'

class Formdemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }

    this.textInput = null

    this.textInputCreate = React.createRef()
  }
  handleCLickRef = () => {
    console.log(this.textInput.value)

    console.log(this.textInputCreate.current.value)
  }
  render() {
    return (
      <div>

        <input type="text" defaultValue="默认的值" ref={(input) => this.textInput = input}/>

        <input type="text" ref={this.textInputCreate}/>

        <button onClick={this.handleCLickRef}>点击submit</button>
      </div>
    )
  }
}

export default Formdemo
