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
    hienThiThongTinSV(sv);

}

function hienThiThongTinSV(sinhVien) {
    var tr = document.createElement('tr');

    var tdMaSv = document.createElement('td');
    tdMaSv.innerHTML = sinhVien.maSinhVien;




}
