import Url, { SHORT_URL_PROPS } from "../models/url.models.js";
import { nanoid } from "nanoid";

class UrlRepository {

    async addUrl(url) {
        try {
            const urlAdded = await Url.create({
                [SHORT_URL_PROPS.FULL]: url,
                [SHORT_URL_PROPS.SHORT]: nanoid()
            })

            return urlAdded


        } catch (error) {
            return error
        }
    }

    async addPremiumUrl(url, shortUrl) {
        try {
            const urlAdded = await Url.create({
                [SHORT_URL_PROPS.FULL]: url,
                [SHORT_URL_PROPS.SHORT]: shortUrl
            })

            return urlAdded
        }
        catch (error) {
            return error
        }
    }

    async getAllUrls() {
        try {
            const urls = await Url.find()

            return urls

        } catch (error) {
            return error
        }
    }

    async getUrlbyShortUrl(shortUrl) {
        try {
            const url = await Url.findOne({ [SHORT_URL_PROPS.SHORT]: shortUrl })

            return url

        } catch (error) {
            return error
        }
    }

    async updateClicks(shortUrl) {
        try {
            const url = await Url.findOneAndUpdate({ [SHORT_URL_PROPS.SHORT]: shortUrl }, { $inc: { [SHORT_URL_PROPS.CLICKS]: 1 } })

            return url

        } catch (error) {
            return error
        }

    }

    async getUrlbyShortUrl(shortUrl) {
        try {
            const url = await Url.findOne({ [SHORT_URL_PROPS.SHORT]: shortUrl })

            return url

        } catch (error) {
            return error
        }
    }
}


const urlRepository = new UrlRepository()

export default urlRepository