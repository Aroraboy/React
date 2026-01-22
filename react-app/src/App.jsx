import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";  
import Student from "./student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Img from "./img.jsx";
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx";
import Event from "./Event.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Update from "./update.jsx";
import Array from "./Array.jsx";
import Object from "./Object.jsx";
import ToDoList from "./ToDoList.jsx";
import Effect from "./Effect.jsx";

function App() {

  const fruits = [{id: 1,name: 'Apple', calories: 95},
                  {id: 2,name: 'Banana', calories: 105}, 
                  {id: 3,name: 'Cherry', calories: 50},
                  {id: 4,name: 'Date', calories: 20},
                  {id: 5,name: 'Elderberry', calories: 30}];

  const vegetables = [{id: 1,name: 'Carrot', calories: 25},
                      {id: 2,name: 'Broccoli', calories: 55}, 
                      {id: 3,name: 'Spinach', calories: 20},
                      {id: 4,name: 'Potato', calories: 130},
                      {id: 5,name: 'Cabbage', calories: 22}];                

  return(
    <>
    <Header/>
    <Food/>
    <Footer/>
    <Card/>
    <Student name="John Doe" age="30" isStudent={true}/>
    <Student name="Jane Smith" age="25" isStudent={false}/>
    <Student name="Alice Johnson" age="22" isStudent={true}/>
    <Student name="Bob Brown" age="28" isStudent={false}/>
    <Student/>
    <UserGreeting isLoggedIn={true} username="Divyansh"  />
    {fruits.length > 0 ?<List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    <Button/>
    <Img/>
    <MyComponent/>
    <Counter/>
    <Event/>
    <ColorPicker/>
    <Update/>
    <Array/>
    <Object/>
    <ToDoList/>
    <Effect/>
    </>
  )
}

export default App
