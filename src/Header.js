import React from 'react';
function Header(){
    return(
        <header class="App-header">
         <nav class="navbar">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/stuff">Stuff</a></li>
              <li><a href="/about">About</a></li>
            </ul>
         </nav>
        </header>
    )
}
export default Header;