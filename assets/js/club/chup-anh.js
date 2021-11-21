let photo = [{
        name: 'N.I.M',
        link: 'https://www.facebook.com/photoclub.nim'
    },
    {
        name: 'C.O.L',
        link: 'https://m.facebook.com/COLTEAM.official'
    }
]

let photo_list = document.querySelector('#photo')
renderPhoto = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        photo_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderPhoto(photo);