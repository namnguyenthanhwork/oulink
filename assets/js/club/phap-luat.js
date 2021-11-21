let law = [{
        name: 'Tuyên truyền pháp luật',
        link: 'https://www.facebook.com/clbtuyentruyenphapluatou'
    },
    {
        name: 'LAW',
        link: 'https://www.facebook.com/CLBL.A.W'
    },
    {
        name: 'LSC',
        link: 'https://www.facebook.com/leagalskillsclub.ou/'
    }
]

let law_list = document.querySelector('#luat')
renderLaw = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        law_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderLaw(law);