import './App.css';
import Card from './components/cardComponents/card';
import Img from '../src/assests/swetha-panikkan.jpg';
import { useState } from 'react';
function App() {
  const [like,setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  }
  const handleResume = () =>{
    const link = document.createElement('a');
    link.href = 'https://swethaprakashp.github.io/swetha-info/resume.pdf';
    link.download = 'swethapanikkan-resume.pdf'
    link.click();
  }
  return (
    <div>
     <section>
     <Card 
      image={Img}
      title="Swetha Panikkan"
      subtitle="Full stack developer"
      description="I'm Swetha Panikkan, a Computer Science postgraduate from Kerala, India. I'm a passionate full stack developer specializing in the MERN stack, with a keen interest in software development and mobile app development. I’m dedicated and constantly seeking new opportunities to grow. I’m a fast learner who thrives on expanding my knowledge and skills"
      onResume={handleResume}
      onLike={handleLike}
      heart={like ? 'Thanks!!' : 'Like'}
     />
     </section>
    </div>
  );
}

export default App;
