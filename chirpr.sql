CREATE USER 'Jake' IDENTIFIED BY 'Yo0whatspopping';

	GRANT ALL PRIVILEGES ON chirpr.*
	TO 'root';

    USE mysql;
	
update user set authentication_string=password('Chill1ngout!'), plugin='mysql_native_password' where user='root';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Chill1ngout!';

ALTER TABLE users DROP password;
INSERT INTO users (name) VALUE('tommy_pickles');

SELECT * FROM users;

SELECT * FROM chirps;
