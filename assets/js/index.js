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
            <div class="df col-lg-4 col-md-6 col-sm-6">
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

/* =============== post group utility =============== */
let postUtil = [{
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-16.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1347522502331021/',
        time_delay: '0.8s',
        time: '18/10/2021',
        title: 'Hướng dẫn sửa lỗi font slide của giảng viên'
    },
    {
        author: 'Thảo Vy Ngo ',
        image: 'assets/images/postGr/post-15.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1337789979970940/',
        time_delay: '0.2s',
        time: '04/10/2021',
        title: 'NOTION PERSONAL PRO - XÀI FREE NHỜ CÓ MAIL TRƯỜNG'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-14.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1320830008333604/',
        time_delay: '0.2s',
        time: '09/09/2021',
        title: 'Chatbot ôn luyện tin học và anh văn đầu vào'
    },
    {
        author: 'Thảo Vy Ngo',
        image: 'assets/images/postGr/post-13.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1343930692690202/',
        time_delay: '0.2s',
        time: '13/10/2021',
        title: 'CANVA FOR EDUCATION - XÀI FREE NHỜ CÓ MAIL TRƯỜNG'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-12.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1284282711988334/',
        time_delay: '0.2s',
        time: '18/07/2021',
        title: 'Hướng dẫn chụp ảnh 3x4 upload web.'
    }
]

let post_util_list = document.querySelector('#group-post-util')
renderPostUtil = (post) => {
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
        <div class="df col-lg-4 col-md-6 col-sm-6">
            <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="${e.time_delay}">
                    <div class="blog-image">
                        <img src="${e.image}" alt="blog">       
                    </div>
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
        post_util_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPostUtil(postUtil);

/* =============== post group review =============== */
let postReview = [{
        author: 'Diệu Nhân',
        image: 'assets/images/postGr/post-3.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1335854933497778/',
        time_delay: '0.8s',
        time: '01/10/2021',
        title: 'MỘT SỐ KINH NGHIỆM ĐẠT HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-4.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1301559593593979/',
        time_delay: '0.2s',
        time: '12/08/2021',
        title: 'Giới thiệu về Hệ thống điểm tích lũy 4 năm đại học.'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-1.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1299457123804226/',
        time_delay: '0.2s',
        time: '09/08/2021',
        title: 'Giới thiệu Hệ thống điểm rèn luyện của trường Đại học Mở'
    },
    {
        author: 'Quang Hà',
        image: 'assets/images/postGr/post-2.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1293426214407317/',
        time_delay: '0.2s',
        time: '31/07/2021',
        title: 'Cảm nhận về OU.'
    },
    {
        author: 'Hieu Q.Nguyen',
        image: 'assets/images/postGr/post-12.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1263937307356208/',
        time_delay: '0.2s',
        time: '17/06/2021',
        title: 'NGÀNH NGÔN NGỮ ANH TẠI ĐẠI HỌC MỞ TP. HCM'
    },
    {
        author: 'Quang Hà',
        image: 'assets/images/postGr/post-6.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1291199234630015/',
        time_delay: '0.2s',
        time: '28/07/2021',
        title: 'Góc nhìn về đại học Mở từ 1 sv năm nhất..'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-7.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1268234536926485/',
        time_delay: '0.2s',
        time: '23/06/2021',
        title: 'Review cơ sở 371 Nguyễn Kiệm'
    },
    {
        author: 'Diệu Nhân',
        image: 'assets/images/postGr/post-17.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1268858743530731/',
        time_delay: '0.2s',
        time: '24/06/2021',
        title: 'Ngôn ngữ Anh năm nhất cần chuẩn bị gì?'
    },
    {
        author: 'Trần ĐạtK',
        image: 'assets/images/postGr/post-16.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1080016299081644/',
        time_delay: '0.2s',
        time: '27/09/2020',
        title: 'Review kiểm tra anh văn đầu vào.'
    },
    {
        author: 'NT Diễm',
        image: 'assets/images/postGr/post-15.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1078602749222999/',
        time_delay: '0.2s',
        time: '25/09/2020',
        title: 'Mẹo thuê phòng trọ.'
    },
    {
        author: 'Thành Nam',
        image: 'assets/images/postGr/post-14.jpg',
        link: 'https://www.facebook.com/groups/oumembers/posts/1191871581229448/',
        time_delay: '0.2s',
        time: '27/02/2021',
        title: 'Review quân sự.'
    }
]

let post_review_list = document.querySelector('#group-post-review')
renderPostReview = (post) => {
    post.forEach(e => {
        let prod =
            `
    <div class="df review-post">
        <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s">
            <div class="blog-image">
                <img src="${e.image}" alt="blog">       
            </div>
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
        post_review_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPostReview(postReview);

$('.post-review').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoHeight: true,
    nav: false,
    dots: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})

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
        <div class="df col-lg-4 col-md-6 col-sm-6">
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