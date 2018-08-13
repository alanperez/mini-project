import {h, app} from "hyperapp"

export default function Header({state, actions}) {
  return (
    <header>
    <div class="container">
      <div class="logo">
         Logo
      </div>
      <nav>
      <a href="#">Home</a>
      <a href="#">Our Story</a>
      <a href="#">Menu</a>
      <a href="#">Deals</a>
      <a href="#">Contact Us</a>
      </nav>
      </div>
    </header>
  )
}
