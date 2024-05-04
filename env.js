import "dotenv/config";

console.log(process.env.environment);

export const { port, environment, email, password, kayleeemail } = process.env;
