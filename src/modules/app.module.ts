import { Router } from "express";
import * as product from "./product/product.module";
import * as users from "./users/user.module";


const router = Router();


router.use("/product", product.router);
router.use("/user", users.router);


export { router };
