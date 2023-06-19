import './App.css';
import AddJobs from './components/AddJobs/AddJobs';
import JobPost from './components/JobPost/JobPost';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <JobPost></JobPost>
      <AddJobs></AddJobs>
    </div>
  );
}

export default App;
