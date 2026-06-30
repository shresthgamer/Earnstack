import { Router, type IRouter } from "express";
import healthRouter from "./health";
import signupRouter from "./signup";

const router: IRouter = Router();

router.use(healthRouter);
router.use(signupRouter);

export default router;
