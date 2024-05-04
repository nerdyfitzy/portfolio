import "dotenv/config";

console.log(process.env.environment);

export const { PORT, environment, email, password, kayleeemail } = process.env;
