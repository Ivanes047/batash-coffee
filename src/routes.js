import { Cart, CoffeePage, Home, CoffeeBeansPage } from "./pages";
import { HOME_ROUTE, CART_ROUTE, COFFEE_ROUTE, COFFEE_BEANS_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    },
    {
        path: CART_ROUTE,
        Component: <Cart/>
    },
    {
        path: COFFEE_ROUTE,
        Component: <CoffeePage/>
    },
    {
        path: COFFEE_BEANS_ROUTE + '/:id',
        Component: <CoffeeBeansPage/>
    }
]