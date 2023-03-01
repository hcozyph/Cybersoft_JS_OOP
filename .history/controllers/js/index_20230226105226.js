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
////////////////////

var mangSinhVien = [];

getEle('btnThemSinhVien').onclick = function () {
    //input: sinhVien: SinhVien
    var sv = new SinhVien();
    console.log(sv)

    sv.maSinhVien = querySelector('#maSinhVien').value;
    sv.tenSinhVien = querySelector('#tenSinhVien').value;
    sv.email = querySelector('#email').value;
    sv.soDienThoai = querySelector('#soDienThoai').value;

    sv.loaiSinhVien = querySelector('#loaiSinhVien').value;
    sv.diemRenLuyen = querySelector('#diemRenLuyen').value;

    sv.diemToan = querySelector('#diemToan').value;
    sv.diemLy = querySelector('#diemLy').value;
    sv.diemHoa = querySelector('#diemHoa').value;

    //output:
    //Mỗi lần click thêm sinh viên => thêm vào mảng 1 object
    mangSinhVien.push(sv);
    console.log('mảng sinh viên', mangSinhVien)


}

/////////---------CÁCH 2 : LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG----------//////
function renderTableSinhVien (arrSinhVien) {
    //input là mangSinhVien = [{maSinhVien:1,tenSinhViwn:'A'},{maSinhVien:2,tenSinhViwn:'B'},]
    var htmlString = '';

    for ( var index = 0; index < arrSinhVien.lenght; index++) {
        var sv = arrSinhVien[index];
        htmlString += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        `
    }

    querySelector('tbody').innerHTML = htmlString;
    return htmlString; ///'<tr>....</tr>'
}
/////////--END-------CÁCH 2 : LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG----------//////




    /* 
        /////////---------CÁCH 2 : LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG----------/////
    var htmlString = `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.soDienThoai}</td>
            <td>${sv.loaiSinhVien}</td>
            <td>
                <button class="btn btn-danger">Xóa</button>
            </td>
        </tr>
    `;

    querySelector('tbody').innerHTML += htmlString;
    */



    /////////---------CÁCH 1 : LẬP TRÌNH HƯỚNG GIAO DIỆN----------/////
    // //--Step 1: tạo thẻ tr
    // var tr = document.createElement('tr');

    // //--Step 2: tạo ra các thẻ td từ sv (thông tin sinh viên) 
    // var tdMaSv = document.createElement('td');
    // tdMaSv.innerHTML = sv.maSinhVien;
    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;


    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;
    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;
    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;


    // var tdDiemToan = document.createElement('td');
    // tdDiemToan.innerHTML = sv.diemToan;
    // var tdDiemLy = document.createElement('td');
    // tdDiemLy.innerHTML = sv.diemLy;
    // var tdDiemHoa = document.createElement('td');
    // tdDiemHoa.innerHTML = sv.diemHoa;

    // /////------btnXoa
    // var btnXoa = document.createElement('button');
    // btnXoa.className = 'btn btn-danger';
    // btnXoa.innerHTML = 'Xóa';
    // btnXoa.onclick = function () {
    //     //Xóa đi thẻ tr chứa nút này
    //     //parentElement: node(thẻ) cha của thẻ đó

    //     //----remove(): xóa thẻ
    //     // btnXoa.parentElement.parentElement.remove();----

    //     //closest(selector): truy xuất đến selector gần nhất
    //     btnXoa.closest('tr').remove();
    // }

    // var tdChucNang = document.createElement('td');
    // tdChucNang.appendChild(btnXoa);
    // /////End------btnXoa


    // //----ĐƯA CÁC THẺ TD VÀO TR
    // tr.appendChild(tdMaSv);
    // tr.appendChild(tdTenSinhVien);
    // tr.appendChild(tdEmail);

    // tr.appendChild(tdSoDienThoai);
    // tr.appendChild(tdLoaiSinhVien);
    // // tr.appendChild(tdDiemRenLuyen);

    // // tr.appendChild(tdDiemToan);
    // // tr.appendChild(tdDiemLy);
    // // tr.appendChild(tdDiemHoa);

    // tr.appendChild(tdChucNang);

    // //Đưa thẻ tr lên giao diện
    // querySelector('tbody').appendChild(tr);