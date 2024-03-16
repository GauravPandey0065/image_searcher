var arr = [
    { name: "robot", image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "what", image: "https://images.unsplash.com/photo-1701025812558-ca9ca4e24d71?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "not", image: "https://media.istockphoto.com/id/1359585151/photo/cute-blue-robot-giving-thumbs-up-3d.jpg?s=2048x2048&w=is&k=20&c=vmpZVdSM2YuTIfxw0MLxPWH4J5jVQP7Nd4W-8qFf4CM=" },
    { name: "roo", image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "rommo", image: "https://media.istockphoto.com/id/462280187/photo/robot-toy.jpg?s=2048x2048&w=is&k=20&c=DdF91NPSLURlMr-DHcWNANHqRm_pe34AfrPgMjFL_c0=" },
    { name: "fommo", image: "https://images.unsplash.com/photo-1596545872035-1b592e37f28c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "lommo", image: "https://images.unsplash.com/photo-1709439377248-d03a69358c75?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "mommo", image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "oommo", image: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "qommo", image: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "eommo", image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "tommo", image: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "sommo", image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "sommo", image: "https://images.unsplash.com/photo-1627734819947-ba884aea9801?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "sommo", image: "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" },
    //{ name: "sommo", image: "" }
]


function ShowTheImages() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="box"
               src="${obj.image}"
               alt=""> 
   </div>`;
    })
    document.querySelector(".container").innerHTML = clutter;

}

ShowTheImages();


function Handle_Search() {
    var search_input = document.querySelector("#searcher");

    search_input.addEventListener("input", function () {
        const filter_value = arr.filter(obj => obj.name.toLocaleLowerCase().startsWith(search_input.value));
        console.log(filter_value);
    })

}

Handle_Search();


