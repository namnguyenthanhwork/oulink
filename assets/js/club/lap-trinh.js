let code = [{
        name: 'Lập Trình Trên Thiết Bị Di Động',
        link: 'https://www.facebook.com/CLBLapTrinhTrenThietBiDiDong/'
    },
    {
        name: 'Live Club',
        link: 'https://www.facebook.com/OULiveClub/'
    }
]

let code_list = document.querySelector('#lap-trinh')
renderCode = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        code_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderCode(code);