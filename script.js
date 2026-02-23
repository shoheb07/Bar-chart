const data = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 100 },
    { month: "May", value: 60 }
];

const chart = document.getElementById("chart");

data.forEach(item => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = item.value * 2 + "px";
    bar.innerHTML = item.value + "<span>" + item.month + "</span>";
    chart.appendChild(bar);
});
