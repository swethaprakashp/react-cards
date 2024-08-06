import './App.css';
import Card from './components/cardComponents/card';
import Img from '../src/assests/swetha.jpg'
function App() {
  const handleFollow = () => {
    //follow function
  }
  const handleProfile = () =>{
    //profile function
  }
  return (
    <div>
     <section>
     <Card 
      image={Img}
      title="Swetha Panikkan"
      subtitle="Full stack developer"
      description="Experienced MERN stack developer with 2 years of hands-on experience in MongoDB, Express.js, React.js, and Node.js. Passionate about crafting efficient, scalable web applications, I thrive in dynamic environments where I can apply my skills to drive innovation. With a proven track record of delivering high-quality solutions, I am dedicated to continuous learning and growth in the ever-evolving field of web development. Let's connect and explore how we can collaborate!"
      onProfile={handleProfile}
      onFollow={handleFollow}
     />
     </section>
    </div>
  );
}

export default App;
