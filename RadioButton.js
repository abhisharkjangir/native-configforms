import React, {Component} from 'react';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import RadioButton from 'radio-button-react-native';

import {TextInput, View, Text} from 'react-native';

const RadioStyle = {
  margin: 5,
  width: 350,
}

const RadioTextStyle = {
  marginLeft: 15,
  marginTop: 2
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

class RadioBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let attr = this.props.element;
    // console.log(this.props.state[attr.key]);
    return (<View style={ViewStyle} key={attr.key}>
      <Text style={TextStyle}>{attr.label}</Text>
      <View>
        {attr.list.map(item =>
          <View style={RadioStyle} key={item.id}>
            <RadioButton  currentValue={this.props.state[attr.key]} value={item.value}
              onPress={(value) => this.props.changeHandler(value,attr.key) }
              outerCircleWidth={3}
              innerCircleSize={16}
              outerCircleColor='black'
              innerCircleColor='black'>
              <Text style={RadioTextStyle}>{item.name}</Text>
            </RadioButton>
          </View>
         )}
      </View>
    </View>)
  }
}

export default RadioBox;
