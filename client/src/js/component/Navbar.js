var React =require('react');
var NavLink=require("./NavLink");
var Navbar=React.createClass({
  render:function(){
    return(
    <div className="container">
    <div className="navbar navbar-fixed-top">
   <div className="nav-collapse collapse navbar-responsive-collapse">
   <ul className="nav navbar-nav">
      <li><NavLink to="/home">HOME</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/moviebox">Search Mango</NavLink></li>
      <li><NavLink to="/allfavmovie">Wish-List</NavLink></li>
</ul>
</div>
</div>
</div>
    )
  }
});
module.exports = Navbar;
