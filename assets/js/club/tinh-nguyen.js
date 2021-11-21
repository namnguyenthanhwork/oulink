let volunteer = [{
        name: 'OU Green Plus',
        link: 'https://www.facebook.com/OUGreenPlusClub/'
    },
    {
        name: 'Hiến máu',
        link: 'https://www.facebook.com/HienMauOU'
    }
]

let volunteer_list = document.querySelector('#tinh-nguyen')
renderVolunteer = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        volunteer_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderVolunteer(volunteer);