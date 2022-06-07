import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Button} from 'react-native';
import { useState } from 'react';
import InputArea
 from './components/InputArea';
 import ToDoItem from './components/ToDoItem';

export default function App() {

  const [newToDo, todos] = useState([]);
  var id = Math.random().toString()
  const printToDo = (toDo) =>{
    todos(currentToDo => {return[... currentToDo, {id: id, value: toDo}]});
    setIsActive(false);
    
  };

const removeToDo = (toDoId) => {
  todos(currentToDo => {
    return newToDo.filter((toDo) => toDo.id != toDoId);
  });
};

const [isActive, setIsActive] = useState(false)
const visablityHandler = () =>{
setIsActive(true);

};
const cancel = () =>{
  setIsActive(false);
  
  };
  return (
   
    <View style={styles.container}>
      <View style={{alignItems:'center' , width:'100%', padding:20,backgroundColor:'#ffff',borderRadius:20}}><Text>ToDos List</Text></View>
      <Button title='Add A new ToDo' onPress={visablityHandler}/>
      <InputArea onCancel={cancel}  onAddToDo={printToDo} onChange={isActive}/>
    <FlatList
    style={{padding:10, shadowColor:'white', shadowOpacity:10}}
      data={newToDo}
      renderItem={itemData =>
         <ToDoItem  
          onDelete={removeToDo.bind(this,itemData.item.id)}
          title={itemData.item.value}
          />
        }
      keyExtractor={(item,index)=> item.id}
    />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: 50,
    backgroundColor:'black',
    height:'100%'
  },
});
