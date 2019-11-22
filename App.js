import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from 'storyline_app/src/styles';
import AudioSlider from './AudioSlider';


export default function App() {
  return (
    <View style={[styles.StandardContainer, {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        }]}>

        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            }}>

            <Text style={[styles.StandardText, {flex: 5}]}>
                Audio name
            </Text>

            <TouchableOpacity 
                style={[{flex: 1}]}
            >
                <Text style={styles.StandardText}>Edit</Text>
            </TouchableOpacity>
            

        </View>

        <AudioSlider audio={this.props.audio}/>

    </View>
  );
}
