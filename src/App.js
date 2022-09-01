
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
function App() {
  
  return (
    <>
<nav class="navbar navbar-expand-sm">
  <div class="container">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className='container'>
<div class="row">
<div class="col-md-6 col-sm-12">

    <form class="contact-from-codematra" action="" method="get" autocomplete="off" >
      <h3 class="fheading">Contact Form</h3>              

          <label>Name <span class="required">*</span></label>
          <input type="text" name="name" placeholder="Enter your name." required="required"  />
          
          <label>Email <span class="required">*</span></label>
          <input type="email" name="email" placeholder="Enter your email." required="required" />
          
          <label>Contact Number (Optional)</label>
          <input type="text" name="contact" placeholder="Enter your contact number."  />

          <label>Message <span class="required">*</span></label>
          <textarea name="message" rows="4" placeholder="Enter your message." required="required"></textarea>
      
      <p class="submit-wr"><input type="submit" name="submit" value="Submit" /> </p>
    </form>
</div>
  <div class="col-md-6 col-sm-12">
  <img src={logo} className="App-logo" alt="logo" />

      <h1 class="title">React Bootstrap Login Form</h1>
  </div>
  </div>
</div>

      <div className="footer">
      <div className="footerCards">
        <div className="card1">
          <br />
          <p className="aboutText">
          React Bootstrap
          </p>
          <br />
        </div>
      <br />
      <hr className="hrTag" />
      <br />
      <p>Copyright © 2022 React Bootstrap</p>
    </div>
    </div>
</>
  );
}

export default App;
