import {createWebHistory, createRouter} from "vue-router";
import NewsView from "@/views/NewsView";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

const routes = [
    {
        path: "/",
        name: "news",
        component: NewsView,
    },
    {
        path: "/news",
        name: "news",
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
        path: "/user/:name",
        name: "user",
        component: UserView,
        props: true
    },
    {
        path: "/item/:id",
        name: "item",
        component: ItemView,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;