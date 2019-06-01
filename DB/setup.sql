create table bookmark (
  id bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  url TEXT NOT NULL,
  title TEXT NOT NULL ,
  primary key (id),
  key `url` (url(255))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
