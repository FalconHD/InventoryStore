
var id = window.localStorage.getItem('id') ? window.localStorage.getItem('id') : null
function ofTheFirstLoad() {
    if (id && window.innerWidth > 500) {
        location.replace(`inventoryweb.netlify.app?id=${id}`);
    } else if (window.innerWidth > 500) {
        location.replace(`inventoryweb.netlify.app`);
    }
}

ofTheFirstLoad()

window.onresize = () => {
    var path = window.location.pathname;

    if (window.innerWidth > 500) {
        id ? location.replace(`inventoryweb.netlify.app${path}?id=${id}`) : location.replace(`inventoryweb.netlify.app${path}`);
    }
}



const auth = window.localStorage.getItem('id')

if (!auth && window.innerWidth < 500) {
    console.log(auth);
    window.location.pathname == "/login.html" ? null : window.location.pathname = "/login.html"


} else if (window.location.pathname == "/login.html") {
    location.replace(`inventorymobile.netlify.app/`);
}


let params = new URLSearchParams(document.location.search.substring(1));
let theTranferedId = params.get("id");
if (theTranferedId) {
    if (window.localStorage.getItem('id') == theTranferedId) {
        console.log('same');
        location.replace(window.location.href.split('?')[0]);
    } else {
        window.localStorage.setItem('id', theTranferedId)
        location.replace(window.location.href.split('?')[0]);
    }
}