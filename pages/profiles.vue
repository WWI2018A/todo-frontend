<template>     
  <div class="container-fluid p-0 profilepage">
    <div class="row-no-gutters" style="width: 100%;">


        <div class="skilllogos">
            <div v-for="(skill_icon, index) in skill_icon" v-bind:class="'skill'+(index+1)" >
                <div v-bind:class="'skillogo'+(index+1)">
                    <div class="logo">
                    <i v-bind:class="skill_icon" style="font-size: 30px;"></i>
                    </div>
                    <p style="font-size: 1rem; color: black;">{{ skill_name[index] }}</p>  
                </div>
            </div>
            <img v-bind:src="profilePicture" id="profilePictureLarge" class="profilePictureLarge" />
        </div>

        
        <img v-bind:src="profileWallpaper" id="profileWallpaper" class="profileWallpaper" />
        


        <div class="maininformation">
          <button type="button" class="btn editbutton" data-toggle="modal" data-target="#myModal">
            <i class="fas fa-user-edit editbutton" style="font-size: 20px;"></i>
          </button>

          <p class="displayname" id="displayname"> {{prename}} {{ name }}</p> 
          <div class="row displaysocialnetworks" id="displaysocialnetworks">
              <i v-for="social_icon in social_icon" v-bind:class="social_icon" style="font-size: 20px; margin: 0 auto;"></i>
          </div>
        </div>

        
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
            
             
              <div class="modal-header">
                <h4 class="modal-title">Benutzerdaten bearbeiten</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              
              
              <div class="modal-body center">
                <form @submit.prevent="onSubmit">

                <h1 style="font-size: 1.5rem"> Zum Bearbeiten Bild klicken </h1>
                <label for="file-input">
                    <img v-bind:src="profilePicture" id="profilePictureSmall" class="profilePictureSmall"/>
                </label>
                <input type="file" name="file-input" @change="onFileSelected" id="file-input" style="visibility: hidden;">

                <label for="file-input2">
                   <img v-bind:src="profileWallpaper" id="profilePictureSmall" class="profilePictureSmall"/> 
                </label>
                <input type="file" @change="onWallpaperSelected" id="file-input2" style="visibility: hidden;">
               
                <h1 style="font-size: 1.5rem"> Profildaten bearbeiten </h1>
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" name="name" v-model="name">
                      </div>
      
                      <div class="form-group">
                        <label for="pname">Vorname:</label>
                        <input type="text" class="form-control" id="pname" name="prename" v-model="prename">
                      </div>
                
                      <div class="form-group">
                        <label for="roles">Rolle:</label>
                        <input type="text" class="form-control" id="roles" name="roles" v-model="roles">
                      </div>

                      <div class="form-group">
                        <label for="description">Beschreibung:</label>
                        <input type="text" class="form-control" id="description" name="description" v-model="description">
                      </div>

                      <div class="form-group">
                        <label for="company">Firma:</label>
                        <input type="text" class="form-control" id="company" name="company" v-model="company">
                      </div>
      
                      <div class="form-group">
                        <label for="x-uid">User-ID:</label>
                        <input type="text" class="form-control" id="user_id" name="user_id" v-model="uid">
                      </div>

                      <div class="form-group">
                        <label for="quote">Zitat:</label>
                        <input type="text" class="form-control" id="quote" name="quote" v-model="quote">
                      </div>

                    <div class="form-group">
                        <label class="typo__label">Skills auswählen: </label>
                        <multiselect class="multiselect" v-model="skill_value" :options="skill_options" :multiple="true" :close-on-select="false" :clear-on-select="true" :preserve-search="true" placeholder="Wähle ein Skill aus" label="name" track-by="name" :preselect-first="false">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} ausgewählt</span></template>
                        </multiselect>
                    </div>

                    <div class="form-group">
                        <label class="typo__label">Soziale Netzwerke auswählen: </label>
                        <multiselect class="multiselect" v-model="social_value" :options="social_options" :multiple="true" :close-on-select="false" :clear-on-select="true" :preserve-search="true" placeholder="Wähle ein Netwerk aus" label="name" track-by="name" :preselect-first="false">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} ausgewählt</span></template>
                        </multiselect>
                    </div>

                    <div class="form-group">
                        <label class="typo__label">Betriebssystem auswählen: </label>
                        <multiselect class="multiselect" v-model="os_value" :options="os_options" :multiple="true" :close-on-select="false" :clear-on-select="true" :preserve-search="true" placeholder="Wähle ein Betriebssystem aus" label="name" track-by="name" :preselect-first="false">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} ausgewählt</span></template>
                        </multiselect>
                    </div>
                  
                  <div class="col-lg-12 center text-center">
                    <button class="btn btn-primary applySettingsButton roundCorners gradient330Deg" type="submit" style="margin-top: 20px">Apply Changes</button>
                  </div>
              
                
              </form>
              </div>
              
              
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>

        <div class="quote_container">
          <div class="quotation">
            <i class="fas fa-quote-right" style="font-size: 20px; color: black;"></i>
          </div>
          <p style="font-size: 1.5rem; font-weight: bold;">{{ quote }}</p>
        </div>
  

        <div class="extrainformation">
          <p style="font-size: 1rem; font-weight: bold;">Beschreibung:</p>
          <p style="font-size: 1rem;"> {{ description }}</p>
          <br>
          <p style="font-size: 1rem; font-weight: bold;">Rollen:</p>
          <p style="font-size: 1rem;"> {{ roles }}</p>
          <br>
          <p style="font-size: 1rem; font-weight: bold;">Firma:</p>
          <p style="font-size: 1rem;"> {{ company }}</p>
          <br>
          <p style="font-size: 1rem; font-weight: bold;">Zitat:</p>
          <p style="font-size: 1rem;"> {{ quote }}</p>
          <br>
          <p style="font-size: 1rem; font-weight: bold;">Betriebssystem:</p>
          <div class="row">
              <i v-for="os_icon in os_icon" v-bind:class="os_icon" style="font-size: 20px; color: black; margin-left: 5px;"></i>
          </div>
        </div>

        <div class="namesearch">

        </div>

    </div>
  </div>
  
    
  </div>

