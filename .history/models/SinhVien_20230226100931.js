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
    tdTenSinhVien.innerHTML = sv.tenSinhVien;

    var tdEmail = document.createElement('td');
    tdEmail.innerHTML = sv.email;

    var tdLoaiSinhVien = document.createElement('td');
    tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

    var tdSoDienThoai = document.createElement('td');
    tdSoDienThoai.innerHTML = sv.soDienThoai;

    var tdDiemRenLuyen = document.createElement('td');
    tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

    var tdDiemToan = document.createElement('td');
    tdDiemToan.innerHTML = sv.diemToan;
    var tdDiemLy = document.createElement('td');
    tdDiemLy.innerHTML = sv.diemLy;
    var tdDiemHoa = document.createElement('td');
    tdDiemHoa.innerHTML = sv.diemHoa;
    //Đưa các thẻ td vào tr
    tr.appendChild(tdMaSv);

    //Đưa thẻ tr lên giao diện
    querySelector('tbody').appendChild(tr);
}
