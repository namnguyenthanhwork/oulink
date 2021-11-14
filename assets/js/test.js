fetch("../assets/js/post.json")
    .then(data => data.json())
    .then(data => {
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
        renderPost(data);
    })