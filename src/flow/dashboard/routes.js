import DashboardScreen from '../../views/dashboard/index'

export default [
    {
        name: 'Inicio',
        path: '/admin/home',
        component:DashboardScreen
    },
    {
        name: 'Chatbot - Inicio',
        path: '/admin/bot/inicio',
        component: null
    },
    {
        name: 'Chatbot - Config',
        path: '/admin/bot/config',
        component: null
    }
]