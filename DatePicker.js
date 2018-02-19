import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {Text, View } from 'react-native';


const TextStyle = {
  margin: 5,
  marginBottom:0
}

const ViewStyle = {
  backgroundColor : '#eee',
  borderBottomColor : '#ccc',
  borderBottomWidth : 1
}

 class MyDatePicker extends Component {
  constructor(props){
    super(props)
    // this.state = {date:"2016-05-15"}
  }

  render(){
    let attr = this.props.element
    return (
      <View style={ViewStyle}>
        <Text style={TextStyle}>{attr.label}</Text>
        <DatePicker
          disabled={attr.disable}
          style={{width: 360}}
          date={this.props.state[attr.key]}
          mode="date"
          placeholder={attr.placeholder}
          format={attr.format}
          minDate={attr.from || new Date() }
          maxDate={attr.to || new Date() }
          confirmBtnText="Ok"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateInput: {
              margin: 5,
              width:350
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.props.changeHandler(date, attr.key)}}
        />
      </View>
    )
  }
}

export default MyDatePicker
