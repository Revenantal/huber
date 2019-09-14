<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Courgette&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/vendor/fullpage.min.css">
    <script src="https://kit.fontawesome.com/2de25a0315.js"></script>
    <link rel="stylesheet" href="/css/main.css">

    <title>Huber - Horse Ride Share</title>
    <meta name="description" content="The future of transportation is here!"/>

</head>
<body>


<div id="fullpage">
    <div class="section hero">

        <div class="overlay"></div>
        <video data-keepplaying playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="/video/huber.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <h1 class="display-3">Huber</h1>
                    <p class="lead mb-5">It's Like Uber The Only Difference Is You Ride A Horse</p>
                    <a href="#" id="startPickup" class="btn btn-lg btn-outline-light mb-0" role="button">Book A Ride Now</a>
                </div>
            </div>
        </div>

    </div>
    <div class="section bg-dark">

        <div id="map" class="h-66"></div>
        <div class="container h-33 py-4 text-center d-flex align-content-center flex-wrap horse-top">
            <div class="w-100">
                <div class="text-center mb-3">
                    <h2>We're not horsing around, we've dispatched a team to your location!</h2>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fas fa-clock fa-3x"></i>
                    <p>Estimated Arrival</p>
                    <p class="lead arrival-time">-</p>
                </div>
                <div>
                    <i class="fas fa-user fa-3x"></i>
                    <p>Your Rider</p>
                    <p class="lead rider-name">-</p>
                </div>
                <div>
                    <i class="fas fa-horse fa-3x"></i>
                    <p>Your Horse</p>
                    <p class="lead horse-name">-</p>
                </div>
            </div>
        </div>
        <div id="alert" class="floating-alert alert alert-dark fade w-100 text-center show" role="alert">
            <span id="alert-text" class="text-center">Please accept or decline your Geolocation.</span>
        </div>
    </div>
    <div class="section bg-dark">
        <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <div class="mb-5">
                        <a href="https://github.com/revenantal/huber" target="_blank" style="color:white;"><i class="fab fa-3x fa-github-square"></i></a>
                        <p>Built by Revenantal</p>
                    </div>
                    <div class="mb-5">
                        <a href="https://youtu.be/iVbvWnJBOTE" target="_blank" style="color:white;"><i class="fab fa-3x fa-youtube-square"></i></a>
                        <p>Based on Tales of Escape - Sleepy Hollow: Legend of the Headless Man-horse by Hummy's Vr Comedy</p>
                    </div>
                    <div>
                        <p>By the way... Credit pages are hard.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script type="text/javascript" src="/js/vendor/fullpage.min.js"></script>

<script src="/js/map.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkL3opVi71UP3rD2rnZEX7WdgjijzAx1k&callback=initMap"
            async defer></script>

<script src="/js/main.js"></script>
</body>
</html>