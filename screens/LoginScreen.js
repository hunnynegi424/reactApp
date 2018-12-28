import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends React.Component {

  
  state={ Username: '', Password: ''}

  getUsername = (text)=>{this.setState({Username: text})};
  getPassword = (text)=>{this.setState({Password: text})};
  
  

  login = (user, pass)=>{
    if (user == '' && pass == ''){
      alert('Please enter Email and Password');
    }else if (user == ''){
      alert('Please enter user');
    }else if (pass == ''){
      alert('Please enter Password');
    }else{
      alert('Welcome ' +user);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SocialWeb</Text>
        <Text style={styles.inputHeader}>Username:</Text>
        <TextInput style={styles.inputBox} placeholder=' Username' onChangeText = {this.getUsername} />
        <Text style={styles.inputHeader}>Password:</Text>
        <TextInput style={styles.inputBox} placeholder=' Password' onChangeText = {this.getPassword} />
        <TouchableOpacity>
            <Text style = {styles.submitButton} onPress={()=> this.login(this.state.Username, this.state.Password)}>
               Login
            </Text>
         </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00695C',
  },

  header: {
    paddingTop: 75,
    paddingBottom: 55,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  inputHeader: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  inputBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    margin: 15,
  },

  submitButton: {
    backgroundColor: '#004D40',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12.5,
    margin: 15,
    height: 40,
  },
});
