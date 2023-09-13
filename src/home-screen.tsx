import { View, Text } from "react-native";

export function HomeScreen(): JSX.Element {
    return(
        <View>
            <Text>Olá, usuário.</Text>
        </View>
    );
}

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
            color: 'black'
        }
    }
}