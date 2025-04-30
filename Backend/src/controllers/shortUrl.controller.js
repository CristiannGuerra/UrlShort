import urlRepository from "../repositories/url.repository.js"

const createNewRegisterController = async (req, res) => {
    try {
        const { url } = req.body

        const url_added = await urlRepository.addUrl(url)


        return res.send({
            message: `URL Added Successfully ${url_added}`,
            ok: true,
            status: 202
        })

    } catch (error) {
        return res.status(500).send('Error')
    }
}

const createNewPremiumRegisterController = async (req, res) => {
    try {
        const { url, shortUrl } = req.body

        const url_added = await urlRepository.addPremiumUrl(url, shortUrl)


        return res.send({
            message: `URL Added Successfully ${url_added}`,
            ok: true,
            status: 202
        })

    } catch (error) {
        return res.status(500).send('Error')
    }
}

const getAlltUrlsController = async (req, res) => {
    try {
        const urls = await urlRepository.getAllUrls()

        return res.send({
            message: `Urls Found Successfully`,
            ok: true,
            status: 202,
            data: { urls }
        })

    } catch (error) {
        return res.status(500).send('Error')
    }
}

const redirectUrlController = async (req, res) => {
    try {
        const { shortUrl } = req.params

        const url = await urlRepository.getUrlbyShortUrl(shortUrl)

        await urlRepository.updateClicks(shortUrl)

        return res.redirect(url.full)

    } catch (error) {
        return res.status(500).send('Error')
    }
}

const getUrlbyShortUrlController = async (req, res) => {
    try {
        const { shortUrl } = req.params

        const url = await urlRepository.getUrlbyShortUrl(shortUrl)

        return res.send({
            message: `Url Found Successfully`,
            ok: true,
            status: 202,
            data: { url }
        })

    } catch (error) {
        return res.status(500).send('Error')
    }

}

export { createNewRegisterController, getAlltUrlsController, redirectUrlController, getUrlbyShortUrlController, createNewPremiumRegisterController }