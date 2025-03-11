const app = Vue.createApp({
    data() {
        return {
            menu_abierto: false,
            currentSlide: 0,
            imagenes: [
                { src: 'assets/img/exiles_01.jpg', alt: 'Image 1' },
                { src: 'assets/img/exiles_02.jpg', alt: 'Image 2' },
                { src: 'assets/img/exiles_03.jpg', alt: 'Image 3' }
            ],
            datos: {
                proyectos: []
            }
        }
    },
    methods: {
        toggleMenu() {
            console.log('Toggle menu clicked');
            this.menu_abierto = !this.menu_abierto;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.imagenes.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.imagenes.length) % this.imagenes.length;
        }
    },
    mounted() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.datos = data;
            })
            .catch(error => {
                console.error('error loading data.json:', error);
            });
    },
})

app.mount('#app')