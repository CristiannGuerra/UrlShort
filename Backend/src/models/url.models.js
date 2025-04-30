import mongoose from "mongoose";
import { nanoid } from "nanoid";

export const SHORT_URL_PROPS = {
    FULL: 'full',
    SHORT: 'short',
    CLICKS: 'clicks',
    TIMESTAMP: 'timestamp'
}

const shortUrlSchema = new mongoose.Schema({
    [SHORT_URL_PROPS.FULL]: {
        type: String,
        required: true
    },
    [SHORT_URL_PROPS.SHORT]: {
        type: String,
        required: true,
        // default: nanoid()
    },
    [SHORT_URL_PROPS.CLICKS]: {
        type: Number,
        required: true,
        default: 0
    },
    [SHORT_URL_PROPS.TIMESTAMP]: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

const Url = mongoose.model('ShortUrl', shortUrlSchema)

export default Url