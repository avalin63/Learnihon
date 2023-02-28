import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
import Header from '../components/Header';


const LearnihonPage = ({ children }: React.PropsWithChildren<{}>) => {

    const style = useColorScheme() == 'light' ? style_light : style_dark;

    return (
        <View style={style.container}>
            <Header/>
            {children}
        </View>
    );
};


const style_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.light
    }
})


const style_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.dark,
    },
});

export default LearnihonPage;