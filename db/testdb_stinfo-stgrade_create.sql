#-- create database testdb;
show databases;
use testdb;
show tables;

create table st_info(
ST_ID int,
NAME varchar(20),
DEPT varchar(25)
) default charset=utf8;
show tables;

create table st_grade(
ST_ID int,
Linux int,
DB int);
explain st_info;
explain st_grade;
alter table st_info add constraint pk_stinfo primary key(ST_ID);
alter table st_grade add constraint pk_stinfo primary key(ST_ID);

/*insert 구문*/
insert into st_info values (202201,'LeeGiilDong','Game');
insert into st_info values (202202,'KimGiilDong','Computer');
insert into st_info values (202203,'HongGiilDong','Game');

insert into st_grade values (202201,80,70);
insert into st_grade values (202202,90,75);
insert into st_grade values (202203,95,85);
select * from st_info;
select * from st_grade;