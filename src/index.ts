import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
        <html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="icon" href="./_app/immutable/assets/CocoPing.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CocoPing</title>

    <link href="./_app/immutable/assets/0.CSWyIWmr.css" rel="stylesheet">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/nodes/0.C7c17wRl.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/JQJQZOt7.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/IHki7fMi.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/_gvPNOLT.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/BkwsH6bi.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/DZINsjB2.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/CYScPZFq.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/CEIv8ZXC.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/D4I_maOM.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/N_WEJC7g.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/nodes/1.Bd3O-1gr.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/nodes/2.N2CXW40F.js">
    <link rel="modulepreload" as="script" crossorigin=""
        href="https://pizzahat.vercel.app/_app/immutable/chunks/DfsAhN9J.js">

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</head>

<body class="bg-primary text-accent_4" data-sveltekit-preload-data="hover" data-aos-easing="ease"
    data-aos-duration="400" data-aos-delay="0">
    <div style="display: contents">
        <div 
            class="bg-primary/30 backdrop-blur-[3px] pl-3 md:pl-12 pr-3 md:pr-12 py-3 mb-3 flex justify-between items-center border-b border-accent_5/20">
            <div class="text-lg font-semibold" data-svelte-h="svelte-1or2u8a"><a href="/"><img
                        src="./_app/immutable/assets/CocoPing.png" alt="logo" draggable="false"
                        class="hidden md:block md:h-20 ml-6"></a> <a href="/"><img
                        src="./_app/immutable/assets/bot-logo.png" alt="pfp" draggable="false"
                        class="rounded-full block md:hidden h-10"></a></div> <button id="login-and-discord"
                class="rounded-lg p-1 md:p-2 mt-2 md:mt-5 md:m-2 lg:m-2 bg-indigo-500 hover:bg-indigo-400"
                data-svelte-h="svelte-1hmcvxq"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                    viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    class="inline-block">
                    <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z">
                    </path>
                </svg> <span class="font-medium" >Panel de control</span></button>
        </div>

        


        <main>
            <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-24">
                <div
                    class="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-10 md:pt-0">
                    <div class="order-2 md:order-1 text-center md:text-left max-w-xl">
                        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 aos-init aos-animate"
                            data-aos="fade-up" data-svelte-h="svelte-1bieo29">CocoPing</h1>
                        <p class="text-accent_5 text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="50" data-svelte-h="svelte-yp8aft">Bot multiusos. <br>
                            Facil de usar. <br>
                            Seguro.</p>
                        <!-- <p class="bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 text-transparent bg-clip-text text-sm sm:text-base mb-6 md:mb-8 aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="100" data-svelte-h="svelte-czvqki">Serving
                            <span>150</span>k+ users in <span>200</span>+ servers
                        </p> -->
                        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="150"><button
                                class="w-full sm:w-auto text-white font-normal rounded-lg px-6 py-3 bg-accent_1 hover:bg-accent_1_hover transition-colors"
                                data-svelte-h="svelte-six92o"><a
                                    href="https://discord.gg/QenhUSNaGj"
                                    target="_blank" class="whitespace-nowrap">Añadir a Discord</a></button> <button
                                class="w-full sm:w-auto text-white font-normal rounded-lg px-6 py-3 bg-accent_2 border-2 border-accent_5 hover:bg-accent_2_hover transition-colors"
                                data-svelte-h="svelte-13ksnd1" id="section-features">Explorar funciones</button></div>
                    </div>
                    <div class="order-1 md:order-2 flex-shrink-0" data-svelte-h="svelte-oubit3"><img alt="logo"
                            class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full animate-bounce aos-init aos-animate"
                            draggable="false" src="./_app/immutable/assets/CocoPing.png" data-aos="fade-up"
                            data-aos-delay="50"></div>
                </div>
            </section>
            <section class="p-4 md:p-10" id="features">
                <div class="mt-5 md:mt-7">
                    <div class="mx-auto w-full max-w-[1240px] px-6 lg:px-10 !py-16 lg:!py-40">
                        <div class="grid grid-cols-1 gap-12 lg:gap-36">
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                <div class="hidden lg:grid grid-cols-7 gap-16">
                                    <div
                                        class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left">
                                        <h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Moderacion potente</h2>
                                        <p class="text-accent_5 text-base my-8 whitespace-pre-line">Experimenta la potencia de las funciones de moderación de CocoPing, diseñadas para que tu servidor de Discord funcione sin problemas. Gracias a sus capacidades avanzadas, nuestras herramientas de moderación permiten a los administradores y moderadores mantener el orden, hacer cumplir las normas y garantizar un entorno comunitario seguro y agradable.</p>
                                    </div>
                                    <div class="col-span-4"><img alt="mod"
                                            class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
                                            src="./_app/immutable/assets/moderation.png"></div>
                                </div>

                            </div>
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                <div class="hidden lg:grid grid-cols-7 gap-16">
                                    <div class="col-span-4"><img alt="logging"
                                            class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
                                            src="./_app/immutable/assets/youtube-notifications.png"></div>
                                    <div
                                        class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left">
                                        <h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Notificaciones de youtube</h2>
                                        <p class="text-accent_5 text-base my-8 whitespace-pre-line">CocoPing ofrece un comando para colocar notificaciones de youtube, es decir cuando el canal suba un nuevo video el bot lo notificara por el canal elejido por el administrador del servidor.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                <div class="hidden lg:grid grid-cols-7 gap-16">
                                    <div
                                        class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left">
                                        <h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Sistema de niveles</h2>
                                        <p class="text-accent_5 text-base my-8 whitespace-pre-line">CocoPing cuenta con un sistema de niveles robusto y versátil. Ofrece múltiples comandos para personalizar las notificaciones de ascenso de nivel, permitiéndote elegir si deseas recibirlas en el canal donde ocurrió o en un canal específico designado. Además, incluye herramientas avanzadas para gestionar la experiencia de los usuarios, otorgando o reduciendo puntos según sea necesario.</p>
                                    </div>
                                    <div class="col-span-4"><img alt="tickets"
                                            class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
                                            src="./_app/immutable/assets/xp-system.png"></div>
                                </div>
                                
                            </div>
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                <div class="hidden lg:grid grid-cols-7 gap-16">
                                    <div class="col-span-4"><img alt="games"
                                            class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:ml-0 lg:mr-auto"
                                            src="./_app/immutable/assets/welcome-system.png"></div>
                                    <div
                                        class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left">
                                        <h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Sistema de bienvenidas</h2>
                                        <p class="text-accent_5 text-base my-8 whitespace-pre-line">CocoPing ofrece un sistema de bienvenida personalizable que permite a los administradores recibir a nuevos miembros de forma automática. Configura mensajes de bienvenida en el canal que desees, personaliza el contenido y asegúrate de que cada nuevo miembro se sienta parte de la comunidad desde el primer momento.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                <div class="hidden lg:grid grid-cols-7 gap-16">
                                    <div
                                        class="col-span-3 flex flex-col justify-center items-start text-center lg:text-left">
                                        <h2 class="mx-auto lg:mx-0 font-bold text-[35px] leading-[42px]">Sistema de invitaciones
                                        </h2>
                                        <p class="text-accent_5 text-base my-8 whitespace-pre-line">CocoPing incluye un sistema avanzado de seguimiento de invitaciones. Mediante comandos para administradores puedes configurar un canal específico donde se publique automáticamente quién invitó a cada nuevo miembro y el recuento actualizado de usuarios del servidor. También permite personalizar los mensajes de bienvenida, excluir invitaciones generadas por bots, ajustar contadores manualmente y consultar un ranking de invitadores para premiar a los miembros más activos. Estas herramientas facilitan la moderación y fomentan el crecimiento ordenado de la comunidad.</p>
                                    </div>
                                    <div class="col-span-4"><img alt="polls"
                                            class="rounded-xl w-full max-w-[560px] ml-auto mr-auto lg:mr-0 lg:ml-auto"
                                            src="./_app/immutable/assets/invitations-system.png"></div>
                                </div>
                                
                            </div>
                            <div data-aos="fade-up" class="aos-init aos-animate">
                                
                                
                            </div>
                            <div data-svelte-h="svelte-1funbln">
                                <h3 class="p-0 md:p-0 m-0 md:m-0 font-semibold text-3xl md:text-4xl text-center aos-init aos-animate"
                                    data-aos="fade-up" data-aos-delay="100">Y mucho mas!</h3>
                                <div class="text-center mt-0 md:mt-5 aos-init aos-animate" data-aos="fade-up"
                                    data-aos-delay="200"><button
                                        class="text-white font-medium rounded-lg p-2 md:p-4 mt-2 md:mt-5 md:m-2 lg:m-2 bg-accent_1 hover:bg-accent_1_hover"><a
                                            href="https://discord.gg/QenhUSNaGj"
                                            target="_blank">Añadir al servidor</a></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div class="sticky top-[100vh]" data-svelte-h="svelte-24s7qa">
            <footer
                class="bg-primary_dark relative flex flex-col justify-center items-center w-full box-border p-5 mt-auto">
                <div class="flex flex-col lg:flex-row justify-between gap-6 max-w-screen-lg w-full">
                    <div class="flex items-center lg:-ml-32"><img src="./_app/immutable/assets/CocoPing.png"
                            alt="logo" draggable="false"
                            class="rounded-full flex items-center h-12 w-12 lg:h-20 lg:w-20 mr-3">
                        <div class="flex flex-col">
                            <h1 class="text-2xl lg:text-5xl font-bold flex items-center">CocoPing</h1> <span
                                class="text-accent_5 text-sm font-normal">Tu mejor compañero de Discord!</span>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-4 lg:gap-x-40">
                        <div class="flex flex-col gap-y-3">
                            <div class="font-medium">Navegación</div>
                            <div class="flex flex-col gap-y-1 lg:gap-y-3"><a href="/"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Inicio</a>  <a
                                    href="https://dashboard-cocoping.vercel.app/"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Dashboard</a></div>
                        </div>
                        <div class="flex flex-col gap-y-3">
                            <div class="font-medium">CocoPing</div>
                            <div class="flex flex-col gap-y-1 lg:gap-y-3"><a
                                    href="https://discord.gg/QenhUSNaGj"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Invitar</a> <a
                                    href="https://discord.gg/QenhUSNaGj"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Soporte</a></div>
                        </div>
                        <div class="flex flex-col gap-y-3">
                            <div class="font-medium">Empresa</div>
                            <div class="flex flex-col gap-y-1 lg:gap-y-3">
                                <a
                                    href="https://playful-node-e59.notion.site/Empleos-disponibles-para-CocoPing-1e4a0c26c3378018815ef576ce234c92#2a9a0c26c337800abbddf6375f14d8f9"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Empleos</a><a
                                    href="https://github.com/Coconube-Software/Coco-Ping/blob/main/TERMS_OF_SERVICE.md"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Terms of Service</a> <a
                                    href="https://github.com/Coconube-Software/Coco-Ping/blob/main/PRIVACY_POLICY.md"
                                    class="text-accent_5 hover:text-accent_4 hover:underline">Privacy Policy</a> <a
                                    href="https://github.com/Coconube-Software/Coco-Ping/blob/main/LICENSE"
                                    class="text-accent_5 hover:text-accent_4">License</a></div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 lg:mt-14 text-accent_5 text-sm lg:text-base">© 2025 Coconube Inc. Todos los derechos reservados.</div>
            </footer>
        </div>
        <div id="svelte-announcer" aria-live="assertive" aria-atomic="true"
            style="position: absolute; left: 0px; top: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px;">
        </div>
    </div>


    

    <script>
        document.getElementById("section-features").addEventListener("click", () => {
            const section = document.getElementById("features");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    </script>

    <script>
        document.getElementById("login-and-discord").addEventListener("click", () => {
            window.location.href = "https://dashboard-cocoping.vercel.app/"; // cambia el enlace por el que quieras
        });
    </script>
</body>

</html>
  `)
})

//app.get('/team', function (req, res) {
//  res.sendFile(path.join(__dirname, '..', 'components', 'team.htm'))
//})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
