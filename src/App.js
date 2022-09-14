import './App.css';
import { Person } from './profile/profile';

function App() {
  return (
    <div className="App">
      <Person fullName="John Doe" bio="Lorem ipsum dolor sit amet" profession="Web Developer">https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg</Person>
    </div>
  );
}

export default App;
