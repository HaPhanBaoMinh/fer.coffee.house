import { Dashboard } from "../pages/Dashboard";

const authRouter = [
    { path: "/", component: Dashboard, layout: null },
    { path: "/home", component: Dashboard, layout: null }, // Demo, có thể xóa
]

export { authRouter }