<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


        }

        .pagination-links {
            display: flex;
            gap: 50px;
          
        }





        a {
            text-decoration: none;
            color: inherit;
        }

        body {
            display: flex;
            flex-direction: column;
            width: auto;
            height: auto;
            gap: 30px;
        }

        .navbar {

            margin-top: 20px;
            margin-bottom: 20px;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;


        }

        .navbar-content {
            background-color: white;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70%;
            height: 80px;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            border: 1px solid;
            z-index: 3;
        }

        .navbar-content>* {
            display: flex;
            width: 30%;
            background-color: white;
        }

        @media screen and (max-width: 713px) {

            .menu,
            .auth {
                display: none !important;
            }
        }

        .logo {
            cursor: pointer;
            user-select: none;
            font-size: 30px;
            font-weight: bold;
            display: flex;
            justify-content: space-evenly;
        }

        .menu {

            display: flex;
            justify-content: space-evenly;


        }

        .menu-item {
            font-size: 18px;
            user-select: none;
            cursor: pointer;
            line-height: 2;
        }

        .menu-item.active {
            border-bottom: 1px solid;

        }

        .auth {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .auth .login,
        .auth .register {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            padding: 12px 25px;
            border-radius: 10px;
            user-select: none;
        }

        .username {
            font-weight: bold;
            font-size: 18px;
        }

        .auth>*:hover {
            opacity: 70%;
        }

        .auth form button {
            background-color: white;
            padding: 12px 25px;
            border: 1px solid;
            border-radius: 10px;
        }

        .auth form button:hover {
            background-color: #b00000;
            color: white;
            border: 2px solid black;
        }

        .register {
            background-color: black;
            color: white;

        }

        .index {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .index-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .index-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .card-header {
            display: flex;
            width: 70%;
            justify-content: space-between;
            align-items: center;
        }

        .float-end {
            background-color: black;
            border-radius: 10px;
            padding: 10px;
            color: white;

        }

        .card-body {
            width: 70%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            padding-bottom: 50px;
        }

        .custom-item-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            flex: 1;
            align-items: end;
            width: 250px;
            height: 270px;
            max-width: 200px;
            min-width: 200px;
            max-height: 250px;
            min-height: 250px;
            background-color: black;
            border-radius: 10px;
            color: white;
            padding: 10px;
            position: relative;
            z-index: 1;
            background-position: center;
            background-size: cover;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

        }

        .custom-item-container:hover {
            transform: scale(150%);
            z-index: 2;
            transition: all 0.3s ease;
            border-radius: 10px 10px 0px 0px;
        }

        .custom-item-actions {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            width: auto;
            height: auto;
            transition: opacity 0.5s ease;
            opacity: 1;
            margin: 5px;
            z-index: -1;
            opacity: 0;
            top: 0px;
            right: 0;


        }

        .custom-item-actions form {
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            text-align: center;
            flex-direction: column;
            gap: 10px;
            padding: 5px;
            border-radius: 5px;
            border: 0.5px solid;
            font-size: 8px;


        }

        .custom-item-actions form button {
            cursor: pointer;
            width: auto;
            font-size: 8px;
            background-color: transparent;
            border: 0px;
            outline: none;
            color: white;
        }

        .custom-item-description {
            position: absolute;
            bottom: -60px;
            right: 0;
            border-radius: 0px 0px 10px 10px;
            background-color: black;
            color: white;
            width: 100%;
            padding: 10px;
            opacity: 0;
            transition: opacity 0.5s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

        .custom-item-title {
            font-weight: bold;
        }

        .custom-item-description>* {
            text-align: center;
            font-size: 15px;
        }

        .custom-item-container:hover .custom-item-description,
        .custom-item-container:hover .custom-item-actions {
            animation: ttb 0.5s ease-in-out forwards;
            transition: all 0.5s ease;

        }

        .custom-item-image {

            position: relative;
            border-radius: 10px;
            height: 100%;
            z-index: 0;
            min-height: 200px;

        }

        .custom-item-image img {

            width: auto;
            max-width: 200px;

        }

        @keyframes ttb {
            0% {
                transform: translateY(-30px) rotate(0deg)scale(0%);
            }

            50% {
                transform: scale(110%)
            }

            100% {
                transform: translateY(0px) scale(100%);
                opacity: 1;
                filter: blur(0%);
            }
        }

        /* create */
        .form {
            margin-top: auto;
            margin-bottom: auto;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header {
            display: flex;
            gap: 20px;
            justify-content: space-between;
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            font-weight: bold;
            text-align: start;
            text-wrap: wrap;
            text-overflow: clip;
            overflow: auto;

        }

        .back-link {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;

            border-radius: 10px;


        }

        .back-link a img {
            width: 30px;
            height: 30px;

        }

        .form-container {
            width: 70%;
            max-width: 600px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 40px;
            border: 1px solid;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            white-space: wrap;
            text-overflow: clip;
            text-overflow: ellipsis;


        }

        .form-group {
            gap: 5px;
            display: flex;
            flex-direction: column;

        }

        .form-group input[type="text"] {
            height: 35px;

            border: 0.5px solid gray;
            padding: 10px;
            border-radius: 5px;
            text-align: left;

        }

        .form-group input[type="text"]:focus {
            outline: 1px solid black;
            box-shadow: none;

        }

        .form-group input[type="email"] {
            height: 35px;

            border: 0.5px solid gray;
            padding: 10px;
            border-radius: 5px;
            text-align: left;

        }

        .form-group input[type="email"]:focus {
            outline: 1px solid black;
            box-shadow: none;

        }

        .form-group input[type="password"] {
            height: 35px;

            border: 0.5px solid gray;
            padding: 10px;
            border-radius: 5px;
            text-align: left;

        }

        .form-group input[type="password"]:focus {
            outline: 1px solid black;
            box-shadow: none;

        }

        .form-group input[type="file"] {
            background-color: white;
        }

        .form-group input[type="submit"] {
            background: black;
            color: white;
            font-size: 15px;
            cursor: pointer;
            padding: 5px;
            margin-top: 10px;
            height: 50px;
            border-radius: 5px;

        }

        .form-group button[type="submit"] {
            background: black;
            color: white;
            font-size: 15px;
            cursor: pointer;
            padding: 5px;
            margin-top: 10px;
            height: 50px;
            border-radius: 5px;

        }


        .form-content form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }


        /* pagination */

        .custom-pagination-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 150px;

        }

        .pagination-desktop {
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .pagination {
            display: flex;
            font-size: 18px;


            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .page-item.active {
            border: 1px solid;
            padding: 7px 10px;
            border-radius: 10px;
        }

        .page-item {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            transform: scale(180%);
            text-align: center;

        }

        .page-link {
            width: 10vw;
        }

        /* whow */
        .details-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            border-radius: 10px;
            padding: 4vw;
            margin-bottom: 200px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        }

        .details-container h2 {
            font-size: 5vw;
        }

        .details-container p {
            font-size: 2vw;
        }

        .form-container-show {
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

        }

        .image-container img {
            width: 100%;
            margin-top: 20px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
        }

        @media screen and (max-width: 713px) {

            .details-container:hover,
            .image-container img:hover {

                align-items: center;
                justify-content: center;

                width: 150%;

            }
        }

        .detail-top {
            display: flex;
            font-size: 16px;
            align-items: center;
            justify-content: center;
        }

        .header-show {
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    </style>

</head>

<body>
    @inertia
</body>

</html>