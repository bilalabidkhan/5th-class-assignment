import Link from "next/link"

import cssStyle from "./page.module.css"

console.log(cssStyle, "CSS");

export default function home () {
  return (
    <div>
      <ul className={cssStyle.green}>
        <li><Link href="/">Home</Link></li>
        <br />
        <li><Link href="/about">About</Link></li>
        <br />
        <li><Link href="/contact">Contact</Link></li>
        <br />
        <li><Link href="/service">Service</Link></li>
        <br />
      </ul> 
    </div> 
  )
}