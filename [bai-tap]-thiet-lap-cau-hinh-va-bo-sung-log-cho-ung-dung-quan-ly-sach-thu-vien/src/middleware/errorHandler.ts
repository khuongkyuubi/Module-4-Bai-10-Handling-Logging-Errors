import {logger} from "../logger/winston"

export default function errorHandler(err, req, res, next) {
    logger.error(err);
    return res.status(500).json({message: err.message});
}