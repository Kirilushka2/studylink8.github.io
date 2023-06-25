const data = {
    test: 'привіт я працюю.',
    socials:[
        {
            name: 'Google',
            image:'https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHxitr63nqUsJWNuWIBQuZ57t4bT1sndzAw&usqp=CAU'
        },
        {
            
                name: 'Youtube',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vYBs7_HrbRjopuvwH2PZ_5dRAz3USmLspA&usqp=CAU'
            
        },
        {
            
                name: 'facebook',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehVal5CdTVTwApl_l77p5kq_PmpNFSsW6fWVjamBgP38uGLdViguTmMDm7STS2VqXW5Q&usqp=CAU'
            
        },
        {
            
                name: 'Twich',
                image:'https://static.twitchcdn.net/assets/studio-87913f287e70cb6b4ca3.png'
            
        },
        {
            
                name: 'twitter',
                image:'https://cdn-icons-png.flaticon.com/512/124/124021.png'
            
        }

    ],
    phones: [

    ]
}

const SocialsComponent = {
    props: ['social'],
    template: `<div class="card" style="width: 200; padding: 10px; margin: 10px;"><h2 class="text-center">{{social.name}}<h2>
    <img v-bind:src="social.image"
    style='width: 100px; height: 100px; margin: 0 auto;'>
</div>`

}


const PhoneComponent = {
    props:['phone'],
    temlete:`<div class="card" style="width: 18rem;">
    <img 
    v-bind:src="phone.img" 
        class="card-img-top" 
        alt="..."
        style="max-height: 300px; width: fit-content;margin: 0 auto;">
    <div class="card-body">
        <h5 class="card-title">{{phone.name}}</h5>
        <p class="card-text">{{phone.opus}}</p>
        <p class="d-flex justify-content-between">
          <span>Price:</span>
          <span>{{phone.price}} грн.</span>
        </p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
</div>`


}

const app = {
    data(){
        return data
    },
    methods:{

    },
    components: {
        SocialsComponent,PhoneComponent
    },
    mounted(){
        db.collection('tovari').get().then(res => {
            res.forEach(docum => {
                let phone = docum.data();
                phone.id = docum.id;
                this.phones.push(phone)
            })
        })
    }
}

Vue.createApp(app).mount('#app');
