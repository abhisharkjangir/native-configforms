import React from 'react';
import { StyleSheet, Text, View ,Alert} from 'react-native';
import { TextInput, Button } from 'react-native';

import formjson from './formjson';
import TextBox from './TextBox';
import TextAreaBox from './TextAreaBox';
import SelectBox from './SelectBox';
import PasswordBox from './PasswordBox'

const form = formjson.form;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  heading : {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 25,
    width : 360,
    padding :5,
    textAlign : 'center'
  },
  subheading : {
    backgroundColor: '#ccc',
    color: '#000',
    fontSize: 18,
    width : 360,
    padding : 5,
    textAlign : 'center'
  },
  button : {
    width : 360,
     borderRadius : 0
  }
});

const MapFormElements = (element, state, changeHandler) => {
  switch (element.element) {
    case 'text':
      let textAttr = {
        element : element,
        state : state,
        changeHandler : changeHandler
      }
      return <TextBox {...textAttr}/>;
    case 'textarea':
      let textareaAttr = {
        element : element,
        state : state,
        changeHandler : changeHandler
      }
      return <TextAreaBox {...textareaAttr}/>;
    case 'select':
      let selectAttr = {
        element : element,
        state : state,
        changeHandler : changeHandler
      }
      return <SelectBox {...selectAttr}/>;
    case 'password':
      let passwordAttr = {
        element : element,
        state : state,
        changeHandler : changeHandler
      }
      return <PasswordBox {...passwordAttr}/>;
    default:
      return null;
  }
}

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount(){
    form.elements.map(element => this.setState({[element.key] : element.value}))

  }

  componentDidMount(){

  }

  changeHandler (change,key) {
    this.setState({[key] : change})
  }

  submitHandler() {
    // Here make an api call
    // Alert.alert(JSON.stringify(this.state))
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Native ConfigForms</Text>
        <Text style={styles.subheading}>{formjson.form.title}</Text>

        {form.elements && form.elements.map(element => MapFormElements(element,this.state,this.changeHandler))}

        <View style={{margin : 5, width : 350}}>
          <Button style={styles.button}
            onPress={this.submitHandler}
            title="Let's Submit Form"
            color="#000"
          />
        </View>
      </View>
    );
  }
}
