import { View, Text, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import InputLogin from "./input-login";

function LoginScreen (props: {isDarkMode: boolean}): JSX.Element {
    return (
        <View
        style={{
          backgroundColor: props.isDarkMode ? Colors.black : Colors.white
        }}>
        <Text>Bem-vindo(a) à Taqtile</Text>
        <InputLogin inputHeader='E-mail'/>
        <InputLogin inputHeader='Senha'/>
      </View>
    );
}

export default LoginScreen;