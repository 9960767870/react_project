import React from "react";
// import PropTypes from "prop-types"

 export function Nav(props){

    function demo(){

        alert("are you sure...?");
          }
    return(
    <nav>
      <div className="row" >
        <div className="col-md-1"><b>{props.title1}</b></div>
        <div className="col-md-1"><b>{props.title2}</b></div>
        <div className="col-md-1"><b>{props.title3}</b></div>
        <div className="col-md-1"><b>{props.title4}</b></div>
        <div className="col-md-1"><b>{props.title5}</b></div>
        <div className="col-md-2 offset-4">
        <input type="text" className="form-control" id="text" aria-describedby="emailHelp" placeholder="Enter Here"/>
        </div>
        <div className="col-md-1">
        <button type="button" onClick={demo} className="btn btn-success">Search</button>

        </div>
      </div>
    </nav>
    );
}
