/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
        x.classList.toggle("responsive"); 
    
}


// AREA-FILTER
function areaFilter(clickedArea) {
        
    let area;
    if(clickedArea.includes('alle')) {
        area = "";
    } else {
        area = clickedArea;
    }

var allAreas = document.querySelectorAll(".kalender");
allAreas.forEach(function(a) {
        let aClass = a.className;
        a.style.display = "none"
        if(aClass.includes(area) ){
            a.style.display = ""
        }
    });
}

async function getFooterData(){
    let res = await fetch('http://orangeduck.dk/Naiha/wp-json/wp/v2/footer_section')
    footerData = await res.json();

    footerData.map( f => {
        document.querySelector(".kontakt-tlf").innerHTML = (f.telefon);
        document.querySelector(".kontakt-mail").innerHTML = (f.mail);
    })
} 

getFooterData();


async function getMenuLinks() {
    let res = await fetch('http://orangeduck.dk/Naiha/wp-json/wp/v2/menu');
    menuItem = await res.json();

    let menuLinks = document.querySelector(".menu-links");
    let footerLinks = document.querySelector(".footer-links")

    // Set Header Links
    menuItem.map( m => { 

        var li = document.createElement("LI");
        var a = document.createElement("a");
        a.href = m.url;
        a.innerText = m.title;
        li.appendChild(a);
        
      
        document.querySelector(".menu-links").appendChild(a);
        menuLinks.appendChild(a);

    })

    // Set Footer Links
    menuItem.map( m => { 
        var li = document.createElement("LI");
        var a = document.createElement("a");

        a.href = m.url;
        a.innerText = m.title;

        li.appendChild(a);
        footerLinks.appendChild(li);
        })
}

getMenuLinks();