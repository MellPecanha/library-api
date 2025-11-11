import { Router } from 'express'

import { createBookController } from '../controllers/createBookController'
import { updateBookController } from '../controllers/updateBookController'
import { deleteBookController } from '../controllers/deleteBookController'

import { createPublisherController } from '../controllers/createPublisherController'

const router = Router()

router.post("/book", createBookController.handle)
router.put("/book", updateBookController.handle)
router.delete("/book", deleteBookController.handle)

router.get("/publisher", createPublisherController.handle)



export { router }
