import { html, render, useState } from './common.js'
import TopBar from './TopBar.js'
import WeekView from './WeekView.js'
import MealListView from './MealListView.js'
import ShoppingView from './ShoppingView.js'
import StockView from './StockView.js'

const views = [MealListView, WeekView, ShoppingView, StockView]

function App(props) {
    const { mode, setMode } = useState(views[0])
    const { data, setData } = useState(null)

    return html`<${TopBar} mode=${mode} views=${views} />`
}

render(html`<${App} />`, document.body)