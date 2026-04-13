import { Routes, Route, Navigate } from 'react-router-dom'
import TabBar from './components/TabBar'
import Feed from './pages/Feed'
import Search from './pages/Search'
import Profile from './pages/Profile'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <TabBar />
    </div>
  )
}
