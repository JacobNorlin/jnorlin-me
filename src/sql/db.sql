CREATE TABLE users(
  username VARCHAR(20),
  pw VARCHAR(200),
  id INT AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE blogposts(
  body TEXT,
  date DATE,
  id INT AUTO_INCREMENT NOT NULL,
  uid INT NOT NULL,
  FOREIGN KEY (uid) REFERENCES users(id),
  PRIMARY KEY (id)
  );
  

