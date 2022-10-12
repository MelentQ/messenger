import './scss/fonts.scss'
import './scss/global.scss'

import { root } from './utils/constants'
import { Router } from './utils/router'

import { loginPage } from './pages/login'
import { navPage } from './pages/nav'

const router = new Router(root, [
    { path: '/', template: navPage },
    { path: '/login', template: loginPage },
])
