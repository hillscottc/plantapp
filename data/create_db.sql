

DROP TABLE IF EXISTS plant;

CREATE TABLE plant (
    id serial primary key,
    symbol varchar(8) NOT NULL,
    synonym varchar(8),
    sci_name varchar(250),
    common_name varchar(50),
    family varchar(25)
);

-- Note, you need to get the path right here. This should be scripted somehow.
\copy plant(symbol,synonym,sci_name,common_name,family) from '/Users/hills120/dev/plantapp/data/plants.csv' DELIMITER ',' CSV HEADER

