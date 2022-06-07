import React, { useState } from "react";
import { View,Button,TextInput, StyleSheet, Touchable, Modal } from "react-native";


const InputArea = props =>{
    const [enteredToDo, setEnteredToDo] = useState('');

    const setToDo = (enteredText) =>{
            setEnteredToDo(enteredText);
        
        
    };
    const addHandler = () =>{
        if (enteredToDo != ""){
        props.onAddToDo(enteredToDo);
        setEnteredToDo('')
        }
    };
    const cancelHandler = () =>{
        props.onCancel();
        setEnteredToDo('')
    };
    return(
        <Modal visible={props.onChange} animationType='slide' >
       <View style={styles.inputContainer}>
           <TextInput
                style={styles.input}
                onChangeText={setToDo}
                value={enteredToDo}
           />
           <View style={{flexDirection:'column',justifyContent:'space-between', height:100,paddingTop:10}}>
            <Button title="Add ToDo" onPress={addHandler}/>
            <Button title="Cancel" onPress={cancelHandler}/>
           </View>
          
       </View>
       </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer : {
        flex:1,
        padding: 10,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'black',

        
    },
    input : {
        width: '70%',
        padding: 10,
        borderWidth:1,
        borderRadius:75,
        borderColor:'white',
        color: 'white'
    }
});
export default InputArea;