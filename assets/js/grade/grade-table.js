/* ============ Global variable =============*/
var KVUT = 0;
var DTUT = 0;


/* ============ fn =============== */
function Tinh_Diem_Mon(l10, l11, hk1l12) {
    var tong = (parseFloat(l10) + parseFloat(l11) + parseFloat(hk1l12)) / 3;
    return tong;
};

function Tinh_Diem_TH(m1, m2, m3) {
    var tong = parseFloat(m1) + parseFloat(m2) + parseFloat(m3);
    return tong;
}

function Tinh_Diem_TH_HS2(m1x2, m2, m3) {
    var tong = (parseFloat(m1x2) * 2 + parseFloat(m2) + parseFloat(m3)) * 3 / 4;
    return tong;
}

function Tinh_TBC(m1, m2, m3) {
    var TBC = (parseFloat(m1) + parseFloat(m2) + parseFloat(m3)) / 3;
    return TBC;
}

function Tinh_Diem() {
    var kv = $("#kvut").val();
    var dt = $("#dtut").val();

    //diem lop 10 
    var t_10 = $("#t10").val();
    var v_10 = $("#v10").val();
    var nn_10 = $("#nn10").val();
    var vl_10 = $("#vl10").val();
    var s_10 = $("#s10").val();
    var h_10 = $("#h10").val();
    var ls_10 = $("#ls10").val();
    var d_10 = $("#d10").val();
    var cd_10 = $("#cd10").val();

    // diem lop 11 
    var t_11 = $("#t11").val();
    var v_11 = $("#v11").val();
    var nn_11 = $("#nn11").val();
    var vl_11 = $("#vl11").val();
    var s_11 = $("#s11").val();
    var h_11 = $("#h11").val();
    var ls_11 = $("#ls11").val();
    var d_11 = $("#d11").val();
    var cd_11 = $("#cd11").val();

    // diem hk1 lop 12 
    var t_12 = $("#t12").val();
    var v_12 = $("#v12").val();
    var nn_12 = $("#nn12").val();
    var vl_12 = $("#vl12").val();
    var s_12 = $("#s12").val();
    var h_12 = $("#h12").val();
    var ls_12 = $("#ls12").val();
    var d_12 = $("#d12").val();
    var cd_12 = $("#cd12").val();

    // diem trung binh mon
    var t = Tinh_Diem_Mon(t_10, t_11, t_12);
    var v = Tinh_Diem_Mon(v_10, v_11, v_12);
    var nn = Tinh_Diem_Mon(nn_10, nn_11, nn_12);
    var vl = Tinh_Diem_Mon(vl_10, vl_11, vl_12);
    var s = Tinh_Diem_Mon(s_10, s_11, s_12);
    var h = Tinh_Diem_Mon(h_10, h_11, h_12);
    var ls = Tinh_Diem_Mon(ls_10, ls_11, ls_12);
    var d = Tinh_Diem_Mon(d_10, d_11, d_12);
    var cd = Tinh_Diem_Mon(cd_10, cd_11, cd_12);

    // diem khu vuc uu tien
    if (kv == "0" || kv == "3") {
        KVUT = 0;
    } else if (kv == "1") {
        KVUT = 0.75;
    } else if (kv == "2") {
        KVUT = 0.25;
    } else KVUT = 0.5;

    // diem doi tuong uu tien
    if (dt == "1" || dt == "2" || dt == "3" || dt == "4") {
        DTUT = 2;
    } else if (dt == "5" || dt == "6" || dt == "7") {
        DTUT = 1;
    } else DTUT = 0;

    /*
    Toán, Lý, Hóa (A00)
    Toán, Lý, Anh (A01)
    Toán, Lý, Sinh (A02)
    Toán, Hóa, Sinh (B00)
    Văn, Sử, Địa (C00)
    Toán, Sử, Văn (C03)
    Toán, Văn, Anh (D01)
    Toán, Hóa, Anh (D07)
    Toán, Sinh, Anh (D08)
    Văn, Sử, Anh (D14)
    Văn, KHXH, Anh (D78)
    Toán, KHXH, Anh (D96)
    Văn, Toán, Ngoại Ngữ (D01 - D06, DD2)
    Văn, KHXH, Ngoại Ngữ (D78 - D83, DH8)
    Toán, Văn, Ngoại Ngữ (D01, D03, D05, D06)
    */
    // diem to hop
    var a00 = Tinh_Diem_TH(t, vl, h) + KVUT + DTUT;
    var a00hs2t = Tinh_Diem_TH_HS2(t, vl, h) + KVUT + DTUT;
    var a01 = Tinh_Diem_TH(t, vl, nn) + KVUT + DTUT;
    var a01hs2nn = Tinh_Diem_TH_HS2(nn, vl, t) + KVUT + DTUT;
    var a01hs2t = Tinh_Diem_TH_HS2(t, vl, nn) + KVUT + DTUT;
    var a02 = Tinh_Diem_TH(t, vl, s) + KVUT + DTUT;
    var b00 = Tinh_Diem_TH(t, h, s) + KVUT + DTUT;
    var c00 = Tinh_Diem_TH(v, ls, d) + KVUT + DTUT;
    var c03 = Tinh_Diem_TH(t, ls, v) + KVUT + DTUT;
    var d01 = Tinh_Diem_TH(t, v, nn) + KVUT + DTUT;
    var d01hs2nn = Tinh_Diem_TH_HS2(nn, v, t) + KVUT + DTUT;
    var d01hs2t = Tinh_Diem_TH_HS2(t, v, nn) + KVUT + DTUT;
    var d07 = Tinh_Diem_TH(t, h, nn) + KVUT + DTUT;
    var d07hs2t = Tinh_Diem_TH_HS2(t, h, nn) + KVUT + DTUT;
    var d07hs2nn = Tinh_Diem_TH_HS2(nn, h, t) + KVUT + DTUT;
    var d08 = Tinh_Diem_TH(t, s, nn) + KVUT + DTUT;
    var d14 = Tinh_Diem_TH(v, nn, ls) + KVUT + DTUT;
    var d14hs2nn = Tinh_Diem_TH_HS2(nn, v, ls) + KVUT + DTUT;
    var d78 = Tinh_Diem_TH(v, nn, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
    var d78hs2nn = Tinh_Diem_TH_HS2(nn, v, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
    var d96 = Tinh_Diem_TH(t, nn, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;
    var d96hs2nn = Tinh_Diem_TH_HS2(nn, v, Tinh_TBC(ls, d, cd)) + KVUT + DTUT;

    // show result
    $("#kq-t").val(t.toFixed(2));
    $("#kq-v").val(v.toFixed(2));
    $("#kq-nn").val(nn.toFixed(2));
    $("#kq-vl").val(vl.toFixed(2));
    $("#kq-s").val(s.toFixed(2));
    $("#kq-h").val(h.toFixed(2));
    $("#kq-ls").val(ls.toFixed(2));
    $("#kq-d").val(d.toFixed(2));
    $("#kq-cd").val(cd.toFixed(2));

    // data table
    dxt = [
        // Đại trà - Ngôn ngữ anh
        [
            'Đại trà',
            '7220201',
            'Ngôn ngữ Anh',
            `${a01hs2nn.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220201',
            'Ngôn ngữ Anh',
            `${d01hs2nn.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220201',
            'Ngôn ngữ Anh',
            `${d14hs2nn.toFixed(2)}`,
            'Văn, Sử, Anh (D14)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220201',
            'Ngôn ngữ Anh',
            `${d78hs2nn.toFixed(2)}`,
            'Văn, KHXH, Anh (D78)',
            'Môn Ngoại ngữ hệ số 2'
        ],

        // Đại trà - Ngôn ngữ trung quốc
        [
            'Đại trà',
            '7220204',
            'Ngôn ngữ Trung Quốc',
            `${d01hs2nn.toFixed(2)}`,
            'Văn, Toán, Ngoại Ngữ (D01-D06, DD2)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220204',
            'Ngôn ngữ Trung Quốc',
            `${d78hs2nn.toFixed(2)}`,
            'Văn, KHXH, Ngoại Ngữ (D78-D83, DH8)',
            'Môn Ngoại ngữ hệ số 2'
        ],

        // Đại trà - Ngôn ngữ Nhật
        [
            'Đại trà',
            '7220209',
            'Ngôn ngữ Nhật',
            `${d01hs2nn.toFixed(2)}`,
            'Văn, Toán, Ngoại Ngữ (D01-D06, DD2)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220209',
            'Ngôn ngữ Nhật',
            `${d78hs2nn.toFixed(2)}`,
            'Văn, KHXH, Ngoại Ngữ (D78-D83, DH8)',
            'Môn Ngoại ngữ hệ số 2'
        ],

        // Đại trà - Ngôn ngữ Hàn Quốc
        [
            'Đại trà',
            '7220210',
            'Ngôn ngữ Hàn Quốc',
            `${d01hs2nn.toFixed(2)}`,
            'Văn, Toán, Ngoại Ngữ (D01-D06, DD2)',
            'Môn Ngoại ngữ hệ số 2'
        ],
        [
            'Đại trà',
            '7220210',
            'Ngôn ngữ Hàn Quốc',
            `${d78hs2nn.toFixed(2)}`,
            'Văn, KHXH, Ngoại Ngữ (D78-D83, DH8)',
            'Môn Ngoại ngữ hệ số 2'
        ],

        // Đại trà - Kinh Tế
        [
            'Đại trà',
            '7310101',
            'Kinh Tế',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310101',
            'Kinh Tế',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310101',
            'Kinh Tế',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310101',
            'Kinh Tế',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Xã Hội Học
        [
            'Đại trà',
            '7310301',
            'Xã Hội Học',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310301',
            'Xã Hội Học',
            `${c00.toFixed(2)}`,
            'Văn, Sử, Địa (C00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310301',
            'Xã Hội Học',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Ngoại Ngữ (D01-D06, DD2)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310301',
            'Xã Hội Học',
            `${d78.toFixed(2)}`,
            'Văn, KHXH, Ngoại Ngữ (D78-D83, DH8)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Đông Nam Á học
        [
            'Đại trà',
            '7310620',
            'Đông Nam Á học',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310620',
            'Đông Nam Á học',
            `${c00.toFixed(2)}`,
            'Văn, Sử, Địa (C00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310620',
            'Đông Nam Á học',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Ngoại Ngữ (D01-D06, DD2)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7310620',
            'Đông Nam Á học',
            `${d78.toFixed(2)}`,
            'Văn, KHXH, Ngoại Ngữ (D78-D83, DH8)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Quản Trị Kinh Doanh
        [
            'Đại trà',
            '7340101',
            'Quản Trị Kinh Doanh',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340101',
            'Quản Trị Kinh Doanh',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340101',
            'Quản Trị Kinh Doanh',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340101',
            'Quản Trị Kinh Doanh',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Marketing
        [
            'Đại trà',
            '7340115',
            'Marketing',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340115',
            'Marketing',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340115',
            'Marketing',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340115',
            'Marketing',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Kinh Doanh Quốc Tế
        [
            'Đại trà',
            '7340120',
            'Kinh Doanh Quốc Tế',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340120',
            'Kinh Doanh Quốc Tế',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340120',
            'Kinh Doanh Quốc Tế',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340120',
            'Kinh Doanh Quốc Tế',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Tài chính Ngân hàng
        [
            'Đại trà',
            '7340201',
            'Tài chính Ngân hàng',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340201',
            'Tài chính Ngân hàng',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340201',
            'Tài chính Ngân hàng',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340201',
            'Tài chính Ngân hàng',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Kế toán
        [
            'Đại trà',
            '7340301',
            'Kế toán',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340301',
            'Kế toán',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340301',
            'Kế toán',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340301',
            'Kế toán',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Kiểm toán
        [
            'Đại trà',
            '7340302',
            'Kiểm toán',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340302',
            'Kiểm toán',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340302',
            'Kiểm toán',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340302',
            'Kiểm toán',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Quản lý công (Ngành mới)
        [
            'Đại trà',
            '7340403',
            'Quản lý công (Ngành mới)',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340403',
            'Quản lý công (Ngành mới)',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340403',
            'Quản lý công (Ngành mới)',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340403',
            'Quản lý công (Ngành mới)',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Quản Trị Nhân Lực
        [
            'Đại trà',
            '7340404',
            'Quản Trị Nhân Lực',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340404',
            'Quản Trị Nhân Lực',
            `${c03.toFixed(2)}`,
            'Toán, Sử, Văn (C03)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340404',
            'Quản Trị Nhân Lực',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340404',
            'Quản Trị Nhân Lực',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],

        // Đại trà - Hệ Thống Thông Tin Quản Lý
        [
            'Đại trà',
            '7340405',
            'Hệ Thống Thông Tin Quản Lý',
            `${a00.toFixed(2)}`,
            'Toán, Lý, Hóa (A00)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340405',
            'Hệ Thống Thông Tin Quản Lý',
            `${a01.toFixed(2)}`,
            'Toán, Lý, Anh (A01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340405',
            'Hệ Thống Thông Tin Quản Lý',
            `${d01.toFixed(2)}`,
            'Toán, Văn, Anh (D01)',
            'Không có môn hệ số 2'
        ],
        [
            'Đại trà',
            '7340405',
            'Hệ Thống Thông Tin Quản Lý',
            `${d07.toFixed(2)}`,
            'Toán, Hóa, Anh (D07)',
            'Không có môn hệ số 2'
        ],
    ]

    $('#grade-table').DataTable({
        destroy: true,
        data: dxt,
        "lengthMenu": [
            [5, 10, 15, 20, 25, -1],
            [5, 10, 15, 20, 25, "Tất cả"]
        ],
        "oLanguage": {
            "sSearch": "Tìm kiếm",
            "sLengthMenu": "Hiển thị _MENU_ dòng",
            "sInfo": "Đang hiện thị dòng _START_ đến _END_ trong _TOTAL_ dòng",
            "sInfoFiltered": " - lọc từ _MAX_ dòng",
            "sInfoEmpty": "Không tìm thấy dữ liệu",
            "oPaginate": {
                "sPrevious": "<<",
                "sNext": ">>"
            }
        },
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search..."
        }
    });
}
$(document).ready(function () {
    $('#my-grade input').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') !=
                -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $("#check").click(function () {
        Tinh_Diem()
    });
});