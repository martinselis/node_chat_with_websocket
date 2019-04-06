drop table chat;
create table chat(
  ID SERIAL PRIMARY KEY,
  login VARCHAR(255),
  message VARCHAR(255)
);
