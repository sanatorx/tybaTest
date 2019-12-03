import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';
import {UserService} from '../../Services/UserService';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      secondPassword: '',
      errors: {
        username: '',
        password: '',
        secondPassword: '',
      },
    };
    this.store = this.store.bind(this);
  }

  render() {
    return (
      <View>
        <Text>Gracias por Registrate en mi desarrollo de prueba.</Text>
        <Text>Nombre de usuario: </Text>
        <TextInput
          placeholder="Digita tu nombre de usuario!"
          onChangeText={username => this.setState({username})}
        />
        <Text>{this.state.errors.username}</Text>
        <Text>Constraseña: </Text>
        <TextInput
          placeholder="Digita tu contraseña"
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />
        <Text>{this.state.errors.password}</Text>
        <Text>Repite Contraseña: </Text>
        <TextInput
          placeholder="Repite tu contraseña"
          onChangeText={secondPassword => this.setState({secondPassword})}
          secureTextEntry={true}
        />
        <Text>{this.state.errors.secondPassword}</Text>
        <Button title="Registrame!" onPress={this.store} />
      </View>
    );
  }

  store() {
    if (!this.formFilled() || !this.passwordMatch()) {
      return false;
    }
    const userService = new UserService();
    if (userService.store(this.state)) {
      this.props.navigation.navigate('LogIn');
    } else {
      Alert.alert(
        'Algo salió mal!',
        'Por favor verifica si tu información es correcta.',
      );
    }
  }

  formFilled() {
    let isFilled = true;

    for (let [key, input] of Object.entries(this.state)) {
      this.setState(prevState => {
        let errors = {...prevState.errors};
        if (input === '') {
          errors[key] = 'Este campo es obligatorio';
          isFilled = false;
        } else {
          errors[key] = '';
        }
        return {errors};
      });
    }

    return isFilled;
  }

  passwordMatch() {
    const isSecure = this.state.password === this.state.secondPassword;

    if (!isSecure) {
      this.setState(prevState => {
        let errors = {...prevState.errors};
        errors.password = 'Las contraseñas no coinciden';
        errors.secondPassword = 'Las contraseñas no coinciden';
        return {errors};
      });
    }

    return isSecure;
  }
}
