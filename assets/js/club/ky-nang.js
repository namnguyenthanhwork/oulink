let skill = [{
        name: 'Happy U',
        link: 'https://www.facebook.com/HappyUClbKynangvaGiatrisong/'
    },
    {
        name: 'O.mar',
        link: 'https://www.facebook.com/omarketing.ou/'
    },
    {
        name: 'Your Club',
        link: 'https://www.facebook.com/YourClubOU/'
    },
    {
        name: 'Gear Up',
        link: 'https://www.facebook.com/startup.gearup/'
    },
    {
        name: 'FBA Club',
        link: 'https://www.facebook.com/caulacbotcnhkt/'
    },
    {
        name: 'BlueSky',
        link: 'https://www.facebook.com/blueskyclub.ou/'
    },
    {
        name: 'MAREC',
        link: 'https://www.facebook.com/clb.marec.ou'
    },
    {
        name: 'OMG',
        link: 'https://www.facebook.com/caulacbo.omg'
    },
    {
        name: 'YOUM',
        link: 'https://www.facebook.com/youmclub'
    },
    {
        name: 'The Entrepreneurship Club',
        link: 'https://www.facebook.com/CLBKhoiNghiepOU'
    },
    {
        name: 'Nhóm tư vấn tâm lý Spirit',
        link: 'https://www.facebook.com/nhomspirit/'
    }
]

let skill_list = document.querySelector('#ky-nang')
renderSkill = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        skill_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderSkill(skill);