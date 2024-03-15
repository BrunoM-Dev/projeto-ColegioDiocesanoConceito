const campos = "media_url,media_type,caption,permalink";
const limit = 45;
let token = "IGQWRPdnhHNnR2S3E2cjlzMkpYcml3Q1BKSmRSbGI0N3F0STRDN3dVN0c1aTY3YndtQ3dUTk1RWF9VN1V1TkIySHk2VFpOWk1YMk5lQ0tXSUM4ZAlJIRDRCVkMzejktcXBjS05FRV81UkgwMWZA4YjZANLUt1eXpqTEEZD"

/* 
const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQWRPdnhHNnR2S3E2cjlzMkpYcml3Q1BKSmRSbGI0N3F0STRDN3dVN0c1aTY3YndtQ3dUTk1RWF9VN1V1TkIySHk2VFpOWk1YMk5lQ0tXSUM4ZAlJIRDRCVkMzejktcXBjS05FRV81UkgwMWZA4YjZANLUt1eXpqTEEZD`;
*/  


const baseURL = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${token}&limit=${limit}`

let numeroCards = 0


fetch(baseURL)
    .then(response => response.json())
    .then((data) => {
        const containerCards = document.querySelector('.swiper-wrapper')

        data.data.forEach((img) => {
            const mediaType = img.media_type;
            
            if (numeroCards < 10) {
                if(mediaType === "VIDEO" || mediaType === "CAROUSEL_ALBUM") {
                    return
                } 
                else {
                    const mediaUrl = img.media_url;
                    const captionText = img.caption;
                    const permaLink = img.permalink;

                    const card = document.createElement('div');
                    card.classList.add('card', 'swiper-slide');

                    const ancoraCard = document.createElement('a');
                    ancoraCard.href = permaLink;
                    ancoraCard.target = 'black'
                    ancoraCard.rel = 'noopener noreferrer'

                    const containerImageCard = document.createElement('div');
                    containerImageCard.classList.add('image-news');

                    const imageCard = document.createElement("img")
                    imageCard.src = mediaUrl

                    const overlayNews = document.createElement('div')
                    overlayNews.classList.add('overlay-news')

                    const overlayNewsContent = document.createElement('div')
                    overlayNewsContent.classList.add('overlay-news-content')

                    const titleNews = document.createElement('h2');
                    titleNews.classList.add('title-news')
                    titleNews.innerHTML = 'NOTICIA <span class="text-green"> DIOCESANO </span>';

                    const textNews = document.createElement('p');
                    textNews.classList.add('text-news')
                    textNews.innerHTML = `${captionText}`


                    overlayNewsContent.appendChild(titleNews)
                    overlayNewsContent.appendChild(textNews)
                    overlayNews.appendChild(overlayNewsContent)
                    containerImageCard.appendChild(imageCard)
                    containerImageCard.appendChild(overlayNews)
                    ancoraCard.appendChild(containerImageCard)
                    card.appendChild(ancoraCard)
                    containerCards.appendChild(card);

                    numeroCards += 1
                }
            }
        })
        console.log(numeroCards)
    })
    .catch((err) => {
        console.log(err)
    })

