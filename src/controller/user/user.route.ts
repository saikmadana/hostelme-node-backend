import express from 'express';
import { users } from './user';

const router = express.Router();

router.route('/')
  /** GET /api/tasks - Get list of tasks */
  .post(users)
  
export default router;