import React, {Component} from "react"

class Mainpage extends Component {

    state = {

    }


    render(){
        return (
<div class="container">

  <h1 class="header center light-green-text go-green groove double">Be Green</h1>
  <div class="row center">
    <h5 class="header col s12 light p2">Change your habits. Change the world.</h5>
  </div>
  <div class="row center">
</div>
</div>


<div class="section">

   {/* Icon Section   */}
  <div class="row">
    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons" >sync</i></h2>
        <h5 class="infotitle center go-green">How To Recycle</h5>

        <p class="light infocolumn p2">Recycling can be confusing. Can you recycle this or that? Where does it go? But there's no need to stress anymore. Get your answers here.</p>
      </div>
    
        <ul id="navigation">
           
            <li><a href="#">Materials &raquo;</a>
                <ul>
                    <li><a href="#">Aluminum</a></li>
                    <li><a href="#">Plastic</a></li>
                    <li><a href="#">Other &raquo;</a>
                        <ul>
                            <li><a href="#">Other 1</a></li>
                            <li><a href="#">Other 2</a></li>
                            <li><a href="#">Other 3</a></li>
                            <li><a href="#">Other 4</a></li>
                        </ul>
                    </li>
            
                </ul>
            </li>
       
            </ul>
            
   
        
    </div>

    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons" >map</i></h2>
        <h5 class="center infotitle go-green">Find Recyle Locations Near You</h5>

        <p class="light infocolumn p2">Does your community not have a recycle center? No problem. Search for one here and do your part.</p>
      </div>

           
        <li><a href="/maps">Search &raquo;</a> </li>
    </div>

    <div class="col s12 m4">
      <div class="icon-block">
        <h2 class="center light-blue-text"><i class="material-icons" >chat_bubble_outline</i></h2>
        <h5 class="center infotitle go-green">Discord</h5>

        <p class="light infocolumn p2">Be inspired. Share your story.</p>
      </div>
    </div>
           
  {/* </div> */}

</div>
</div>
)}
}

export default Mainpage;