</template>

<script>
import axios from 'axios';
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import Multiselect from 'vue-multiselect';

export default {
  name: 'profile',
  components: {
      Multiselect
  },
    data() {
        return {
            name: "Name",
            prename: "Vorname",
            roles: "Rolle...",
            description: "Beschreibung...",
            uid: "x-uid...",
            quote: "Zitat...",
            company: "Firma...",
            social: [],
            logo: [],
            skill: [],
            os_value: [],
            os_icon: [],
            os_name: [],
            os_options:   [      
              { name: 'Windows', icon: 'fab fa-windows' },
              { name: 'Linux', icon: 'fab fa-linux' },
              { name: 'Ubuntu', icon: 'fab fa-ubuntu' },
              { name: 'Suse', icon: 'fab fa-suse' },
              { name: 'CentOS', icon: 'fab fa-centos'},
              { name: 'MacOS', icon: 'fab fa-apple' },
              { name: 'Android', icon: 'fab fa-android' },
              { name: 'IOS', icon: 'fab fa-app-store-ios' },
            ],
            skill_value: [],
            skill_name: [],
            skill_icon: [],
            skill_options: [
              { name: 'HTML', icon: 'fas fa-code'},
              { name: 'JavaScript', icon: 'fab fa-js'},
              { name: 'Java', icon: 'fab fa-java'},
              { name: 'Docker', icon: 'fab fa-docker'},
              { name: 'Python', icon: 'fab fa-python'},
              { name: 'Angular', icon: 'fab fa-angular'},
              { name: 'Android', icon: 'fab fa-android'},
              { name: 'Swift', icon: 'fab fa-swift'},
              { name: 'PHP', icon: 'fab fa-php'}
            ],
            social_value: [],
            social_name: [],
            social_icon: [],
            social_options: [
              { name: 'Snapchat', icon: 'fab fa-snapchat-ghost'},
              { name: 'Facebook', icon: 'fab fa-facebook-square'},
              { name: 'Instagram', icon: 'fab fa-instagram'},
              { name: 'Twitter', icon: 'fab fa-twitter'},
              { name: 'GitHub', icon: 'fab fa-github'},
              { name: 'LinkedIn', icon: 'fab fa-linkedin'}
            ],
            profilePicture: "/images/Example.jpg",
            profileWallpaper: "/images/Wallpaper.jpg"
        }
    },
  asyncData() {
      return axios.get('http://localhost:4000/profiles/').then(res => {
        return {
          profiles:res.data
        }
      })
    },
    methods: {

        onFileSelected(event) {
            let fd = new FormData();
            fd.append('file-input', event.target.files[0])
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = e => {
                this.profilePicture = e.target.result
            }
            axios.post('http://localhost:4000/profiles/imageupload/profilepicture', 
              fd,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            )
            .then(res => {
              this.profilePicture = res.data
              console.log(this.profilePicture)
            })         
            
            
        },
        onWallpaperSelected(event) {
            let fd = new FormData();
            fd.append('file-input', event.target.files[0])
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = e => {
                this.profileWallpaper = e.target.result
            }
            axios.post('http://localhost:4000/profiles/imageupload/wallpaper', 
              fd,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            )
            .then(res => {
              this.profileWallpaper = res.data
              console.log(this.profileWallpaper)
            })   
        },
        onSubmit(event) {
          this.os_name = [];
          this.os_icon = [];
          this.social_name= [];
          this.social_icon = [];
          this.skill_name = [];
          this.skill_icon = [];

          for(var i=0; i<this.os_value.length; i++){
            this.os_name[i] = this.os_value[i].name
            this.os_icon[i] = this.os_value[i].icon
          };
          for(var i=0; i<this.skill_value.length; i++){
            this.skill_name[i] = this.skill_value[i].name
            this.skill_icon[i] = this.skill_value[i].icon
          }
          for(var i=0; i<this.social_value.length; i++){
            this.social_name[i] = this.social_value[i].name
            this.social_icon[i] = this.social_value[i].icon
          }
          console.log({
            'uid': this.uid,
            'name': this.name,
            'prename': this.prename,
            'company': this.company,
            'quote': this.quote,
            'description': this.description,
            'roles': this.roles,
            'os': this.os_name,
            'os_icons': this.os_icon,
            'skill': this.skill_name,
            'skill_icons': this.skill_icon,
            'social': this.social_name,
            'social_icons': this.social_icon,
            'profilePicture': this.profilePicture,
            'profileWallpaper': this.profileWallpaper,
          })
          axios.put('http://localhost:4000/profiles/', 
          {
            'uid': this.uid,
            'name': this.name,
            'prename': this.prename,
            'company': this.company,
            'quote': this.quote,
            'description': this.description,
            'roles': this.roles,
            'os': this.os_name,
            'os_icons': this.os_icon,
            'skills': this.skill_name,
            'skills_icons': this.skill_icon,
            'social': this.social_name,
            'social_icons': this.social_icon,
            'profilePicture': this.profilePicture,
            'profileWallpaper': this.profileWallpaper,
          },
          {
                headers: {
                    'Content-Type': 'application/json'
                }
              }
            )
            .then(res => {
              console.log(res.data)
            }) 
        }
    },
    mounted() {

    this.profilePicture = this.profiles[0].profilePicture;
    this.profileWallpaper = this.profiles[0].profileWallpaper;
    this.company = this.profiles[0].company;
    this.name = this.profiles[0].name; 
    this.prename = this.profiles[0].prename;
    this.roles = this.profiles[0].roles;
    this.description = this.profiles[0].description;
    this.uid = this.profiles[0].uid;
    this.quote = this.profiles[0].quote
    
    for(var i=0; i<this.profiles[0].skills.length; i++){
      this.skill_name[i] = this.profiles[0].skills[i]
      this.skill_icon[i] = this.profiles[0].skills_icons[i]
    }
    for(var i=0; i<this.profiles[0].os.length; i++){
      this.os_name[i] = this.profiles[0].os[i]
      this.os_icon[i] = this.profiles[0].os_icons[i]
    }
    for(var i=0; i<this.profiles[0].social.length; i++){
      this.social_name[i] = this.profiles[0].social[i]
      this.social_icon[i] = this.profiles[0].social_icons[i]
    }

  
    }
};

