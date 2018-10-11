import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, tr, th, tbody } from 'react-bootstrap'

class RatesTable extends Component {
  roundThreeDecimal(str) {
    return Math.round(Number(str)*1000) / 1000
  }

  roundNumber(str) {
    return Math.round(Number(str))
  }

  renderTable() {
    // debugger
    const headers = ['Lender', 'Product', 'Rate', 'Closing Costs', 'Monthly Payment', 'APR']

    if (!!this.props.rates.errors){
      return <div>{this.props.rates.errors}</div>
    } else if (this.props.rates.rateQuotes.length === 0) {
      return <div>No rate quotes were found for these parameters</div>
    }
    return  (
      <Table responsive>
        <thead>
          <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.props.rates.rateQuotes.map((rate, index) =>
            <tr key={index}>
              <td>{rate.lenderName}</td>
              <td>{rate.loanType}</td>
              <td>{this.roundThreeDecimal(rate.interestRate)}</td>
              <td>{this.roundNumber(rate.closingCosts)}</td>
              <td>{this.roundNumber(rate.monthlyPayment)}</td>
              <td>{this.roundThreeDecimal(rate.apr)}</td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }

  render() {
      if (this.props.rates){
        return this.renderTable()
      }
      return <div></div>
  }
}

const mapStateToProps = ({rates}) => {

  return (
    { rates }
  )
}

export default connect(mapStateToProps)(RatesTable)
