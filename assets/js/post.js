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

let post_list = document.querySelector('#group-post');

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