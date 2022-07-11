import {Router} from 'express';
import asyncWrapper from "../util/asyncWrapper";

const bookRoutes = Router();
import {bookModel} from "../schemas/book.model";
import bookController from "../controller/book.controller"
import multer from 'multer';

import {publisherSchema, publisherModel} from "../schemas/publisher.model";
import {categorySchema, categoryModel} from "../schemas/category.model";
import {keywordsSchema, keywordsModel} from "../schemas/keyword.model"


const upload = multer();

bookRoutes.get('/create', asyncWrapper((req, res) => {
    res.render("createBook");
}));

bookRoutes.post('/create', upload.none(), asyncWrapper(bookController.createBook));

bookRoutes.post('/update/:id', upload.none(), asyncWrapper(bookController.updateBook));

bookRoutes.get('/list', asyncWrapper(bookController.showList));


export default bookRoutes;
