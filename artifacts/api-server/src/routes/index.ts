import { Router, type IRouter } from "express";
import healthRouter from "./health";
import signupRouter from "./signup";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(signupRouter);
router.use(adminRouter);

export default router;
