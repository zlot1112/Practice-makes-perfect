import {createWebHistory, createRouter} from "vue-router";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";

const routes = [
    {
        path: "/",
        name: "index",
        component: NewsView,
    },
    {
        path: "/news",
        name: "new",
        component: NewsView,
    },
    {
        path: "/ask",
        name: "ask",
        component: AskView,
    },
    {
        path: "/jobs",
        name: "jobs",
        component: JobsView,
    },
    {
        path: "/users",
        name: "users",
        component: UserView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;