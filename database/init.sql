BEGIN;

DROP TABLE IF EXISTS people, interests CASCADE;

CREATE TABLE people (
    github_username TEXT PRIMARY KEY,
    name TEXT,
    pronoun TEXT,
    cohort INTEGER,
    location TEXT
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    username TEXT REFERENCES people(github_username),
    activity TEXT
);



INSERT INTO people (github_username, name, pronoun, cohort, location) VALUES 
('jamdelion', 'Jo', 'they', 21, 'Cambridge'),
('tiarama', 'Craig', 'they', 21, 'London')
;

INSERT INTO interests (username, activity) VALUES 
('jamdelion', 'roller-blading'),
('jamdelion', 'drumming'),
('tiarama', 'drag')
;

COMMIT;