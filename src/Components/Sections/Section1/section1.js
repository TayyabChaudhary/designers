import React from 'react'
import './style.scss';
import '../../../../node_modules/bulma'
import jQuery from 'jquery'
export default function section1() {
    (function($) { // Begin jQuery
        $(function() { // DOM ready
          // If a link has a dropdown, add sub menu toggle.
          $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
          });
          // Clicking away from dropdown will remove the dropdown class
          $('html').click(function() {
            $('.nav-dropdown').hide();
          });
          // Toggle open and close nav styles on click
          $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
          });
          // Hamburger to X toggle
          $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
          });
        }); // end DOM ready
      })(jQuery); // end jQuery
    return (
        <div>
        <header>
       <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">The Designers</a>
    </div>
    <nav>
      <div class="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul class="nav-list">
       
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Services</a>
          <ul class="nav-dropdown">
            <li><a href="#!">Web Design</a></li>
            <li><a href="#!">Web Development</a></li>
            <li><a href="#!">Graphic Design</a></li>
          </ul>
        </li>
        <li><a href="#!">Pricing</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </nav>
  </div>
</section>
<section className="section">

    <div className="container">
        <div>
            <h1 className="has-text-white is-size-1 has-text-weight-bold" style={{paddingTop:"100px"}}>WE ENSURE BETTER<span className="has-text-warning"> EDUCATION</span><br/> FOR A BETTER WORLD
</h1>
<p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the<br/> space telescope known as the Hubble.
</p>
<section className="section">
<div className="container">
<button className="button btn1 has-text-white is-medium has-text-weight-bold is-size-6" style={{}}>GET STARTED</button>
</div>
</section>
        </div>
    </div>
   
</section>
</header>
        </div>
    )
}
