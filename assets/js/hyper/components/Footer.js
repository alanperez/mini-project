import {h, app} from "hyperapp"

export default function Footer({state, actions}) {
  return (
    <footer>
    <div class="container">
          <nav class="menu">
          <a href="#">Home</a>
          <a href="#">Our Story</a>
          <a href="#">Menu</a>
          <a href="#">Deals</a>
          <a href="#">Contact Us</a>
          </nav>

          <ul class="social-media">


            <li>
            <a href="https://facebook.com" target="new">
            <i class="fab fa-facebook-square"></i></a></li>


            <li><a href="https://twitter.com" target="new"><i class="fab fa-twitter-square"></i>
            </a>
            </li>

            <li><a href="https://www.instagram.com" target="new"><i class="fab fa-instagram"></i></a>
            </li>

          </ul>

          <div class="copyright">&copy; 2018 Copyright</div>
    </div>
    </footer>
  )
}
