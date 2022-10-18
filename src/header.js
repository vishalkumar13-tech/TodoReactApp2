import React from 'react'

function Header(props){
    function showAbout() {
        var z = document.getElementsByClassName("aboutAuthor")[0];
           z.style.display = (z.style.display=="none")?"block":"none";
    }
    return(
        <div className = "header">
<h1 className = "banner">My Todos......</h1>
<p className = "counter">
             Done {props.tasksDone}/{props.totalTasks} <br/>
          </p>
<p className = "about" onClick = {showAbout}>?</p>
<p className = "aboutAuthor">.........by Atif</p>
</div>
    )
}

export default Header