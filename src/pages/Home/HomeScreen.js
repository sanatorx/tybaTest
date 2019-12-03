import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {UserService} from '../../Services/UserService';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const userService = new UserService();
    userService.init();
    this.goToLogIn = this.goToLogIn.bind(this);
    this.goToSignUp = this.goToSignUp.bind(this);
  }

  render() {
    return (
      <View>
        <Text>Bienvenido a mi prueba de desarrollo</Text>
        <Text>Ya tienes una cuenta?</Text>
        <Button title="Inicia Sesión" onPress={this.goToLogIn} />
        <Text>Aún no cuentas con una?</Text>
        <Button title="Regístrate!" onPress={this.goToSignUp} />
      </View>
    );
  }

  goToLogIn() {
    return this.props.navigation.navigate('LogIn');
  }

  goToSignUp() {
    return this.props.navigation.navigate('SignUp');
  }
}
