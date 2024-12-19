import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route  path="/*" element={<Dashboard />}/>
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;