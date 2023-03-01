////----MÔ HÌNH MVC
/* 
    M [model]       -- nơi chứa các file js là prototype (class)
    V [view]        -- nơi chứa các file giao diện (.html)
    C [controller]  -- các file điều hướng giao diện (index.html => index.js, qlsp.html => qlsp.js)

    ---------------------------------------------------

    util    -- chứa các file dùng chung cho dự án (ví dụ: các method sử dụng ở các dự án trước, hoặc libs [thư viện js] )
    assets  -- là folder chứa tài nguyên của hệ thống (img, audio, viddeo, css, font,...)

*/

function getEle(n) {
    return document.getElementById(n);
}

function querySelector(n) {
    return document.querySelector(n);
}

getEle('btnThemSinhVien').onclick = function () {
    //input: sinhVien: SinhVien
    var sv = new SinhVien();
    console.log(sv)

    sv.maSinhVien = 







}