import { builtinModules } from "module"
import cssStyle from "./about.module.css"

console.log(cssStyle, "CSS");

function aboutpage () {
    return (
      <div>
        <h1 className={cssStyle.green}>this is the about page</h1>
      </div>
    )
}

export default aboutpage