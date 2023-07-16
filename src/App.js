import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Routes/Router/Router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
