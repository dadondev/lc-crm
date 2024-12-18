/** @format */

import express, { Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Express TypeScript API",
			version: "1.0.0",
			description: "A simple Express API with TypeScript and Swagger",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.ts"],
};
app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerJSDoc(swaggerOptions))
);
app.get("/hello", (req: Request, res: Response) => {
	res.status(200).send({ message: "Hello, World!" });
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
	console.log(
		`Swagger documentation is available at http://localhost:${port}/api-docs`
	);
});
