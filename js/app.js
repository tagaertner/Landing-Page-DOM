let navEl = document.querySelector("nav");

console.log(navEl)
// nav > ul > li*3 > a
let ulEl = document.createElement("ul");


navEl.append(ulEl);


Array.from({length:4}).forEach((_,i)=>{
  let liEL = document.createElement("li");
  let aEL = document.createElement("a");
  ulEl.append(liEL);
  liEL.appendChild(aEL);
  aEL.innerHTML = `Nav content ${++i}`;
  aEL.href = `#content ${i}`
  // addEventListener('click')
})