import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNotesTable1652809869459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'notes',
                columns: [
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"title",
                        type:"varchar",
                    },
                    {
                        name:"body",
                        type:"varchar",
                    },
                    {
                        name:"bg_color",
                        type:"varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes')
    }

}
