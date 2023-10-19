import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1697295895407 implements MigrationInterface {
    name = 'MyMigration1697295895407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "anonymouses" ("id" SERIAL NOT NULL, "messageAnonymous" character varying NOT NULL, CONSTRAINT "PK_aeeb6f3c3e846089cecf3a8811e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "anonymouses"`);
    }

}
