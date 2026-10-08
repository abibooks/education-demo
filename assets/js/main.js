
document.addEventListener("DOMContentLoaded",()=>{
  const year=document.querySelectorAll("[data-year]");
  year.forEach(x=>x.textContent=new Date().getFullYear());

  const current=location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link=>{
    const href=link.getAttribute("href");
    if(href===current || (current==="" && href==="index.html")) link.classList.add("active");
  });

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("show");observer.unobserve(entry.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  window.addEventListener("scroll",()=>{
    document.querySelector(".navbar")?.classList.toggle("shadow",window.scrollY>30);
  });
});
