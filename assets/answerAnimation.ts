import { Dimensions, Animated } from 'react-native';

export const animation = new Animated.Value(0);

export const startAnimation = () => {
    Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
    }).start();
};

export const stopAnimation = () => {
    Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
    }).start();
};

export const animatedStyles = {
    transform: [
        {
            translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -Dimensions.get('window').height / 1.9]
            }),
        },
    ],
};
