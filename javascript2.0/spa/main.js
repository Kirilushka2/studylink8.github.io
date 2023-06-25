document.addEventListener('DOMContentLoaded', async function(){
    let error = await axios.get("templates/404.html");
    let home = await axios.get("templates/home.html");
   
    const info = {
        test: 'Перевірка',
        currentPath: window.location.hash,
        phones:[]
    }

    const Phone = {
        template:phone.data,
        methods:{
            getTovars(){
                db.collection('tovari').get().then(res => {
                    res.array.forEach(docum => {
                        let phone = docum.data();
                        phone.in = docum.id;
                        this.$root.phones.push(phone)
                    })
                })
            }
        }
    }
    const Home = {
        template: home.data
    };

    const Error = {
        template: error.data
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/error': Error,
    }


    const  aplic = {
        data(){
            return info;
        },
        methods:{

        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || Error
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(aplic).mount('#first_spa')
})