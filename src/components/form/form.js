import './form.scss'
import templateFunction from './form.hbs'

/**
 * Handlebars Form Template
 * @param {String} name - Form Name
 * @param {String} inputs - Form Inputs as String
 * @param {String} actions - Form Actions as String
 * @returns {String} - Form Element as String
 */
function form(name, inputs, actions) {
    return templateFunction({ name, inputs, actions })
}

export { form }
