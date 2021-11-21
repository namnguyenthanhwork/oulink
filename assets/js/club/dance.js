let dance = [{
        name: 'BEAT',
        link: 'https://www.facebook.com/beat.baou'
    },
    {
        name: 'PASSION',
        link: 'https://www.facebook.com/passionclub.ou'
    },
    {
        name: 'Hit Crew',
        link: 'https://www.facebook.com/Hitcrew02/'
    },
    {
        name: 'Trip S Crew',
        link: 'https://www.facebook.com/TripleS.ou/'
    }
]

let dance_list = document.querySelector('#dance')
renderDance = (post) => {
    post.forEach(e => {
        let prod =
            `
        <li>
            ${e.name}:
            <a href="${e.link}"
                target="_blank">${e.link}</a>
        </li>
`
        dance_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderDance(dance);