
# I will likely use one db for all of these demos
#CREATE database plants_db WITH encoding 'utf8';

DROP TABLE IF EXISTS plant;

CREATE TABLE plant (
    category_id serial primary key,
    symbol varchar(8) NOT NULL,
    synonym varchar(8),
    sci_name varchar(250),
    common_name varchar(50),
    family varchar(25)
);

\copy plant(symbol,synonym,sci_name,common_name,family) from '/Users/hills120/dev/plantapp/data/plants.csv' DELIMITER ',' CSV HEADER

