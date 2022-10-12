import { window } from '../components/window/window'
import { form } from '../components/form/form'
import { input } from '../components/input/input'
import { button } from '../components/button/button'
import { link } from '../components/link/link'

const registerLink = link('#', 'Create account')
const submitButton = button('submit', 'Enter')
const loginInput = input('login', 'text', 'Login', 'Incorrect Login')
const passwordInput = input('password', 'password', 'Password', 'Incorrect Password')
const authForm = form('auth', loginInput + passwordInput, submitButton + registerLink)
const loginWindow = window('Sign in', authForm)

export { loginWindow as loginPage }
