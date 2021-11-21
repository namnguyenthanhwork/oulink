let english = [{
        name: 'NIKO',
        link: 'https://www.facebook.com/Nikoniko.clbtiengNhat.DHMoTphcm'
    },
    {
        name: 'A.C.E',
        link: 'https://www.facebook.com/aceclub.ou/'
    },
    {
        name: 'OU IT',
        link: 'https://www.facebook.com/ouitenglishclub'
    },
    {
        name: 'The Sun EC',
        link: 'https://www.facebook.com/TheSunEC/'
    },
    {
        name: 'ZWS OU',
        link: 'https://www.facebook.com/zwschineseclub.hcmcou/'
    },
    {
        name: 'Anh văn tự học',
        link: 'https://www.facebook.com/tienganhmienphiouhcm/'
    }
]

let english_list = document.querySelector('#ngoai-ngu')
renderEnglish = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        english_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderEnglish(english);