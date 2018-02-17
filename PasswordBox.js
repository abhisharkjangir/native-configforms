import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const PasswordInputStyle = {
  margin: 5,
  height: 40,
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

class PasswordBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let attr = this.props.element;
    return (<View style={ViewStyle} key={attr.key}>
      <Text style={TextStyle}>{attr.label}</Text>
      <TextInput  secureTextEntry={true} underlineColorAndroid="transparent" value={this.props.state[attr.key]} placeholder={attr.placeholder}
         style={PasswordInputStyle} onChangeText={(text) => this.props.changeHandler(text,attr.key)}/>
    </View>)
  }
}

export default PasswordBox;
