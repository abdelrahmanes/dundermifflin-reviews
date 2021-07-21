const reviews = [
    {
        id: 1,
        name: "Jim Halpert",
        job: "Salesman",
        img: "./images/jim.jpg",
        review: 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quidem animi tempore. Ratione nostrum in autem, hic harum cumque earum voluptatem vel voluptatum! . Unde possimus porro veritatis molestias beatae? Dignissimos, quidem dolorem."
    },
    {
        
        id: 2,
        name: "Michael Scott",
        job: "Regional Manager",
        img: "./images/michael.jpg",
        review: 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quidem animi tempore. Ratione nostrum in autem, hic harum cumque earum voluptatem vel voluptatum! Aut architecto  possimus suscipit. Unde possimus porro veritatis molestias beatae? Dignissimos, quidem dolorem."
        
    },
    {
        
        id: 3,
        name: "Kevin Malone",
        job: "Accountant",
        img: "./images/kevin.png",
        review: 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quidem animi laboriosam ipsam neque possimus suscipit. Unde possimus porro veritatis molestias beatae? Dignissimos, quidem dolorem."
        
    },
    {
        
        id: 4,
        name: "Dwight Schrute",
        job: "Salesman",
        img: "./images/dwight.jpg",
        review: 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quidem animi tempore.  Aut architecto placeat velit eligendi, officiis quas cum ab aliquid dolorum fuga, laboriosam ipsam neque possimus suscipit. Unde possimus porro veritatis molestias beatae? Dignissimos, quidem dolorem."
        
    },
    {
        
        id: 5,
        name: "Pam Beesly",
        job: "Reciptionist",
        img: "./images/pam.jpg",
        review: 
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quidem animi tempore. Ratione nostrum in autem, hic harum cumque earum voluptatem vel voluptatum! Aut architecto placeat velit eligendi"
        
    },
]

let img = document.getElementById('reviewer-img'),
    name =  document.getElementById('reviewer-name'),
    job =  document.getElementById('reviewer-title'),
    review =  document.getElementById('reviewer-review');

let next = document.querySelector('.next-btn'),
    prev = document.querySelector('.prev-btn'),
    random = document.querySelector('.random-review');

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', function(e){
    showReviewer(currentIndex);
})

function showReviewer(reviewer){
    let item = reviews[reviewer];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
}

next.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex > reviews.length - 1){
        currentIndex = 0;
        showReviewer(currentIndex);
    }else {
        showReviewer(currentIndex);
    }
})

prev.addEventListener('click', function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviews.length-1
        showReviewer(currentIndex);
    }else {
        showReviewer(currentIndex);
    }
})

random.addEventListener('click', function(){
    currentIndex = Math.floor(Math.random()* reviews.length);
    showReviewer(currentIndex)
})
