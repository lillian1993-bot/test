document.getElementById("policyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const policy = document.getElementById("policy").value;
  switch(policy){
    case "sustainable":
      window.location.href = "sustainable.html";
      break;
    case "digital":
      window.location.href = "digital.html";
      break;
    case "participation":
      window.location.href = "participation.html";
      break;
    default:
      alert("請選擇一個政策建議！");
  }
});
