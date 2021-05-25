import express from 'express';
import roomCtrl from './room';

const router = express.Router();

router.route('/')
  /** GET /api/tasks - Get list of tasks */
  .get(roomCtrl.list)

  /** POST /api/tasks - Create new task */
  .post(roomCtrl.create);

router.route('/:roomId')
  /** GET /api/tasks/:taskId - Get task */
  .get(roomCtrl.get)

  /** PUT /api/tasks/:taskId - Update task */
  .put(roomCtrl.update)

  /** DELETE /api/tasks/:taskId - Delete task */
  .delete(roomCtrl.remove);

/** Load task when API with taskId route parameter is hit */
// router.param('roomId', roomCtrl.load);

/**
 * TODO: Following is not working
 */
router.use('/room', router);

export default router;