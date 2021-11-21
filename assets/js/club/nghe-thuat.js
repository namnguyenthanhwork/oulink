let art = [{
        name: 'ORA (CLB mỹ thuật)',
        link: 'https://www.facebook.com/oraclubou/'
    },
    {
        name: 'NIKO',
        link: 'https://www.facebook.com/Nikoniko.clbtiengNhat.DHMoTphc'
    }
]

let art_list = document.querySelector('#nghe-thuat')
renderArt = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        art_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderArt(art);