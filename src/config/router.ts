import { Router } from 'express'

import { createBookController } from '../controllers/createBookController'
import { updateBookController } from '../controllers/updateBookController'
import { deleteBookController } from '../controllers/deleteBookController'

import { createPublisherController } from '../controllers/createPublisherController'
import { publisherBooksController } from '../controllers/publisherBooksController'
import { listBooksByPublisherController } from '../controllers/listBooksByPublisher'

const router = Router()

router.post("/book", createBookController.handle)
router.put("/book", updateBookController.handle)
router.delete("/book", deleteBookController.handle)

router.post("/publisher", createPublisherController.handle)
router.put("/publisher/:publisherId", publisherBooksController.handle)
router.get("/publisher/:publisherId/books", listBooksByPublisherController.handle)

export { router }
