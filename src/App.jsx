import { createContext } from 'react';
import useRouteCustom from './routes/useRouteCustom';
import { message } from 'antd';
export const AlertContext=createContext();
function App() {

  // const myRoutes = useRouteCustom();
  // return myRoutes;
  const myRoutes = useRouteCustom();
  const [messageApi, contextHolder] = message.useMessage();
  const handleAlert=(type,content)=>{
    messageApi.open({
      type,
      content,
    })
  }
  return (
    <AlertContext.Provider value={{handleAlert}}>
      {contextHolder}
      {myRoutes}
    </AlertContext.Provider>
  )
}

export default App;
