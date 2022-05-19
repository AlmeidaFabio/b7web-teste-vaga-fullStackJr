import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: false,
    synchronize: true,
    entities: [
        "src/entities/**{.ts,.js}"
    ],
    migrations: [
        "src/database/migrations/**{.ts,.js}"
    ]
})