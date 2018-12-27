import './style/app.less'
import { word } from './bin/hello.ts'

function greeter(person: string) {
    return "你好, " + person;
}

let user = "赵先生";

document.body.innerHTML = `<h3 class="yoyo">${greeter(word)}</h3>`;