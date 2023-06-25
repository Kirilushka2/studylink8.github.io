 document.addEventListener('DOMContentLoaded', async function(){
                let card_phone = await axios.get("template/card_phone.html");
                
                console.log(card_phone.data);

                const infa = {
                    test: 'Провірка',
                    tovari: []
                }

                const cardProduct = {
                    props: ['product'],
                    templete: card_phone.data
                }
                const dodatok = {
                    data (){
                        return infa
                    },
                    methods: {
                        getTovari(){ db.collection('tovari').get().then(res => {
                            res.forEach(docum => {
                                let phone = docum.data();
                                phone.id = docum.id;
                                this.tovari.push(phone)
                            })
                        })}
                    },
                    components: {
                        'cp':cardProduct
                    },
                    mounted(){
                        this.getTovari()
                    }
                }

                Vue.createApp(dodatok).mount('#prodycts')

            })
           