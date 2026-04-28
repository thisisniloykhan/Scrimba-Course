let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = inputEl.value;
  a.textContent = inputEl.value;
  a.target = "_blank";
  li.appendChild(a);
  ulEl.appendChild(li);
  inputEl.value = "";
  alert(myLeads)
});

// function renderLeads() {
//   ulEl.innerHTML = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     a.href = myLeads[i];
//     a.textContent = myLeads[i];
//     a.target = "_blank";
//     li.appendChild(a);
//     ulEl.appendChild(li);
//   }
// }

// Wrap the lead in an anchor tag (<a>) inside the <li>
// Can you make the link open in a new tab?
// listItems += `
//     <li>
//        <a href = "${myLeads[i]}" target = "_blank">  ${myLeads[i]} </a>
//     </li>
// `;
//   ulEl.innerHTML = listItems;

//     listItems +=
//       "<li> <a href = '" +
//       myLeads[i] +
//       "' target = '_blank'>" +
//       myLeads[i] +
//       "</a> </li>";

//  function renderLeads() {
//     ulEl.innerHTML = "";
