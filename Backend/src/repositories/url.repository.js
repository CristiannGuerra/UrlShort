import Url, { SHORT_URL_PROPS } from "../models/url.models.js";

class UrlRepository {

    async addUrl(url) {
        try {
            const urlAdded = await Url.create({
                [SHORT_URL_PROPS.FULL]: url
            })

            return urlAdded


        } catch (error) {
            console.log(error)
        }
    }
}


const urlRepository = new UrlRepository()

export default urlRepository