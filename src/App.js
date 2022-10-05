
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Corporate from './components/Corporate/Corporate';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/', 
    element: <Main></Main>, 
    children: [
      {path:'*', element: <ErrorPage></ErrorPage>},
      {path: '/', element: <Home></Home>},
      {path:'home', element: <Home></Home>},
      {path:'about', element: <div>This is about page</div>},
      {path: 'products', element: <Products></Products>},
      {path: 'corporate' , element: <Corporate></Corporate>},
      {path: 'friends', 
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      element: <Friends></Friends>},
      {path: 'friends/:friendID', 
      loader: async ({params}) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      element: <FriendDetails></FriendDetails>}
    ]},
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
