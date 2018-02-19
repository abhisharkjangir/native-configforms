import React, { Component } from 'react';
import Check from 'react-native-checkbox'
import {View, Text } from 'react-native';

const CheckBoxStyle = {
  margin: 5,
  height: 20,
  width: 20,
}

const TextStyle = {
  margin: 5,
  marginBottom:0
}

const ViewStyle = {
  backgroundColor : '#eee',
  borderBottomColor : '#ccc',
  borderBottomWidth : 1,
  width : 360
}

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this._changeHandler = this._changeHandler.bind(this);
  }

  _changeHandler(item,index){
    let stateList = this.props.state[this.props.element.key];
    item.checked = item.checked ? false : true;
    stateList[index] = item;
    this.props.changeHandler(stateList,this.props.element.key)
  }

  render() {
    let attr = this.props.element;
    return (<View style={ViewStyle} key={attr.key}>
      <Text style={TextStyle}>{attr.label}</Text>
      {this.props.state[attr.key].map((item,i) => <Check key={item.id} checkboxStyle={CheckBoxStyle}
        label={item.name}
        checked={item.checked}
        onChange={() => this._changeHandler(item,i)}
      />)}

    </View>)
  }
}

export default Checkbox;
