var React=require("react");
var ReactDOM=require("react-dom");
var Search=React.createClass({
createAjax: function(){
        var query    = ReactDOM.findDOMNode(this.refs.query).value;
        var URL      = 'http://omdbapi.com/?s=' + query;
        this.props.s1data(URL)
    },
    render:function(){
    return(
      <div>
      <input
          type="text"
          placeholder="Mango Search"
          ref="query"
/>
<button type="submit" className="btn btn-default" onClick={this.createAjax} >submit</button>
</div>
        )
  }
})
module.exports=Search;
