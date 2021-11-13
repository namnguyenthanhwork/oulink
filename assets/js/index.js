/* =============== post group =============== */
let post = [{
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-1.jpg',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://www.facebook.com/groups/oumembers/posts/1362914554125149/',
        time_delay: '0.2s',
        time: '10/11/2021',
        title: 'Thông báo sửa hệ thống đăng ký ngoại trú'
    },
    {
        author: 'Bích Trâm',
        image: 'assets/images/postGr/post-2.jpg',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://www.facebook.com/groups/oumembers/posts/1358249727924965/',
        time_delay: '0.5s',
        time: '03/11/2021',
        title: 'CÁC LƯU Ý KHI ĐĂNG KÝ DỊCH VỤ SINH VIÊN TRỰC TUYẾN TRÊN HỆ THỐNG SIS'
    },
    {
        author: 'Diệp Huy',
        image: 'assets/images/postGr/post-6.jpg',
        image_hot: 'assets/images/postGr/new.gif',
        link: 'https://www.facebook.com/groups/oumembers/posts/1351872075229397/',
        time_delay: '0.8s',
        time: '24/10/2021',
        title: 'VẤN ĐỀ ĐƠN ONLINE VÀ VĂN HOÁ GỬI MAIL'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-3.jpg',
        image_hot: '',
        link: 'https://www.facebook.com/groups/oumembers/posts/1347522502331021/',
        time_delay: '0.8s',
        time: '18/10/2021',
        title: 'Hướng dẫn sửa lỗi font slide của giảng viên'
    },
    {
        author: 'Thuong Dong',
        image: 'assets/images/postGr/post-4.jpg',
        image_hot: '',
        link: 'https://www.facebook.com/groups/oumembers/posts/1345719595844645/',
        time_delay: '0.2s',
        time: '15/10/2021',
        title: 'Thông báo về việc mua tài liệu học tập'
    },
    {
        author: 'Minh Long',
        image: 'assets/images/postGr/post-5.jpg',
        image_hot: '',
        link: 'https://www.facebook.com/groups/oumembers/posts/1345650342518237/',
        time_delay: '0.5s',
        time: '15/10/2021',
        title: 'TRUNG TÂM HƯỚNG NGHIỆP - TƯ VẤN VIỆC LÀM TRƯỜNG ĐH MỞ TP.HCM'
    }
]

let post_list = document.querySelector('#group-post')
renderPost = (post) => {
    post.forEach(function (e, i) {
        switch (i) {
            case 0:
            case 3: {
                e.time_delay = "0.2s"
                break
            }
            case 1:
            case 4: {
                e.time_delay = "0.5s"
                break
            }
            case 2:
            case 5: {
                e.time_delay = "0.8s"
                break
            }
        }
        let prod =
            `
            <div class="df col-lg-4 col-md-6 col-sm-9">
                <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="${e.time_delay}">
                    <div class="blog-image">
                        <img src="${e.image}" alt="blog">       
            `

        if (!e.image_hot == '')
            prod += `<img src="${e.image_hot}" alt="new">`

        prod +=
            ` </div>
                <div class="blog-content">
                    <ul class="meta">
                        <li><b>Đăng bởi:</b> <a href="#">${e.author}</a></li>
                        <li>${e.time}</li>
                    </ul>
                    <p class="text">${e.title}</p>
                    <a class="more" href="${e.link}"
                        target="_blank">Xem
                        chi tiết<i class="lni-chevron-right"></i></a>
                </div>
            </div> <!-- single blog -->
        </div>
        `
        post_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPost(post);

/* =============== system =============== */
let system = [{
        image: 'assets/images/postGr/post-9.jpg',
        link: 'http://dkmh.ou.edu.vn/',
        title: 'Hệ thống đăng ký môn học trực tuyến',
        content: 'là hệ thống dùng để đăng ký môn học trực tuyến, bắt đầu từ học kỳ 2 năm 1',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-10.jpg',
        link: 'http://sis.ou.edu.vn/',
        title: 'Hệ thống dịch vụ sinh viên',
        content: 'là hệ thống dùng để đăng ký cấp giấy chứng nhận, cấp bản sao bằng tốt nghiệp, giấy chứng nhận tạm thời , cấp thẻ sinh viên...',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-11.jpg',
        link: 'https://tienichsv.ou.edu.vn/',
        title: 'Hệ thống tiện ích sinh viên',
        content: 'là hệ thống dùng để xem thời khoá biểu, xem điểm thi, lịch thi, xem chương trình đào tạo...',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-12.jpg',
        link: 'javascript:;',
        title: 'Hệ thống mail',
        content: 'là hệ thống dùng để nhận thông báo từ phòng quản lý đào tạo, phòng y tế, thư quán... ngoài ra có thể sử dụng tài khoản này truy cập google drive unlimited',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-13.jpg',
        link: 'http://lms.ou.edu.vn/',
        title: 'Hệ thống hỗ trợ học tập online',
        content: 'là hệ thống dùng để liên lạc giữa giảng viên và sinh viên, nơi upload bài tập chạy deadline...',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-14.jpg',
        link: 'http://thuquan.ou.edu.vn/',
        title: 'Hệ thống hỗ trợ đặt sách online',
        content: 'là hệ thống dùng để đặt mua sách từ thư viện',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-15.jpg',
        link: 'http://vieclam.ou.edu.vn/',
        title: 'Cổng thông tin việc làm',
        content: 'là hệ thống dùng để tìm việc, liên kết doanh nghiệp với sinh viên',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-16.jpg',
        link: 'http://xdg.ou.edu.vn/',
        title: 'Hệ thống tra cứu điểm thi',
        content: 'là hệ thống dùng để tra cứu điểm thi sau mỗi học kỳ',
        time_delay: ""
    },
    {
        image: 'assets/images/postGr/post-17.jpg',
        link: 'http://nhatro.ou.edu.vn/',
        title: 'Nhà trọ OU',
        content: 'là hệ thống dùng để tra cứu nhà trọ, giúp sinh viên tìm dễ dàng và nhanh chóng hơn.',
        time_delay: ""
    }
]

let system_list = document.querySelector('#system-content')

renderSystem = (system) => {
    system.forEach(function (e, i) {
        switch (i) {
            case 0:
            case 3:
            case 6: {
                e.time_delay = "0.2s"
                break
            }
            case 1:
            case 4:
            case 7: {
                e.time_delay = "0.5s"
                break
            }
            case 2:
            case 5:
            case 8: {
                e.time_delay = "0.8s"
                break
            }
        }

        let prod = `
        <div class="df col-lg-4 col-md-6 col-sm-12">
            <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="${e.time_delay}">
                <div class="blog-image">
                    <img src="${e.image}" alt="blog">
                </div>
                <div class="blog-content">
                    <ul class="meta">
                        <li><b>Đăng bởi:</b> <a href="#">Thành Nam</a></li>
                    </ul>
                    <p class="text">${e.title}</p>
                    <p><b>Mô tả: </b> ${e.content}</p>
                    <a class="more" href="${e.link}">Đi tới trang web<i
                            class="lni-chevron-right"></i></a>
                </div>
            </div> <!-- single blog -->
        </div>
        `
        system_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderSystem(system)