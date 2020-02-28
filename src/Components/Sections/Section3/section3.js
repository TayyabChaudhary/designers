import React from 'react'
import './style.scss';
import $ from 'jquery';
import target from 'jquery'
export default function section3() {
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
        var $this = $(this),
            label = $this.prev('label');
      
            if (e.type === 'keyup') {
                  if ($this.val() === '') {
                label.removeClass('active highlight');
              } else {
                label.addClass('active highlight');
              }
          } else if (e.type === 'blur') {
              if( $this.val() === '' ) {
                  label.removeClass('active highlight'); 
                  } else {
                  label.removeClass('highlight');   
                  }   
          } else if (e.type === 'focus') {
            
            if( $this.val() === '' ) {
                  label.removeClass('highlight'); 
                  } 
            else if( $this.val() !== '' ) {
                  label.addClass('highlight');
                  }
          }
      
      });
      
      $('.tab a').on('click', function (e) {
        
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
      
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
      });
    return (
        <div>
        
                <div className="bg6">
                <section className="section">
                    <div className="container">
                        <div className="columns">
                        <div className="column">
                            <h3 className="is-size-1 has-text-white has-text-weight-bold">
Get reduced fee
during this Summer!</h3>
<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.</p>
                    <section className="section">
                       <div className="container">
            <div className="columns">
            <div className="column">
<i class="fa fa-id-card-o is-size-1 has-text-success" aria-hidden="true"></i>
<h4 className="is-size-5 has-text-white has-text-weight-bold">Expert Instructors</h4>
<p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
            </div>
      
            </div>
                       </div>
</section>
                        </div>
                        <div className="column">
                        <div class="form">
      
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <h1 className="has-text-centered">Sign Up for Free</h1>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
              <input type="text" required autocomplete="off" placeholder=" First Name *" />
            </div>
        
            <div class="field-wrap">
              <input type="text"required autocomplete="off" placeholder="Last Name *"/>
            </div>
          </div>

          <div class="field-wrap">
            <input type="email"required autocomplete="off" placeholder="Email Address*"/>
          </div>
          
          <div class="field-wrap">
            <input type="password"required autocomplete="off" placeholder="Set A Password *"/>
          </div>
          
          <button type="submit" class="button button-block">Get Started</button>
          
          </form>

        </div>
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          
          <button class="button button-block">Log In</button>
          
          </form>

        </div>
        
      </div>
      
</div> 
                        </div>
                        </div>
                    </div>
                </section>
                </div>
            
        </div>
    )
}
