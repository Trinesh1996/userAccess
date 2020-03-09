-- create database userAccess;

create table resource_role (
    id serial PRIMARY KEY,
    resource_id int not null,
    user_role_id INT not null,
    access boolean not null,
    creates boolean not null,
    read boolean not null,
    modify boolean not null,
    delete boolean not null,
    FullAccess boolean not null,
    upload boolean not null,
    download boolean not null,
    FOREIGN KEY(resource_id) REFERENCES resources(id),
    FOREIGN KEY(user_role_id) REFERENCES user_role(id)
);

create table roles (
    id serial primary key,
    role_name text not null,
    UNIQUE(role_name)
);

create table user_role (
    id serial primary key ,
    user_id INT not null,
    role_id INT not null,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(role_id) REFERENCES roles(id)
);

-- create resource_role (
--     id serial primary key,
--     user_id INT not null,
--     resource_id INT not null
--     FOREIGN KEY(user_id) REFERENCES users(id),
--     FOREIGN KEY(resource_id) REFERENCES resources(id)
-- );

create table users (
    id serial not null primary key,
    name text not null,
    surname text not null,
    email text not null UNIQ,
    password text not null,
    contact_number_1 text not null,
    contact_number_2 text,
    street text not null,
    suburb text not null,
    city text not null,
    postal_code text not null,
    country text not null,
    currency text not null,
    createdSource_ip TEXT not null,
    createdSource_browser TEXT NOT NULL,
    createdSource_MACAddress TEXT NOT NULL,
    createdSource_createdBy TEXT NOT NULL,
    createdSource_createdAt INT NOT NULL,
    UNIQUE (email)
);

create table currentDeviceInUser (
    id INT not null primary key,
    currentDeviceInUse_ip TEXT NOT NULL,
    currentDeviceInUse_browser TEXT NOT NULL,
    currentDeviceInUse_MACAddress TEXT NOT NULL
    user_id INT not null
    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- -- resources are the services and features a user can access
create table resources (
    id serial primary key ,
    resource_name text not null
);

-- create table groups (
--     id INT primary key ,
--     group_name text not null,
--     user_id INT not null,
--     resource_role_id INT not null,
--     FOREIGN KEY(resource_role_id) REFERENCES resources_role(id),
--     FOREIGN KEY(user_id) REFERENCES users(id)
-- );


insert into users (name, surname, email, password) values ('Trinesh', 'Chetty', 'trineshetty@gmail.com', 'adkfgadkfhg')
insert into users (name, surname, email, password) values ('Marge', 'Simpson', 'margesimpson@gmail.com', 'rfwedfwqeqe')
insert into users (name, surname, email, password) values ('Homer', 'Simpson', 'homersimpson@gmail.com', 'adkfgadkfhg')


insert into roles (role_name) values ('admin')
insert into roles (role_name) values ('agent')
insert into roles (role_name) values ('manager')

insert into resources (resource_name) values ('System Theme')
insert into resources (resource_name) values ('user management')
insert into resources (resource_name) values ('chat widget')
insert into resources (resource_name) values ('Chat Service')
insert into resources (resource_name) values ('Facebook Messenger')

insert into resource_role(resource_id, role_id, access, creates, read, modify, delete, FullAccess, upload, download) VALUES (1, 1, true, true, true, true, true, true, true, true)
insert into resource_role(resource_id, role_id, access, creates, read, modify, delete, FullAccess, upload, download) VALUES (3, 2, true, true, true, true, true, true, true, true)



