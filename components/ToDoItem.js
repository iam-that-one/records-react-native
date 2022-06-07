import React from "react";
import { View, Text,StyleSheet, TouchableOpacity } from "react-native";

const ToDoItem = props =>{
    return(
       <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    listItem:
    {
        padding:20,
        paddingHorizontal:30,
        marginVertical:10,
        backgroundColor:'#ccf', 
        borderRadius:20,
        shadowColor:'black',
        shadowOpacity:3
    }
}
);
export default ToDoItem
