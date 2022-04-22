const fromDate = document.getElementById("fromDate");
const toDate = document.getElementById("toDate");
const displayFromDate = document.getElementById("displayFromDate");
const displayToDate = document.getElementById("displayToDate");

// format date
var options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};
var today = new Date();
displayFromDate.innerText = today.toLocaleDateString("en-US", options);
displayToDate.innerText = today.toLocaleDateString("en-US", options);

functionFromDate = (val) => {
  displayFromDate.innerText = new Date(val).toLocaleDateString(
    "en-US",
    options
  );
};

functionToDate = (val) => {
  displayToDate.innerText = new Date(val).toLocaleDateString("en-US", options);
};