import './link.scss'
import templateFunction from './link.hbs'

/**
 * Handlebars Link Template
 * @param {String} link - Link
 * @param {String} text - Link Text
 * @returns {String} - Link Element as String
 */
function link(link, text) {
    return templateFunction({ link, text })
}

export { link }
