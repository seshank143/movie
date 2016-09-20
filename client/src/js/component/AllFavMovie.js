var React =require('react');
var Display2=require('./Display2.js');
var AllFavMovie =React.createClass({
getInitialState: function(){
    return ({data:[]})
},

showResult: function(response) {
this.setState({
      data: response
    });
  },
  // ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8080/movie/Fav",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
componentDidMount:function(){
  this.getDataFromServer();
},
render:function(){
    console.log(this.state.data)
var result = this.state.data.map(function(search) {
      return (
        <Display2  search1={search}/>
);
    });
    return(
     <div>
     <h2>MY Favorites</h2>
      {result}
</div>
)
  }
});
module.exports=AllFavMovie;
