const dishes = [
  {name:"Margherita Pizza",category:"Pizza",price:299,description:"Classic pizza with fresh tomatoes, mozzarella and basil.",image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85"},
  {name:"Chicken Biryani",category:"Indian",price:349,description:"Aromatic basmati rice with tender chicken and spices.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=85"},
  {name:"Pasta Alfredo",category:"Pasta",price:299,description:"Creamy pasta with parmesan cheese and herbs.",image:"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=85"},
  {name:"Classic Burger",category:"Burgers",price:249,description:"Juicy grilled patty with fresh lettuce, tomato and cheese.",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"},
  {name:"Paneer Tikka",category:"Indian",price:279,description:"Smoky paneer with peppers, spices and mint chutney.",image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"},
  {name:"Garden Pizza",category:"Pizza",price:329,description:"A colorful mix of garden vegetables and melted cheese.",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85"},
  {name:"Iced Coffee",category:"Drinks",price:149,description:"Smooth cold coffee poured over ice.",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85"},
  {name:"Chocolate Shake",category:"Drinks",price:179,description:"Rich chocolate blended into a creamy shake.",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85"}
];
const reviews = [
  {quote:"The food was incredible, the atmosphere was warm, and the staff made us feel right at home.",name:"— Priya S."},
  {quote:"Every dish was fresh and full of flavor. The perfect spot for a relaxed dinner with friends.",name:"— Arjun R."},
  {quote:"Lovely ambience, generous portions, and a menu with something for everyone. We’ll be back!",name:"— Meera K."}
];
const menuGrid = document.querySelector("#menu-grid");
const toastNode = document.querySelector("#toast");
let toastTimer;
function showToast(message){toastNode.textContent=message;toastNode.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastNode.classList.remove("show"),2800)}
function renderMenu(category="All"){
  const visible=dishes.filter(dish=>category==="All"||dish.category===category);
  menuGrid.innerHTML=visible.map(dish=>`<article class="menu-card">
    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
    <div class="menu-card-body"><h3>${dish.name}</h3><p>${dish.description}</p>
    <div class="menu-card-bottom"><span class="price">₹${dish.price}</span><button class="add-btn" type="button" data-dish="${dish.name}">Add to Cart +</button></div></div>
  </article>`).join("");
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(item=>item.classList.toggle("active",item===button));
  renderMenu(button.dataset.category);
}));
menuGrid.addEventListener("click",event=>{
  const button=event.target.closest("[data-dish]");
  if(button) showToast(`${button.dataset.dish} selected! This demo doesn't process orders.`);
});
const menuToggle=document.querySelector("#menu-toggle");
const navLinks=document.querySelector("#nav-links");
menuToggle.addEventListener("click",()=>{
  const isOpen=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(isOpen));
  menuToggle.textContent=isOpen?"×":"☰";
});
navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";
}));
let reviewIndex=0;
function renderReview(){document.querySelector("#quote").textContent=reviews[reviewIndex].quote;document.querySelector("#reviewer").textContent=reviews[reviewIndex].name}
document.querySelector("#prev-quote").addEventListener("click",()=>{reviewIndex=(reviewIndex-1+reviews.length)%reviews.length;renderReview()});
document.querySelector("#next-quote").addEventListener("click",()=>{reviewIndex=(reviewIndex+1)%reviews.length;renderReview()});
const dateInput=document.querySelector("#reservation-date");
const localToday=new Date();dateInput.min=`${localToday.getFullYear()}-${String(localToday.getMonth()+1).padStart(2,"0")}-${String(localToday.getDate()).padStart(2,"0")}`;
document.querySelector("#reservation-form").addEventListener("submit",event=>{
  event.preventDefault();
  if(!event.currentTarget.reportValidity()) return;
  const formData=new FormData(event.currentTarget);
  const name=String(formData.get("name")).trim();
  document.querySelector("#reservation-message").textContent=`Thanks, ${name}! This demo has not sent your reservation to a restaurant.`;
  showToast("Reservation request previewed — no booking was sent.");
  event.currentTarget.reset();
});
document.querySelector("#year").textContent=new Date().getFullYear();
renderMenu();
