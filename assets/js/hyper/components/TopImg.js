import {h, app} from "hyperapp"

export default function TopImg({state, actions}) {
  console.log(state.companyInfo.title)
  return (
<section id="TopImg">
    <div class="container">
      <div class="title">
        <h5>
        Welcome To
        </h5>
        <h1>
        {state.companyInfo.title}
        </h1>
      </div>

      <div class="contact-info">
          <div class="container">
          <div class="booking">Delivery Hours Vary</div>
          <h2>(972) - 123 - 0999</h2>
          <div class="hours">
          Opening Hours <strong> Mon - Fri: </strong> 11 a.m - 9 p.m
          <strong> Sat - Sun: </strong> 11 a.m - 11 p.m
          </div>
        </div>
      </div>
  </div>
</section>
  )
}
