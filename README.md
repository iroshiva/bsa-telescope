.sib_signup_box_inside_2 {
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 30px;
padding: 1rem;
width: fit-content;
}

.field-holder {
.label {
position: absolute;
transform: translateY(-45%);
top: 50%;
left: 0;
color: #6c6c6c;
/\* padding: 20px;
}

.input {
border: none;
margin: 0;
}
}

type="submit" {
margin: 0;
border-radius: 20px;
}

# Template d'installation de wordpress avec composer

# Installation

```sh
$ composer install
```

Installation des dossiers suivants :

- dossier vendor
- dossier wp
- dossier wp-content

# Création de la base de données

# wp-config.php

- dupliquer le wp-config-sample.php
- renommer en wp-config.php

Mettre les infos concernant :

- WP_HOME
- db_name
- db_user
- db_password

Mettre les clés et sel

Si besoin :

```sh
define( 'WP_MEMORY_LIMIT', '128M' );

// pour maj bo wp
define('FS_METHOD', 'direct');
```

# Installation de Wordpress

## Soit via composer CLI

```sh
wp core install --url=http://localhost/wp-oprofile --title="nom du site" --admin_user="username désiré pour l'admin" --admin_email="email de l'admin" --admin_password="password de l'admin"
```

## Soit via l'url WP

http://localhost:8080/app_name/wp/wp-admin/install.php

# Accès BO

http://localhost:8080/app_name/admin
