import React, {Component} from 'react';
import {Picker, View, Text} from 'react-native';

const SelectBoxInputStyle = {
  margin: 5,
  height: 80,
  width: 350,
  padding: 5,
  borderColor: 'grey',
  borderWidth: 1
}

const TextStyle = {
  margin: 5,
  marginBottom:0
}

const ViewStyle = {
  backgroundColor : '#eee',
  borderBottomColor : '#ccc',
  borderBottomWidth : 1
}

class SelectBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let attr = this.props.element;
    return (<View style={ViewStyle} key={attr.key}>
      <Text style={TextStyle}>{attr.label}</Text>
      <Picker style={SelectBoxInputStyle} selectedValue={this.props.state[attr.key]} onValueChange={(text) => this.props.changeHandler(text,attr.key)}>
        {attr.options.list.map(item => <Picker.Item key={item.id} label={item.name}  value ={item.value} />)}
      </Picker>
    </View>)
  }
}

export default SelectBox;
