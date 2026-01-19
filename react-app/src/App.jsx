import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";  
import Student from "./student.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
    <Header/>
    <Food/>
    <Footer/>
    <Card/>
    <Button/>
    <Student name="John Doe" age="30" isStudent={true}/>
    <Student name="Jane Smith" age="25" isStudent={false}/>
    <Student name="Alice Johnson" age="22" isStudent={true}/>
    <Student name="Bob Brown" age="28" isStudent={false}/>
    <Student/>
    <UserGreeting isLoggedIn={true} username="Divyansh"/>
    </>
  )
}

export default App
