import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [text,setText] = useState('');
  const [todo,setTodo] = useState([]);
  console.log(todo);
  const myfunc =()=>{
    setTodo([...todo,text]);
    setText(null);
    
  }
  const remove = (index)=>{
    let todoopy = [...todo];
    todoopy.splice(index,1);
    setTodo(todoopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
        {
          todo.map((text,index)=>(
            <TouchableOpacity key={index} onLongPress={()=>remove(index)}>
              <Task text={text} />
            </TouchableOpacity>
          ))
        }
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding':'height'} style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder='Write a Task' value={text} onChangeText={t => setText(t)} />
          <TouchableOpacity onPress={myfunc} >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaed',
  },
  taskWrapper:{
    paddingTop:50,
    paddingHorizontal:20,
    
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    width:'100%',
    position:'absolute',
    bottom:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:25,
    backgroundColor:'#fff',
    borderRadius:30,
    width:280,
    borderColor:"#c0c0c0",
    borderWidth:1,
  },
  addWrapper:{
    marginRight:10,
    paddingVertical:15,
    paddingHorizontal:25,
    backgroundColor:'#fff',
    borderRadius:50,
    borderColor:"#c0c0c0",
    borderWidth:1,
  },
  addText:{
    fontSize:24,
    fontWeight:'bold',
    
  }
});
