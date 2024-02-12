import { Request, Response, Router } from "express";
import { ProductController } from "./user.controller";
import { ProductService } from "./user.service";

const productService = new ProductService();
const productController = new ProductController(productService);

const router = Router();

router.get("/", (req: Request, res: Response) => {
  productController.getAll(req, res);
});

// router.get("/:id", (req: Request, res: Response) => {
//   productController.getById(req, res);
// });

// router.post("/", (req: Request, res: Response) => {
//   productController.create(req, res);
// });

// router.put("/:id", (req: Request, res: Response) => {
//   productController.update(req, res);
// });
// router.delete("/:id", (req: Request, res: Response) => {
//   productController.delete(req, res);
// });

export { router };
