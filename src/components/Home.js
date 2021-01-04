import React, {Component} from 'react';
import Typist from 'react-typist';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "react-typist/dist/Typist.css";


function NumberFormatCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      thousandSeparator
    />
  );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showCurrentSavings: false,
          renderCompoundRate: false,
          renderExpectedSavings: false,
          renderDesiredRetirementAmount: false,
          showCompoundRate: false,
          showExpectedSavings: false,
          showDesiredRetirementAmount: false,
          currentSavings: 0,
          compoundRate: 8,
          expectedSavings: 0,
          desiredRetirementAmount: 0,
          yearsToRetire: 0,
          showFinal: false,
        }
        this.currentSavingsDone = this.currentSavingsDone.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.compoundRateDone = this.compoundRateDone.bind(this);
        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.handleKeyDownCompoundRate = this.handleKeyDownCompoundRate.bind(this);
        this.expectedSavingsDone = this.expectedSavingsDone.bind(this);
        this.handleKeyDownExpectedSavings = this.handleKeyDownExpectedSavings.bind(this);
        this.desiredRetirementAmountDone = this.desiredRetirementAmountDone.bind(this);
        this.handleKeyDownDesiredRetirementAmount = this.handleKeyDownDesiredRetirementAmount.bind(this);
        this.calculate = this.calculate.bind(this);
        this.readyToShowFinal = this.readyToShowFinal.bind(this);
    }

    currentSavingsDone() {
      this.setState({
        showCurrentSavings: true
      });
    }

    handleKeyDown(e) {
      if (e.key === 'Enter') {
        console.log(e.target.value);
        this.setState({
          renderCompoundRate: true,
          currentSavings: e.target.value
        });
      }
    }

    compoundRateDone() {
      console.log('i think this is unecessary');
    }

    handleYes() {
      this.setState({
        showCompoundRate: true
      });
    }

    handleNo() {
      this.setState({
        renderExpectedSavings: true
      });
    }

    handleKeyDownCompoundRate(e) {
      if (e.key === 'Enter') {
        console.log(e.target.value);
        this.setState({
          renderExpectedSavings: true,
          compoundRate: e.target.value
        });
      }
    }

    expectedSavingsDone() {
      this.setState({
        showExpectedSavings: true
      });
    }

    handleKeyDownExpectedSavings(e) {
      console.log('in the expectedSavingskeydown');
      if (e.key === 'Enter') {
        console.log(e.target.value);
        this.setState({
          renderDesiredRetirementAmount: true,
          expectedSavings: e.target.value
        });
      }
    }

    desiredRetirementAmountDone() {
      this.setState({
        showDesiredRetirementAmount: true
      });
    }

    handleKeyDownDesiredRetirementAmount(e) {
      if (e.key === 'Enter') {
        console.log(this.state.compoundRate);
        this.setState({
          desiredRetirementAmount: e.target.value,
          yearsToRetire: this.calculate(this.state.currentAmount, this.state.compoundRate, this.state.desiredAmount),
          readyToCalc: true
        });
      }
    }

    readyToShowFinal() {
      this.calculateFinal();
    }

    calculateFinal() {
      let body = {
        "current_amount": this.state.currentSavings.replace(/\,/g,''),
        "yearly_deposit": this.state.expectedSavings.replace(/\,/g,''),
        "desired_amount": this.state.desiredRetirementAmount.replace(/\,/g,''),
        "compound_rate": this.state.compoundRate / 100
      }
      const rawResponse = fetch('https://r2a06cofy9.execute-api.us-east-2.amazonaws.com/default/calc_retirement', {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        this.setState({
          yearsToRetire: result["years_to_retirement"],
          showFinal: true
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    calculate(currentAmount, compoundRate, desiredAmount) {
      var total = (desiredAmount / compoundRate) - currentAmount - 1;
      return Math.sqrt(total);
    }

    render() {
      const classes = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      return (
          <div style={{textAlign: "left", padding: "10%"}}>
            <div>
            <Typist
              onTypingDone={this.currentSavingsDone}
              cursor={{show: false}}
              avgTypingDelay={20}
            >
              <div className="textLine">
                hi, so you're interested to know when you can retire?
              </div>
              <Typist.Delay ms={500} />
              <div className="textLine">
                i can help you with that. let's do some calculations.
              </div>
              <Typist.Delay ms={500} />
              <div className="textLine">
                first things first - how much do you currently have in savings?
              </div>
            </Typist>
            {this.state.showCurrentSavings ?
              <TextField
                id="standard-basic"
                label="current savings"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  inputComponent: NumberFormatCustom
                }}
                style={{paddingBottom: "20px"}}
                onKeyDown={this.handleKeyDown}
              /> : null }
            {this.state.renderCompoundRate ?
              <Typist
                onTypingDone={this.compoundRateDone}
                cursor={{show: false}}
                avgTypingDelay={20}
              >
              <div className="textLine">
                <span>cool. i'm going to assume you're investing this $$$ and not just keeping this as cash like a dud.</span><Typist.Backspace count={5} delay={500} /><span>n overly cautious person.</span>
              </div>
              <Typist.Delay ms={500} />
              <div className="textLine">
                if you're investing this in the stock market it's safe to assume it will compound at an 8% rate annually.
              </div>
              <Typist.Delay ms={500} />
              <div className="textLine">
                this has been the historical average for the past half century.
              </div>
              <div className="textLine">
                <span>would you like to complicate things?</span><Typist.Backspace count={18} delay={500} /><span>enter a different compound rate?</span>
              </div>
              <div className={classes.root} style={{display: "flex", paddingBottom: "20px"}}>
                <Button variant="outlined" style={{marginRight: "5px"}} onClick={this.handleYes}>yes</Button>
                <Button variant="outlined" onClick={this.handleNo}>no</Button>
              </div>
            </Typist>
            : null }
            {this.state.showCompoundRate ?
              <TextField
                id="standard-basic"
                label="compound rate"
                style={{paddingBottom: "20px"}}
                InputProps={{
                  endAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
                onKeyDown={this.handleKeyDownCompoundRate}
              /> : null }
            {this.state.renderExpectedSavings ?
              <Typist
                onTypingDone={this.expectedSavingsDone}
                cursor={{show: false}}
                avgTypingDelay={20}
              >
              <div className="textLine">
                alright moving on. How much do you plan on saving every year?
              </div>
              <Typist.Delay ms={500} />
              <div className="textLine">
                don't worry, I won't judge.
              </div>
              </Typist>
              : null }
            {this.state.showExpectedSavings ?
              <TextField
                id="standard-basic"
                label="expected savings"
                style={{paddingBottom: "20px"}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  inputComponent: NumberFormatCustom
                }}
                onKeyDown={this.handleKeyDownExpectedSavings}
              /> : null }
            {this.state.renderDesiredRetirementAmount ?
              <Typist
                onTypingDone={this.desiredRetirementAmountDone}
                cursor={{show: false}}
                avgTypingDelay={20}
              >
              <div className="textLine">
                and how much do you want to withdraw each year when you retire?
              </div>
              </Typist>
              : null }
            {this.state.showDesiredRetirementAmount ?
              <TextField
                id="standard-basic"
                label="yearly retirement"
                style={{paddingBottom: "20px"}}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  inputComponent: NumberFormatCustom
                }}
                onKeyDown={this.handleKeyDownDesiredRetirementAmount}
              /> : null }
            {this.state.readyToCalc ?
              <Typist
                cursor={{show: false}}
                onTypingDone={this.readyToShowFinal}
                avgTypingDelay={20}
              >
                <div className="textLine">ok time to crunch some numbers</div>
                <Typist.Delay ms={800} />
                <div className="textLine">almost ready.</div>
                <Typist.Delay ms={500} />
                <div className="textLine">aaaaand done.</div>
                <Typist.Delay ms={800} />
              </Typist>
              : null}
            {this.state.showFinal ?
              <Typist
                cursor={{show: false}}
                avgTypingDelay={20}
              >
               <div className="textLine">if you start with ${this.state.currentSavings} and invest ${this.state.expectedSavings} every year with a compound rate of {this.state.compoundRate}%, you will be able to retire in {this.state.yearsToRetire.toString()} years and withdraw ${this.state.desiredRetirementAmount} each year in your retirement.</div>
              </Typist>
              : null }
            </div>
          </div>
      )
    }
}

export default Home
