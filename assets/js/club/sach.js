let book = [{
        name: 'Open book',
        link: 'https://www.facebook.com/openbook.ou/'
    },
    {
        name: 'Book & friend',
        link: 'https://www.facebook.com/BooksAndFriendsOU/'
    }
]

let book_list = document.querySelector('#sach')
renderBook = (post) => {
    post.forEach(e => {
        let prod =
            `
    <li>
        ${e.name}:
        <a href="${e.link}"
            target="_blank">${e.link}</a>
    </li>
`
        book_list.insertAdjacentHTML("beforeend", prod)
    })
}
renderBook(book);