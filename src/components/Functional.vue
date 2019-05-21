<template>
  <div class="functional">

    <h1>Functional spec</h1>
    <p>
      Prototype the following project:
    </p>
    <h3>GitHub Followers</h3>
    Create a service that allows for a user to search for a GitHub username. On a successful search return, display the user's GitHub handle, follower count, and a list of the user's followers (just the avatar is fine). Since some users (e.g. mrdoob, holman, etc.) have many thousands of followers, GitHub only returns a portion of the followers with each request. Create a "load more" button that, when clicked, fetches the next payload of followers. This button should persist until there are no more pages of followers to fetch.
    <br/>
    -
    <br/>
    Information on the GitHub API is available here: 
      <a href="https://developer.github.com/v3/" target="_blank" rel="noopener">GitHub API</a>.
    <br/>
    -
    <br/>
    The UX/UI is totally up to you. If you like, get creative and add additional features a user might find useful!
      <a href="https://github.com/RauxaRepo/Rauxa-UI-Code-Challenge/blob/master/coding_guidelines.md" target="_blank" rel="noopener">Coding Guidelines can be found here</a>.

    <h1>Try out:</h1>

    <div id="main">

        <v-layout>
            <v-flex xs6 sm10 offset-sm3>
            <v-text-field
                :rules="['Required']"
                placeholder="Enter a GitHub username..."
                v-model="username"
                @keypress.native.enter="search()"
                ref="inputusername"
                id="inputusername"
                class="username"
            >{{ givenuser }}</v-text-field>
            <v-btn block v-on:click="search()" class="search" dark>Search</v-btn>

            <span class="loading" v-if="loading">Searching GitHub for "{{ username }}"...</span>

            <div class="box" v-if="results && !loading || error && !loading">

                <div v-if="results" class="center">
                    <v-img v-if="results.avatar_url" 
                        :src="results.avatar_url" 
                        :alt="'GitHub Avatar for ' + username ">
                    </v-img>
                    <v-card-title primary-title v-if="results.name">
                        <div>
                            <h3 class="headline mb-0 resultsname">{{ results.name }}</h3>
                            <div>
                                <i v-if="results.bio">Bio: {{ results.bio }}</i>
                                <p v-if="results.location">Location: {{ results.location }}</p>
                                <p v-if="results.following">Following: {{ results.following }}</p>
                                <p v-if="results.followers" id="followers" ref="followers">Followers: {{ results.followers }}</p>
                            </div>
                        </div>
                    </v-card-title>
                    
                </div>

                <span v-if="error">Sorry, can't find a user called "<i>{{ username }}</i>"!</span>

            </div>
            <v-card v-if="followers">
                <p v-if="results.followers">Page {{ page }} of {{ pages }}</p>
                <v-container grid-list-sm fluid>
                <v-layout 
                    row 
                    wrap 
                    fill-height
                    align-center
                    justify-center
                    ma-0
                >
                    <v-flex
                    v-for="follower in followers" 
                    :key="follower.login"
                    v-bind:avatar_url="follower.avatar_url"
                    xs1
                    d-flex
                    >
                    <v-card flat tile class="d-flex">
                        <v-img
                            v-if="follower.avatar_url" 
                            :src="follower.avatar_url"
                            :lazy-src="follower.avatar_url"
                            aspect-ratio="1"
                            class="grey lighten-2"
                        >
                        <template v-slot:placeholder>
                            <v-layout
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        </template>
                        </v-img>
                    </v-card>
                    </v-flex>
                </v-layout>
                <div v-if="Math.floor(results.followers/100) > 1" id="loadmore">
                    <v-btn block v-on:click="loadmore" class="loadmore" dark>loadmore</v-btn>
                </div>
                </v-container>
            </v-card>
            </v-flex>
        </v-layout>

    </div>

  </div>
</template>

<script>
    import axios from 'axios';
    
    /**
    if (this.givenuser) {
        this.username = this.givenuser
        this.search();
    } */

    export default {
        name: 'Functional',
        props: {
            givenuser: String
        },
        data () {
            return {
                username: '',
                results: '',
                error: '',
                loading: false,
                page: '',
                pages: '',
                followers: '',
            }
        },
        watch: {
            username: function (val) {
                this.error = '';
            }
        },
        methods:  {
            search: function() {
                if( this.username ){
                    this.loading = true;
                    console.log("Searching for... " + this.username );
                    axios.get('https://api.github.com/users/' + this.username)
                        .then(response => {
                            axios.get('https://api.github.com/users/' + this.username + '/followers?per_page=100')
                                .then(followers => {
                                    let pages = (response.data.followers < 100) ? 1 : Math.floor(response.data.followers/100);
                                    this.pages = pages;
                                    this.followers = followers.data;
                                    this.page = 1;
                                    this.results = response.data;
                                    this.error = '';
                                    this.loading = false;
                            });
                        })
                        .catch(error => {
                            this.results = '';
                            this.error = error;
                            this.loading = false;
                            this.followers = '';
                            this.page = 0;
                            this.pages = 0;
                        });
                } else {
                    this.results = '';
                    this.error = '';
                    this.loading = false;
                    this.followers = '';
                    this.page = 0;
                    this.pages = 0;
                }
            },
            loadmore: function() {
                this.page++;
                if ( this.pages > 1 && this.page < this.pages) {
                    axios.get('https://api.github.com/users/' + this.username + '/followers?per_page=100&page=' + this.page)
                        .then(followers_next => {
                            followers_next.data.forEach(follower => this.followers.push(follower));
                    });
                }
            }
        },
        events: {
            'imputusername': () => this.search()
        }
    }
</script>

<style>
*
{
text-align: center !important;
margin: auto !important;
}
</style>
