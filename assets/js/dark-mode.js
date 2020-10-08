// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-mode");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
    <path id="_001-moon" data-name="001-moon" d="M17.451.259A.966.966,0,0,0,17.2,1.3a11.881,11.881,0,0,1,.717,4.091A12.032,12.032,0,0,1,5.887,17.422,11.86,11.86,0,0,1,1.8,16.705.968.968,0,0,0,.587,18.012,13.544,13.544,0,0,0,12.724,26a13.4,13.4,0,0,0,5.386-1.027,13.681,13.681,0,0,0,7.356-7.346A13.387,13.387,0,0,0,26.5,12.445c0-.067,0-.135,0-.2A13.548,13.548,0,0,0,18.508.086.966.966,0,0,0,17.451.259Zm0,0" transform="translate(-0.501 0)" fill="#fff"/>
    </svg>`


}

// Listen for a click on the button 
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-mode");
  
  if (document.body.classList.contains("dark-mode")) {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
    <path id="_001-moon" data-name="001-moon" d="M17.451.259A.966.966,0,0,0,17.2,1.3a11.881,11.881,0,0,1,.717,4.091A12.032,12.032,0,0,1,5.887,17.422,11.86,11.86,0,0,1,1.8,16.705.968.968,0,0,0,.587,18.012,13.544,13.544,0,0,0,12.724,26a13.4,13.4,0,0,0,5.386-1.027,13.681,13.681,0,0,0,7.356-7.346A13.387,13.387,0,0,0,26.5,12.445c0-.067,0-.135,0-.2A13.548,13.548,0,0,0,18.508.086.966.966,0,0,0,17.451.259Zm0,0" transform="translate(-0.501 0)" fill="#fff"/>
    </svg>`
  } else {
    btn.innerHTML = `<svg id="_002-sun" data-name="002-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
    <g id="Groupe_82" data-name="Groupe 82">
      <g id="Groupe_81" data-name="Groupe 81">
        <path id="Tracé_216" data-name="Tracé 216" d="M86.343,77.126A6.556,6.556,0,0,0,81.734,75.2a6.414,6.414,0,0,0-4.608,1.926,6.534,6.534,0,0,0,4.608,11.143,6.414,6.414,0,0,0,4.608-1.926,6.556,6.556,0,0,0,1.926-4.608A6.414,6.414,0,0,0,86.343,77.126Z" transform="translate(-68.734 -68.734)" fill="#848484"/>
        <path id="Tracé_217" data-name="Tracé 217" d="M141.694,4.437a.91.91,0,0,0,.894-.894V.894a.894.894,0,1,0-1.788,0V3.542A.911.911,0,0,0,141.694,4.437Z" transform="translate(-128.694)" fill="#848484"/>
        <path id="Tracé_218" data-name="Tracé 218" d="M220.5,44.788l1.892-1.892a.875.875,0,0,0-1.238-1.238l-1.892,1.892a.875.875,0,1,0,1.238,1.238Z" transform="translate(-200.171 -37.84)" fill="#848484"/>
        <path id="Tracé_219" data-name="Tracé 219" d="M254.342,140.8h-2.648a.894.894,0,1,0,0,1.788h2.648a.894.894,0,0,0,0-1.788Z" transform="translate(-229.237 -128.694)" fill="#848484"/>
        <path id="Tracé_220" data-name="Tracé 220" d="M220.1,218.858a.875.875,0,1,0-1.238,1.238l1.892,1.892a.875.875,0,0,0,1.238-1.238Z" transform="translate(-199.805 -199.805)" fill="#848484"/>
        <path id="Tracé_221" data-name="Tracé 221" d="M141.694,250.8a.91.91,0,0,0-.894.894v2.648a.894.894,0,1,0,1.788,0v-2.648A.91.91,0,0,0,141.694,250.8Z" transform="translate(-128.694 -229.236)" fill="#848484"/>
        <path id="Tracé_222" data-name="Tracé 222" d="M43.149,218.858l-1.892,1.892a.875.875,0,0,0,1.238,1.238l1.892-1.892a.875.875,0,1,0-1.238-1.238Z" transform="translate(-37.475 -199.805)" fill="#848484"/>
        <path id="Tracé_223" data-name="Tracé 223" d="M4.437,141.694a.911.911,0,0,0-.894-.894H.894a.894.894,0,1,0,0,1.788H3.542A.91.91,0,0,0,4.437,141.694Z" transform="translate(0 -128.694)" fill="#848484"/>
        <path id="Tracé_224" data-name="Tracé 224" d="M43.149,44.788a.875.875,0,1,0,1.238-1.238L42.5,41.658A.875.875,0,0,0,41.258,42.9Z" transform="translate(-37.475 -37.84)" fill="#848484"/>
      </g>
    </g>
  </svg>`
  }
  
  
  
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-mode")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});