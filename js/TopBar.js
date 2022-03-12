import { html, render } from './common.js'

export default function(props) {
    return html`<ul><li>test</li>${props.views.map(view => html`<li>${view.title || "Sans nom"}</li>` )}</ul>`
}