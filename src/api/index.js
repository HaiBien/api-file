import express from "express";

import userRouter from "./resources/user/user.router";
import { imgUploadRouter } from "./resources/imgUpload/imgUpload.router";
import { thongtinchungRouter } from "./resources/thongtinchung/thongtinchung.router";
import { phanquyenvaitroRouter } from "./resources/phanquyenvaitro/phanquyenvaitro.router";
import { lichsuhoatdongRouter } from "./resources/lichsuhoatdong/lichsuhoatdong.router";

// const restRouter = express.Router();
export const restRouter = express.Router();

restRouter.use("/users", userRouter);
restRouter.use("/files", imgUploadRouter);
restRouter.use("/thong-tin-chung", thongtinchungRouter);
restRouter.use("/phan-quyen-vai-tro", phanquyenvaitroRouter);
restRouter.use("/lich-su-hoat-dong", lichsuhoatdongRouter);
