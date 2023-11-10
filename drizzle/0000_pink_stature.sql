CREATE TABLE IF NOT EXISTS "events" (
	"offset" bigserial PRIMARY KEY NOT NULL,
	"aggregate_id" varchar(255) NOT NULL,
	"type" varchar NOT NULL,
	"data" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "snapshots" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"type" varchar NOT NULL,
	"data" jsonb NOT NULL
);
