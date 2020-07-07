drop schema if exists project3 cascade;
CREATE SCHEMA project3;

CREATE TABLE project3.batch (
batch_id  serial PRIMARY KEY,
start_date date,
end_date date,
isconfirmed boolean,
interview_score_lower integer,
program_type varchar(150)
 );

create table project3.location (
location_id serial primary key,
location_name text
);

CREATE TABLE project3.trainer (
trainer_id serial PRIMARY KEY,
first_name TEXT,
last_name TEXT,
-- Added 7/3/20
email varchar(250),
is_eligible BOOLEAN default false,
UNIQUE(email)
);

CREATE TABLE project3.associate (
associate_id serial PRIMARY KEY,
first_name TEXT,
last_name TEXT,
-- Added 7/3/20
email varchar(250),
active boolean default false,
interview_score decimal,
UNIQUE(email)
);
-- Added 7/3/2020
alter table project3.associate 
alter column interview_score type double precision;
-- alter table email unique

create table project3.consent (
consent_id serial primary key,
trainer_id integer REFERENCES project3.trainer(trainer_id),
batch_id integer REFERENCES project3.batch(batch_id),
consent_approved boolean
);
-- Added 7/6/2020
-- alter table project3.consent
-- alter column consent_approved type varchar(150);

CREATE TABLE project3.curriculum (
curriculum_id serial PRIMARY KEY,
name TEXT NOT null
);

--Client
CREATE TABLE project3.client (
 client_id serial PRIMARY KEY,
 name TEXT NOT null
);

CREATE TABLE project3.clientdemand (
client_demand_id serial primary key,
quantity integer,
deadline date
);

--Skills
CREATE TABLE project3.skillset (
skillset_id serial PRIMARY KEY,
name TEXT NOT null
--for later 
);

create table project3.skills (   
skill_id serial primary key,
skill_name text
);

-- Final changes
--foreign keys
--batch table
ALTER TABLE project3.batch ADD COLUMN location_id integer REFERENCES project3.location(location_id);
ALTER TABLE project3.batch ADD COLUMN curriculum_id integer references project3.curriculum(curriculum_id);

--associate
ALTER table project3.associate ADD COLUMN assigned_batch_id integer REFERENCES project3.batch(batch_id);

--client demand
ALTER TABLE project3.clientdemand  ADD COLUMN client_id integer REFERENCES project3.client(client_id);
ALTER table project3.clientdemand ADD COLUMN clientdemand_skillset_id integer REFERENCES project3.skillset(skillset_id);

--Curriculum to skillset
ALTER TABLE project3.curriculum ADD COLUMN curriculum_skillset_id integer REFERENCES project3.skillset(skillset_id); 

--join tables
create table project3.skillsetskills (
skillset_id integer REFERENCES project3.skillset(skillset_id),
skill_id integer REFERENCES project3.skills(skill_id),
PRIMARY KEY (skillset_id,skill_id)
);


create table project3.trainerbatch (
	trainer_id integer references project3.trainer(trainer_id),
	batch_id integer references project3.batch(batch_id),
	primary key (trainer_id, batch_id)
);

create table project3.trainerskills (
	trainer_id integer references project3.trainer(trainer_id),
	skillset_id integer references project3.skillset(skillset_id),
	primary key (trainer_id, skillset_id)
);
