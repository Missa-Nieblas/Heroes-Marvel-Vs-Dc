import { Route, Routes } from "react-router-dom"
import {LoginPages} from "../auth"
import {HeroesRoutes} from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  
  
    return (
        <>
            <Routes>
            <Route path="login/*" element = {
                <PublicRoute >
                    <Routes>
                        <Route path="/*" element={<LoginPages />} />
                    </Routes>
                </PublicRoute>
            }/>
                
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }
               />
                
            </Routes>

        </>
  )
}
