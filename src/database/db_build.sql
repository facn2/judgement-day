BEGIN;

DROP TABLE IF EXISTS mentors, questions, singing, hair, cooking, TV, feet, issues cascade;

CREATE TABLE mentors(
  id        SERIAL    PRIMARY KEY,
  name      TEXT      NOT NULL,
  imageUrl  TEXT      NOT NULL
);

CREATE TABLE questions(
  id          SERIAL    PRIMARY KEY,
  category    TEXT      NOT NULL,
  question    TEXT      NOT NULL
);

CREATE TABLE singing(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);

CREATE TABLE hair(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);

CREATE TABLE cooking(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);
CREATE TABLE TV(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);
CREATE TABLE feet(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);
CREATE TABLE issues(
  id        SERIAL        PRIMARY KEY,
  mentor_id INTEGER       NOT NULL,
  rating    INTEGER       DEFAULT 0 NOT NULL,
  shireen   INTEGER       DEFAULT 0 NOT NULL,
  mario     INTEGER       DEFAULT 0 NOT NULL,
  mavis     INTEGER       DEFAULT 0 NOT NULL,
  lubes     INTEGER       DEFAULT 0 NOT NULL,
  lawson    INTEGER       DEFAULT 0 NOT NULL,
  judy      INTEGER       DEFAULT 0 NOT NULL,
  jack      INTEGER       DEFAULT 0 NOT NULL,
  suha      INTEGER       DEFAULT 0 NOT NULL,
  reem      INTEGER       DEFAULT 0 NOT NULL,
  yvonne    INTEGER       DEFAULT 0 NOT NULL,
  zooey     INTEGER       DEFAULT 0 NOT NULL,
  finn      INTEGER       DEFAULT 0 NOT NULL,
  dan     INTEGER       DEFAULT 0 NOT NULL
);



INSERT INTO mentors(name, imageUrl) VALUES
('shireen', './assets/shireen.jpg'), ('mario', './assets/mario.jpg') , ('mavis', '../assets/mavis.jpg'), ('lubes', './assets/lubes.jpg'), ('lawson', './assets/lawson.jpg'), ('judy', './assets/joudy.jpg'), ('jack', './assets/jack.jpg'), ('suha', './assets/suha.jpg'), ('reem', './assets/reem.jpg'), ('yvonne', './assets/yvonne.jpg'), ('zooey', './assets/zooey.jpg'), ('finn', './assets/finn.jpg'), ('dan',  './assets/dan.jpg');


INSERT INTO questions(category, question) VALUES
('singing', 'who is better at singing?'),
('hair', 'who has better hair?'),
('cooking', 'who is worst at cooking?'),
('TV', 'who is more likely to watch Tellytubbies on a Friday night?'),
('feet', 'who has nicer feet?'),
('issues', 'who makes more issues on Github?');




INSERT INTO singing(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);
INSERT INTO hair(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);
INSERT INTO cooking(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);
INSERT INTO TV(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);
INSERT INTO feet(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);
INSERT INTO issues(mentor_id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13);



COMMIT;
