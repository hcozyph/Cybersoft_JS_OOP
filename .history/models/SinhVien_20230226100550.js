///--Đặt tên file -- Chữ cái đầu tiên VIẾT HOA

//---Định nghĩa prototype SinhVien

function SinhVien() {
    //input: sv: SinhVien
    this.maSinhVien = '';
    this.email = '';
    this.soDienThoai = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.diemRenLuyen = '';

    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';

    //output:
    //STEP 1: tạo thẻ tr
    var tr = document.createElement('tr');

    //Step 2: tạo ra các thẻ td từ sv (thông tin sinh viên) 
    var tdMaSv = document.createElement('td');
    tdMaSv.innerHTML = sv.maSinhVien;

    var tdTenSinhVien = document.createElement('td');
    tdTenSinhVien.innerHTML = sv.maSinhVien;
    //Đưa các thẻ td vào tr
    tr.appendChild(tdMaSv);

    //Đưa thẻ tr lên giao diện
    querySelector('tbody').appendChild(tr);
}
