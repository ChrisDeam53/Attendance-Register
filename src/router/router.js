// import { createWebHistory, createRouter } from 'vue-router';
 
// const routes = [
//     {
//         path: "/",
//         alias: "/LoginScreen",
//         name: "LoginScreen",
//         component: () => import("../components/Login/LoginScreen"),
//     },
//     {
//         path: "/tableView",
//         alias: "/tableView",
//         name: "tableView",
//         component: () => import("../components/TableView"),
//     }
// ];



// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

// export default router;


/////////////////////////////////////////////////////////////////////////////////////////////////

// import { createWebHistory, createRouter } from 'vue-router';
 
// const routes = [
//     {
//         path: "/",
//         alias: "/animals",
//         name: "animals",
//         component: () => import("../components/Login/LoginScreen")
//     },
//     {
//         path: "/aaa",
//         alias: "/animals2",
//         name: "animals2",
//         component: () => import("../components/TableView")
//     }
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

// export default router;


/////////////////////////////////////////////////////////////////////////////////////////////////


import { createWebHistory, createRouter } from 'vue-router';
 
const routes = [
    {
        path: "/",
        alias: "/animals",
        name: "animals",
        component: () => import("../components/Login/LoginScreen")
    },
    {
        path: "/tableView",
        alias: "/tableView",
        name: "tableView",
        component: () => import("../components/TableScreen")
        },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;