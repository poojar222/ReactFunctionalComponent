import logo from './logo.svg';
import './App.css';
import Post from "./Post.jsx";
import Header from "./Header.jsx"

function App() {
  
    const posts = [
     {img_url:"IndianFlag.img",
       caption :"India Flag"
    }
    ,
      {img_url:"india map.jpeg",
      caption :"India map"},
      {
       img_url :"indianpeople.jpeg",
       caption :"Indian people"
      }
    ]
    return (
        <div className = "ZaceBook">
          <Header/>
          {
            posts.map((array,index) => {
              return <Post key ={index}  img_url = {array.img_url} caption ={array.caption} ></Post>
            })
          }
        </div>
    );
  }
export default App;
