import { window } from '../components/window/window'
import { link } from '../components/link/link'

const loginLink = link('#/login', 'Login Page')
const windowWrapper = window('List of Pages', loginLink)

export { windowWrapper as navPage }
