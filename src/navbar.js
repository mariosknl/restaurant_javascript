const navbar = `  
<div class="container mt-3 shadow-lg content mb-5">
  <nav class="navbar navbar-expand-lg navbar-light">
    
    <div class="dropdownBackground">
      <span class="arrow"></span>
    </div>
    
      <ul class="navbar-nav">
        <li class="nav-item" id="homeBtn">
          <a href="#" class="navbar-brand font-weight-bold nav-link" id="homeButton">
            Greek Restaurant
          </a>
            <ul class="dropdown history">
              <li>History</li>
              <li>This is our Chef</li>
              <li>Summer 2020</li>
            </ul>
        </li>

        <li class="nav-item" id="bookTable">
          <a href="#" class="nav-link text-dark font-weight-bold" id="bookButton">BOOK TABLE</a>
            <ul class="dropdown table">
              <li>Let us organize your event</li>
              <li>Special Occasions</li>
              <li>Birthday Events</li>
            </ul>
        </li>

        <li class="nav-item" id="menuPage">
          <a href="#" class="nav-link text-dark font-weight-bold" id="menuButton">MENU</a>
            <ul class="dropdown menu">
              <li>Starters</li>
              <li>Dips</li>
              <li>Salads</li>
              <li>Souvlaki</li>
              <li>Greek Specialites</li>
              <li>Side Orders</li>
            </ul>
        </li>
      </ul>
  </nav>
</div>`;

export default { navbar };