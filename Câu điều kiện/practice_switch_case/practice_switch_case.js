let browser = prompt("Enter browser name!");
switch (browser) {
    case "Edge":
        alert("You've got the Edge");
        break;
    case "Chrome":
    case "Firebox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browsers too");
        break;
    default:
        alert('We hope that this page looks ok!');
}
