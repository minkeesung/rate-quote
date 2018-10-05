import React, { Component } from 'react'
import Select from 'react-select'
import { Button } from 'react-bootstrap'
import '../css/Form.css'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Form extends Component {
  state = {
    propertyType: "",
    loanSize: "",
    creditScore: "",
    occupancy: ""
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    const { loanSize, creditScore, propertyType, occupancy } = this.state

    this.props.fetchRates(loanSize, creditScore, propertyType, occupancy)
  }

  handleChange = (selectedOption) => {
    let option = selectedOption.value
    let type = selectedOption.type
    this.setState({
      [type]: option
    })
  }

  render() {
      const propertyType = [
        { value: 'SingleFamily', label: 'SingleFamily', type: 'propertyType' },
        { value: 'Condo', label: 'Condo', type: 'propertyType' },
        { value: 'Townhouse', label: 'Townhouse', type: 'propertyType' },
        { value: 'MultiFamily', label: 'MultiFamily', type: 'propertyType' }
      ];
      const occupancy = [
        { value: 'Primary', label: 'Primary', type: 'occupancy' },
        { value: 'Secondary', label: 'Secondary', type: 'occupancy'},
        { value: 'Investment', label: 'Investment', type: 'occupancy' }
      ];

    return (
      <form className="form">
        <div className="row">
          <div className="col">
            Loan Size
          </div>
          <div className="col-4">
            <input
              name="loanSize"
              type="string"
              value={this.state.loanSize}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col">
            Property Type
          </div>
          <div className="col-4">
            <Select
              name="propertyType"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={propertyType}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            Credit Score
          </div>
          <div className="col-4">
            <input
              name="creditScore"
              type="string"
              value={this.state.creditScore}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col">
            Occupancy
          </div>
          <div className="col-4">
            <Select
              name="occupancy"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={occupancy}
            />
          </div>
        </div>
        <div className="col submit">
          <Button bsStyle="primary" bsSize="large" block onClick={this.handleSubmit}>
            Quote Rates
          </Button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(Form);
