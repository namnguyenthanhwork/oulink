let sport = [{
        name: 'Bóng đá',
        link: 'https://www.facebook.com/groups/336582584217557'
    },
    {
        name: 'Bóng rổ',
        link: 'https://www.facebook.com/Oubasketballclub/'
    },
    {
        name: 'Cầu lông',
        link: 'https://www.facebook.com/FFL.OUB/'
    },
    {
        name: 'Vovinam',
        link: 'https://www.facebook.com/C%C3%A2u-la%CC%A3c-b%C3%B4%CC%A3-Vovinam-%C4%90a%CC%A3i-ho%CC%A3c-M%C6%A1%CC%89-Tp-HCM-488049277961561'
    },
    {
        name: 'Taekwondo',
        link: 'https://www.facebook.com/OUTaekwondoClub/'
    },
    {
        name: 'Cờ vua',
        link: 'https://www.facebook.com/oumchessclub/'
    },
    {
        name: 'SAS Sports',
        link: 'https://www.facebook.com/clb.sas/'
    },
    {
        name: 'FFLSC',
        link: 'https://www.facebook.com/FFLSC/'
    }
]

let sport_list = document.querySelector('#the-thao')
renderSport = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        sport_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderSport(sport);