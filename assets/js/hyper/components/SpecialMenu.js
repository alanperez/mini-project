import {h, app} from "hyperapp"

export default function SpecialMenu({state, actions}) {

  var loopMenu = function(){
    return state.SpecialMenuInfo.map(function(item){
      console.log(item.title)
      return(
        <div class="col-md-4">
          <div class="box">
          <div class="box-img">
          <div class="price-circle">${item.price}</div></div>

            <span class="title">{item.title}</span>
            <p class="details">{item.description}</p>
          </div>
        </div>

      )
    })
  }

  return (

<section id="SpecialMenu" class="texturebg">
  <div class="container">
    <h5 class="comp-title">Pizza Menu</h5>
    <h2>Delicious and Freshly Made</h2>
    <div class="row boxes">

        {loopMenu()}
    </div>
    <a href="#" class="link">View Full Menu</a>
  </div>
</section>
  )
}
