import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import LandingPage from "./LandingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage />} 
        />
        <Route 
          path="/documents/:id" 
          element={<TextEditor />} 
        />
      </Routes>
    </Router>
  )
}

export default App