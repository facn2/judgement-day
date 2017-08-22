BEGIN;

DROP TABLE IF EXISTS mentors, questions, singing cascade;

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
  name      VARCHAR(20)   NOT NULL,
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
  esraa     INTEGER       DEFAULT 0 NOT NULL
);


INSERT INTO mentors(name, imageUrl) VALUES
('shireen', '../public/images/shireen'), ('mario', '../public/images/mario');

INSERT INTO questions(category, question) VALUES
('singing', 'who is better at singing?');

INSERT INTO singing(name, rating, shireen, mario) VALUES
('shireen', 1, 0, 1), ('mario', 0, 1, 0);

COMMIT;
