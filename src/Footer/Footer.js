export function Footer(){
    return(
        <>
            <footer>
                <div class="container-fluid mt-2">
                <div class="row p-3 pb-2 bg-dark text-light">
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <a class="navbar-brand" href="#">
                        <img class="logo rounded-circle" src="./assets/img/LogoTiendaGamer.png" alt="" width="100"/>
                        <p class="h3 text-light">Roger Federer</p>
                    </a>
                    <p class="text-secondary">La Mejor Tienda de PC Gamers en Colombia.</p>
                    <p class="text-secondary">Medellín, Antioquia</p>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <h4>Enlaces Rápidos</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link text-secondary" aria-current="page" href="#"><i class="bi bi-house-fill"></i> Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="./src/views/nuestraEmpresa.html"><i class="bi bi-building"></i> Nuestra Empresa</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="./src/views/tienda.html"><i class="bi bi-shop"></i> Tienda</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="./src/views/contactanos.html"><i class="bi bi-headset"></i> Contáctanos</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <h4>Síguenos en:</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link text-secondary" aria-current="page" href="https://es-la.facebook.com/" target="_blank"><i class="bi bi-facebook"></i> Facebook</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="https://www.youtube.com/" target="_blank"><i class="bi bi-youtube"></i> Youtube</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-secondary" href="https://twitter.com/?lang=es" target="_blank"><i class="bi bi-twitter"></i> Twitter</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-3">
                    <h4>Suscríbete a Nuestro Boletín</h4>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <h5 class="text-secondary">Para recibir ofertas y las últimas noticias.</h5>
                        </li>
                        <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="Check1"/>
                        <label class="form-check-label text-primary" for="exampleCheck1">He leído y acepto los términos y condiciones.
                        </label>
                        </div>
                        <li class="nav-item">
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Escriba su email para suscribirse a nuestra lista"/>
                        </li>
                        <li class="nav-item mt-2">
                        <button id="botonSuscribir" type="submit" class="btn btn-secondary">Suscribir</button>
                        </li>
                    </ul>
                    </div>
                    <div class="col-xs-12">
                    <p class="text-white text-center pt-4">Copyright - Tienda Gamer - Todos los derechos reservados © 2022 - Diego Alejandro Pérez.</p>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}