</script>

<style scoped>
.profilepage {
  font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
}

/*Skillsection */
.skilllogos{
    width: 300px;
    height: 300px;
    position: relative;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.3);
    padding-top: 30px;
    padding-left: 8px;
    border-radius: 50%;
    margin-top: 500px;
    margin: 200px auto 0px;
    transition: all ease-in-out .4s;  
}
.skilllogos:hover{
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.5);
}

.logo {
    position:absolute;   
    top:0px;
    right:0px;
    transition:ease-out .3s;   
}

.logo:hover{
    opacity: 0; 
}

.skill1 {
    z-index: 4;
    position: absolute;
    top: 30px;
    left: -80px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill2 {
    z-index: 4;
    position: absolute;
    top: 8px;
    left: -40px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill3 {
    z-index: 4;
    position: absolute;
    top: 50px;
    left: -115px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill4 {
    z-index: 4;
    position: absolute;
    top: 85px;
    left: -130px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill5 {
      z-index: 4;
    position: absolute;
    top: 12px;
    left: 9px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill6 {
    z-index: 4;
    position: absolute;
    top: 30px;
    left: 50px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill7 {
    z-index: 4;
    position: absolute;
    top: 120px;
    left: -140px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill8 {
    z-index: 4;
    position: absolute;
    top: 65px;
    left: 85px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black;
}

.skill9 {
    z-index: 4;
    position: absolute;
    top: 105px;
    left: 115px;
    width: 180px;
    height: 25px;
    text-align: center;
    transition: all ease-in-out .4s;
    clip-path: circle(25% at 95% 50%);
    background-color: #ffffff00;
    color:black
}

.skill1:hover, .skill2:hover, .skill3:hover, .skill4:hover, .skill5:hover, .skill6:hover, .skill7:hover, .skill8:hover, .skill9:hover,
.skill1:focus, .skill2:focus, .skill3:focus, .skill4:focus, .skill5:focus, .skill6:focus, .skill7:focus, .skill8:focus, .skill9:focus{
    z-index: 6;
    transform: scale(1.3);
    clip-path: circle(75%);
    border-radius: 20px;
    box-shadow: 0px 3px 9px rgba(0,0,0,0.12),
                0px 3px 18px rgba(0,0,0,0.08);
    background:white;
    color: white;
    outline:none;
}


/*Background*/
.profileWallpaper {
    width: 100vw;
    height: 700px;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%);
    position:absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}
.profilePictureLarge {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    border:10px solid white;
    object-fit: cover;
    z-index: 5;
    position: absolute;
    top: 45px;
    left: 45px;
    transition: all ease-in-out .3s;
}
.profilePictureLarge:hover{
    transform: scale(1.05);
    border-radius: 50%;
    border:1px solid rgba(186,214,229);
}
.profilePictureSmall {
    width: 210px;
    height: 210px; 
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto; 
}
.profileWallpaperSmall {
    width: 400px;
    height: 210px; 
    object-fit: cover;
}

.displayname{
    text-align:center;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
}

.displaysocialnetworks{
    margin: 0 auto;
    margin-top: 10px; 
    text-align: center;
    width: 200px;
    color: black;
}





.maininformation {
    position: absolute;
    top: 500px;
    left: 15vw;
    z-index: 1;
    width: 70vw;
    padding-bottom: 20px;
    border-bottom: 1px solid #808080;
}

.editbutton {
  position: absolute;
  top: 0px;
  right: 0px;
  color: black;
}

.quote_container {
  position: absolute;
  top: 650px;
  left: 30vw;
  width: 40vw;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid black;
}

.quotation {
  position: absolute;
  top: -5px;
  left: -20px;
  padding: 5px;
  background-color: rgba(186,214,229);
  border: 1px solid black;
}
.extrainformation {
    position: absolute;
    top: 750px;
    left: 30vw;
    z-index: 1;
    width: 40vw;
    padding-bottom: 20px;
}

.editbutton:hover {
    transform: scale(1.2);
}

.multiselect {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}


</style>