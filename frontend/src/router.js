import { createWebHistory, createRouter } from 'vue-router';
 
const routes = [
    {
        path: "/",
        alias: "/loginScreen",
        name: "loginScreen",
        meta: { requiredAuth: false},
        component: () => import("./components/Login/LoginScreen")
    },
    {
        path: "/lessonTableView",
        alias: "/lessonTableView",
        name: "lessonTableView",
        meta: { requiredAuth: true},
        component: () => import("./components/AttendanceTable/LessonTable")
    },
    {
        path: "/visualiseAttendance",
        alias: "/visualiseAttendance",
        name: "visualiseAttendance",
        meta: { requiredAuth: true},
        component: () => import("./components/VisualiseAttendance")
    },
    {
        path: "/home",
        alias: "/home",
        name: "home",
        meta: { requiredAuth: true},
        component: () => import("./components/HomePage")
    },
    {
        path: "/newLesson",
        alias: "/newLesson",
        name: "newLesson",
        meta: { requiredAuth: true},
        component: () => import("./components/LessonForm/NewLessonForm")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to) => {
    if(to.meta.requiresAuth && !window.user){
        // Need to login if not already logged in.
        return {name: 'login'}
    }
})

export default router;