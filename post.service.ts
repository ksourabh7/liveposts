import { Post} from './post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  listChanged = new Subject<Post[]>();
    listofPosts: Post[]= [
        // new Post(
        //   'World Ocean Day ',
        //   `
        //   For 2020 World Oceans Day is growing the global movement to call on world leaders to protect 30% of our blue planet by 2030. This critical need is called 30x30. By safeguarding at least 30% of our ocean through a network of highly protected areas we can help ensure a healthy home for all!
        //   `,
        //   'https://www.ecomagazine.com/images/Newsletter/0_2019/Week_11-18-19/birdseyeview_ocean.jpg',
          
        //   'test@test.com',
        //   new Date()
        // ),
        // new Post(
        //   'Beautiful Nature',
        //   `
        //   From enchanting nature’s beauty quotes that evoke visions of lush meadows full of brilliantly-colored flowers or dense forests with sky-high trees to famous quotes about nature’s ever-present—and absolutely fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your couch and get outside. For famous quotes about nature, we have them here!      `,
        //   'https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg',
          
        //   'test@test.com',
        //   new Date()
        // ),
        // new Post(
        //    'Cricket',
        //   `
        //   Kohli captained India Under-19s to victory at the 2008 Under-19 World Cup in Malaysia. After a few months later, he made his ODI debut for India against Sri Lanka at the age of 19. Initially having played as a reserve batsman in the Indian team `,
        //   'https://timesofindia.indiatimes.com/thumb/msid-75279552,width-1200,height-900,resizemode-4/.jpg',
          
        //   'test@test.com',
        //   new Date()
        // ),
        // new Post(
        //   'River',
        //  `
        //  A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of water. `,
        //  'https://cdn.britannica.com/66/101766-050-85FEF17D/Missouri-River-Gates-of-the-Mountains-Helena.jpg',
         
        //  'test@test.com',
        //  new Date()
       
       ] ;
        addPosts(post: Post) {
            this.listofPosts.push(post)
       }
        deletePost(index: number) {
            this.listofPosts.splice(index , 1);
        }
        
        updatePost(post: Post , index: number) {
            this.listofPosts[index]=post;
        }
        
        getPosts(){
            return this.listofPosts;
        }

        getPost(index: number) {
            return this.listofPosts[index];
        }
        
        setPosts(listofPosts: Post[]) {
          if (listofPosts) {
              this.listofPosts= listofPosts;
          }  else {
            this.listofPosts =null;
          }
           
          this.listChanged.next(this.listofPosts);
        }
        

 }