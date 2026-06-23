import { createRoot } from 'react-dom/client' // 💡 THE FIX: Add this import!
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)