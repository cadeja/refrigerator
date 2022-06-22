refrigeratorItems = [
    {name: "orange", bestby: "5/5/2055"},
    {name: "pork", bestby: "2/2/2022"}
];

const content = document.getElementById("content");

for (let i = 0; i < refrigeratorItems.length; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.innerHTML = `<div class="name">${refrigeratorItems[i].name}</div>`;
    div.innerHTML += `<div class="best-by">${refrigeratorItems[i].bestby}</div>`
    content.appendChild(div);

}