
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import Resgistration from './components/subcomponents/Resgistration'
import Login from './components/subcomponents/Login'
import CustomerPannel from './components/subcomponents/CustomerPannel'
import FarmerPannel from './components/subcomponents/FarmerPannel'
import AdminPannel from './components/subcomponents/AdminPannel'
import AddCropsAdmin from './components/adminComponent/AddCropsAdmin'
import SellCrops from './components/farmersComponents/SellCrops'
import AddCategory from './components/adminComponent/AddCategory'
import FarmerSaleProduct from './components/farmersComponents/FarmerSaleProduct'

import { loader as farmersaleProducts } from './components/farmersComponents/FarmerSaleProduct'
import BuyProduct from './components/customer components/BuyProduct'
import BuyOnline from './components/customer components/BuyOnline'
import { loader as buyOnline } from './components/customer components/BuyOnline'
import CustomerChatBot from './components/customer components/CustomerChatBot'
import BuyOffline from './components/customer components/BuyOffline'
import { loader as buyOffline } from './components/customer components/BuyOffline'


function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      children:[
        {
          index:true,
          element:<Resgistration/>
        },
        {
          path:"login",
          element:<Login/>
        }
      ],
      
    },
    {
      path:"/customer",
      element:<CustomerPannel/>,
      children:[
        {
          index:true,
          element:<BuyProduct/>
        },
        {
          path:"BuyOnline/:id",
          element:<BuyOnline/>,
          loader:buyOnline,
        },
        {
          path:"BuyOffline/:id",
          element:<BuyOffline/>,
          loader:buyOffline
        },
        {
          path:"yourQuaries",
          element:<CustomerChatBot/>,
          
        }

      ]
    },
    {
      path:"/farmer",
      element:<FarmerPannel/>,
      children:[
        {
          index:true,
          element:<SellCrops/>
        },
        {
          path:"saleProducts/:id",
          element:<FarmerSaleProduct/>,
          loader:farmersaleProducts
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminPannel/>,
      children:[
        {
          index:true,
          element:<AddCropsAdmin/>
        },
        {
          path:"addCategory",
          element:<AddCategory/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
       
    </div>
  )
}

export default App
