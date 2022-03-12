import { html, render } from './common.js'

function App(props) {
    return html`<div>Hello</div>`
}

alert("hey!")

render(html`<${App} />`, document.body)