import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1697708744046 implements MigrationInterface {
    name = 'MyMigration1697708744046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anonymouses" RENAME COLUMN "messageanonymous" TO "messageAnonymous"`);
        await queryRunner.query(`ALTER TABLE "anonymouses" DROP COLUMN "messageAnonymous"`);
        await queryRunner.query(`ALTER TABLE "anonymouses" ADD "messageAnonymous" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "message" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "message" text`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "name" text`);
        await queryRunner.query(`ALTER TABLE "anonymouses" DROP COLUMN "messageAnonymous"`);
        await queryRunner.query(`ALTER TABLE "anonymouses" ADD "messageAnonymous" text`);
        await queryRunner.query(`ALTER TABLE "anonymouses" RENAME COLUMN "messageAnonymous" TO "messageanonymous"`);
    }

}
