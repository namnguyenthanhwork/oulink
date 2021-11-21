let music = [{
        name: 'NGC',
        link: 'https://www.facebook.com/Night.Guitar.OU/'
    },
    {
        name: 'PASSION',
        link: 'https://www.facebook.com/passionclub.ou'
    },
    {
        name: 'CEO',
        link: 'https://www.facebook.com/CEO.Guitar.OU'
    }
]

let music_list = document.querySelector('#ca-nhac')
renderMusic = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        music_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderMusic(music);