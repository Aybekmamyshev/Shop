import "./style.scss"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Componenets/HomePage/Home";
import Catalog from "./Componenets/CatalogPage/Catalog";
import LikeSection from "./Componenets/LikePage/LikeSection";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import NotFound from "./Componenets/NotFound/NotFound";
import {useSelector} from "react-redux";

function App() {
    const {user} = useSelector((store) => store.user)
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<Layout/>}>
                {/*{*/}
                {/*    !user.register.length ?*/}
                {/*        <>*/}
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/register'} element={<Register/>}/>
                        {/*</>*/}
                        {/*:*/}
                        {/*<>*/}
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/catalog'} element={<Catalog/>}/>
                            <Route path={'/like'} element={<LikeSection/>}/>
                            <Route path={'*'} element={<NotFound/>}/>
                {/*        </>*/}

                {/*}*/}

            </Route>
        )
    )
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
