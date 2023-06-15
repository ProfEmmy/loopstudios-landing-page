const close = document.querySelector(".close-icon")
const menu = document.querySelector(".menu-icon")
const nav = document.querySelector(".mobile-navigator-div")
const links_div = document.querySelector(".links")
const links = links_div.children
const sitemap_div = document.querySelector(".sitemap-div")
const footer_links = sitemap_div.children
const socialmedia_links_div = document.querySelector(".social-media-links")
const social_media_links = socialmedia_links_div.children

const links_array = Array.from(links)

links_array.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.children[0].classList.remove("display")
    })
    link.addEventListener("mouseleave", () => {
        link.children[0].classList.add("display")
    })
})

const footer_links_array = Array.from(footer_links)
footer_links_array.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.children[0].classList.remove("display")
    })
    link.addEventListener("mouseleave", () => {
        link.children[0].classList.add("display")
    })
})

const social_media_links_array = Array.from(social_media_links)

social_media_links_array.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.children[1].classList.remove("display")
    })
    link.addEventListener("mouseleave", () => {
        link.children[1].classList.add("display")
    })
})

menu.addEventListener("click", () => {
    nav.classList.remove("display")
})

close.addEventListener("click", () => {
    nav.classList.add("display")
})