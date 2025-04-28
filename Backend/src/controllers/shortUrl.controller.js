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

export { createNewRegisterController }