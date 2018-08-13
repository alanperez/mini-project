import {h, app} from "hyperapp"

export default function ContactUs({state, actions}) {
  return (

<section id="ContactUs" class="contactbg">
  <div class="container">
    <h5 class="comp-title">Contact Us</h5>
    <h2>Delicious and Freshly Made</h2>

      <div class="box">
        <div class="row">
            <div class="col-md-6">
              <div class="title">{state.companyInfo.location}</div>

              <h6 class="address">123 Boulevard drive, TX 75181</h6>

              <p>
              <strong>email:</strong> <a href="mailto:info@restaurant.com">info@restaurant.com</a>
              </p>
            </div>

            <div class="col-md-6">
                <h6>Phone:</h6>
                <div class="title">972-123-0999</div>
                <h6>Weekday Hours: </h6>
                <p>Mon - Fri:<br/>11 a.m - 9 p.m</p>

                <h6>Weekend Hours: </h6>
                <p>Sat - Sun:<br/>11 a.m - 1 a.m</p>
            </div>

        </div>
      </div>


  </div>
</section>
  )
}
