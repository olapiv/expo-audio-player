import {StyleSheet} from 'react-native';

export const standardsStylesObject = {
    backgroundColor: "white",
    borderColor: "grey",
    color: "black",
    borderRadius: 5,
    borderWidth: 0.5,
    fontSizeNormal: 17,
};

const styles = StyleSheet.create({
    StandardText: {
        fontSize: standardsStylesObject.fontSizeNormal,
        padding: 6,
        color: standardsStylesObject.color
    },
    StandardContainer: {
        borderRadius: standardsStylesObject.borderRadius,
        borderWidth: standardsStylesObject.borderWidth,
        borderColor: standardsStylesObject.borderColor,
        backgroundColor: standardsStylesObject.backgroundColor,
        marginLeft: 10,
        marginRight: 10
    },
});

export default styles
