import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Button from './ButtonCalcul';
import Display from './DisplayCalcul';

let numA;
let numB;
let result;
 
export default class CalculatorScreen extends React.Component{
  state = {
    display: 0,
    operation: '',
    shouldConcatenateDigit: false,
  };
  giveResult =()=>{ const res = result
    console.log('nadeys viydet '+this.giveResult)};

  concatenateDigit = (digit) => {
    if (this.state.shouldConcatenateDigit) {
      this.setState((prevState) => ({
        display: prevState.display + digit,
      }));
    } else {
      this.setState({
        display: digit,
        shouldConcatenateDigit: true,
      });
    }
  };

  activateOperation = (operation) => {
    numA = Number(this.state.display);
    this.setState({
      shouldConcatenateDigit: false,
      operation,
    });
  };

  Result = () => {
    switch (this.state.operation) {
      case 'minus':
        numB = Number(this.state.display);
        result = numA - numB;
        this.setState({
          display: result,
          operation: '',
        });
        break;
      case 'plus':
        numB = Number(this.state.display);
        result = numA + numB;
        this.setState({
          display: +result,
          operation: '',
        });
        break;
      case 'division':
        numB = Number(this.state.display);
        result = numA / numB;
        this.setState({
          display: +result.toFixed(5),
          operation: '',
        });
        break;
      case 'multiplication':
        numB = Number(this.state.display);
        result = numA * numB;
        this.setState({
          display: +result.toFixed(5),
          operation: '',
        });
        break;
      default:
        return null;
    }
  };

  cancel = () => {
    if (!this.state.shouldConcatenateDigit && this.state.display === 0) {
      this.setState({
        operation: '',
      });
    }
    this.setState({
      display: 0,
      shouldConcatenateDigit: false,
    });
  };

  addDot = () => {
    if (Math.round(this.state.display) === Number(this.state.display)) {
      this.setState((prevState) => ({
        display: `${prevState.display}.`,
        shouldConcatenateDigit: true,
      }));
    }
  };

  percentage = () => {
    this.setState((prevState) => ({
      display: prevState.display / 100,
    }));
  }
  invertSignal = () => {
    this.setState((prevState) => ({
      display: prevState.display * -1,
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inform}>{result}</Text>
        <Display display={this.state.display} />
        <View style={styles.row}>
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text={this.state.display ? 'C' : 'AC'}
            function={() => this.cancel()}
          />
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text="+/-"
            function={() => this.invertSignal()}
          />
          <Button
            backgroundColor="#A6A6A6"
            color="black"
            text="%"
            function={() => this.percentage()}
          />
          <Button
            backgroundColor={
              this.state.operation === 'division' ? 'white' : '#FF9404'
            }
            color={this.state.operation === 'division' ? '#FF9404' : 'white'}
            text="÷"
            function={() => this.activateOperation('division')}
          />
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="7"
            function={() => this.concatenateDigit('7')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="8"
            function={() => this.concatenateDigit('8')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="9"
            function={() => this.concatenateDigit('9')}
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'multiplication' ? 'white' : '#FF9404'
            }
            function={() => this.activateOperation('multiplication')}
          >
            <Feather
              name="x"
              size={25}
              color={
                this.state.operation === 'multiplication' ? '#FF9404' : 'white'
              }
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="4"
            function={() => this.concatenateDigit('4')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="5"
            function={() => this.concatenateDigit('5')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="6"
            function={() => this.concatenateDigit('6')}
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === "minus" ? 'white' : '#FF9404'
            }
            function={() => this.activateOperation("minus")}
          >
            <Feather
              name="minus"
              size={25}
              color={
                this.state.operation === "minus" ? '#FF9404' : 'white'
              }
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            backgroundColor="#333333"
            color="white"
            text="1"
            function={() => this.concatenateDigit('1')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="2"
            function={() => this.concatenateDigit('2')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="3"
            function={() => this.concatenateDigit('3')}
          />
          <Button
            orange
            backgroundColor={
              this.state.operation === 'plus' ? 'white' : '#FF9404'
            }
            function={() => this.activateOperation('plus')}
          >
            <Feather
              name="plus"
              size={25}
              color={this.state.operation === 'plus' ? '#FF9404' : 'white'}
              style={styles.icon}
            />
          </Button>
        </View>
        <View style={styles.row}>
          <Button
            special
            backgroundColor="#333333"
            color="white"
            text="0"
            function={() => this.concatenateDigit('0')}
          />
          <Button
            backgroundColor="#333333"
            color="white"
            text="."
            function={() => this.addDot()}
          />
          <Button
            orange
            backgroundColor="#FF9404"
            color="white"
            text="="
            function={() => this.Result()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 8,
    paddingBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  },
  icon: {
    textAlign: 'center',
  },
  inform:{
    margin: 17,
    marginBottom: 5,
    fontSize: 50,
    textAlign: 'right' ,
    top:30,
    color: 'grey',
  },
});