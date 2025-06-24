import React from 'react';
function Header(){
    return(
        <header class="App-header">
         <nav class="navbar">
            <ul>
              <li class='select'><a href="/home">Home</a></li>
              <li class='select'><a href="/videos">Videos</a></li>
              <li class='select'><a href="/projects">Projects</a></li>
              <li class='select'><a href="/stuff">Stuff</a></li>
              <li class='select'><a href="/about">About</a></li>
            </ul>
         </nav>
        </header>
    )
}
export default Header;