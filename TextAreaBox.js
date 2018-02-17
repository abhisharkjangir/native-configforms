import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

const TextAreaInputStyle = {
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

class TextAreaBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let attr = this.props.element;
    return (<View style={ViewStyle} key={attr.key}>
      <Text style={TextStyle}>{attr.label}</Text>
      <TextInput multiline numberOfLines={4} underlineColorAndroid="transparent" value={this.props.state[attr.key]} placeholder={attr.placeholder}
         style={TextAreaInputStyle} onChangeText={(text) => this.props.changeHandler(text,attr.key)}/>
    </View>)
  }
}

export default TextAreaBox;
