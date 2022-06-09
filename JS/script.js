/* ---------------------------- Cart Pop-out CSS ---------------------------- */

document.getElementById('cart').style.display = 'none';

function openCart(){
    document.getElementById('cart').style.display = 'block';
}

function closeCart(){
    document.getElementById('cart').style.display = 'none';
}

/* ----------------------------- Product Page CSS ----------------------------- */

document.getElementById('filters').style.display = 'none';

function openFilters(){
    document.getElementById('filters').style.display = 'block';
}

function closeFilters(){
    document.getElementById('filters').style.display = 'none';
}

document.getElementById('sortby').style.display = 'none';

function openSort(){
    document.getElementById('sortby').style.display = 'block';
}

function closeSort(){
    document.getElementById('sortby').style.display = 'none';
}
